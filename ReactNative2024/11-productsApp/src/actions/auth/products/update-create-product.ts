import { isAxiosError } from "axios";
import { tesloApi } from "../../../config/api/tesloApi";
import { Product } from "../../../domain/entities/product";
import { ProductMapper } from "../../../infrastructure/interfaces/mappers/product.mapper";
import { TesloProduct } from "../../../infrastructure/interfaces/teslo-products.response";

export const updateCreateProduct = (product: Partial<Product>) => {
  product.stock = isNaN(Number(product.stock)) ? 0 : Number(product.stock);
  product.price = isNaN(Number(product.price)) ? 0 : Number(product.price);

  if (product.id && product.id !== "new") {
    return updateProduct(product);
  }

  return createProduct(product);
}

const updateProduct = async (product: Partial<Product>): Promise<Product> => {
  const { id, images = [], ...rest } = product;
  try {
    const checkedImages = await prepareImages(images);
    const { data } = await tesloApi.patch<TesloProduct>(`/products/${id}`, { images: checkedImages, ...rest });
    return ProductMapper.tesloProductToEntity(data);
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data);
    }
    throw new Error(`Error al actualizar producto ${id}`);
  }
}

const createProduct = async (product: Partial<Product>): Promise<Product> => {
  const { id, images = [], ...rest } = product;
  try {
    const checkedImages = await prepareImages(images);
    const { data } = await tesloApi.post<TesloProduct>(`/products/`, { images: checkedImages, ...rest });
    return ProductMapper.tesloProductToEntity(data);
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data);
    }
    throw new Error(`Error al crear producto ${id}`);
  }
}

const prepareImages = async (images: string[]) => {

  const fileImages = images.filter(image => image.includes("file://"));
  const currentImages = images.filter(image => !image.includes("file://"));


  if (fileImages.length > 0) {
    const uploadPromises = fileImages.map(uploadImage);
    const uploadedImages = await Promise.all(uploadPromises);
    currentImages.push(...uploadedImages);
  }

  return currentImages.map(
    image => image.split("/").pop()
  )
}

const uploadImage = async (image: string) => {
  const formData = new FormData();
  formData.append("file", {
    uri: image,
    type: "image/jpeg",
    name: image.split("/").pop()
  })

  const { data } = await tesloApi.post<{ image: string }>("/files/product", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

  return data.image;
}
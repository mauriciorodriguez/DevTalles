import { tesloApi } from "../../../config/api/tesloApi";
import { Gender, Product } from "../../../domain/entities/product";
import { ProductMapper } from "../../../infrastructure/interfaces/mappers/product.mapper";
import { TesloProduct } from "../../../infrastructure/interfaces/teslo-products.response";

const emptyProduct: Product = {
  id: "",
  title: "Nuevo producto",
  price: 0,
  description: "",
  slug: "",
  stock: 0,
  sizes: [],
  gender: Gender.Unisex,
  tags: [],
  images: []
}

export const getProductById = async (id: string): Promise<Product> => {

  if (id === "new") {
    return emptyProduct;
  }

  try {
    const { data } = await tesloApi.get<TesloProduct>(`/products/${id}`);
    return ProductMapper.tesloProductToEntity(data);
  } catch (error) {
    throw new Error(`Error getting product by id: ${id}`);
  }
}
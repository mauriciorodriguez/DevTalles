import { tesloApi } from "../../../config/api/tesloApi";
import { Product } from "../../../domain/entities/product";
import { ProductMapper } from "../../../infrastructure/interfaces/mappers/product.mapper";
import type { TesloProduct } from "../../../infrastructure/interfaces/teslo-products.response";

export const getProductsByPage = async (page: number, limit: number = 20): Promise<Product[]> => {
  try {
    const { data } = await tesloApi.get<TesloProduct[]>(`/products?offset=${page * limit}&limit=${limit}`)
    return data.map(ProductMapper.tesloProductToEntity);
  } catch (error) {
    throw new Error(`Error al obtener productos de la pagina ${page} ${limit}`);
  }
}
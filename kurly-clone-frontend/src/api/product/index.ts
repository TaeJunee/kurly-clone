import axios from "axios"
import { QueryFunctionContext } from "@tanstack/react-query"

const BASE_URL = 'http://localhost:8080/product';

const getProduct = async (query: QueryFunctionContext) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${query.queryKey}`)
    return data;
  } catch (e: any) {
    throw Error(e);
  }
}

const getProductList = async (query: any) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/list`,
    { params: { category: query.queryKey[0].category, subCategory: query.queryKey[0].subCategory }})
    return data;
  } catch (e: any) {
    console.log(e);
    throw Error(e);
  }
}

const getRandomProducts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/random`);
    return data;
  } catch (e: any) {
    throw Error(e);
  }
}

const getRandomProductsOnsale = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/random/onsale`);
    return data;
  } catch (e: any) {
    throw Error(e);
  }
}

export { getProduct, getProductList, getRandomProducts, getRandomProductsOnsale }
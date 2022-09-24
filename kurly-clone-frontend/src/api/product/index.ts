import axios from "axios"
import { QueryFunctionContext } from "@tanstack/react-query"

const BASE_URL = 'http://localhost:8080/api';

const getProduct = async (query: QueryFunctionContext) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/goods/${query.queryKey}`)
    console.log(data);
    return data;
  } catch (e: any) {
    throw Error(e)
  }
}

const getCategoryProduct = async (query: any) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/goods-list`,
    { params: { category: query.queryKey[0].category, subCategory: query.queryKey[0].subCategory }})
    return data;
  } catch (e: any) {
    console.log(e);
    throw Error(e);
  }
}

const getSubCategoryProduct = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/category-list`,
    { params: { category: '채소', subCategory: '친환경' }})
    return data;
  } catch (e: any) {
    throw Error(e);
  }
}

export { getProduct, getCategoryProduct, getSubCategoryProduct }
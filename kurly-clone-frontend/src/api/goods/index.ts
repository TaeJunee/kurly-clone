import axios from "axios"
import { QueryFunctionContext } from "@tanstack/react-query"

const BASE_URL = 'http://localhost:8080/api';

const getGoods = async (query: QueryFunctionContext) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/goods/${query.queryKey}`)
    return data;
  } catch (e: any) {
    throw Error(e)
  }
}

const getCategoryGoods = async (query: any) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/goods-list`,
    { params: { category: query.queryKey[0].category, subCategory: query.queryKey[0].subCategory }})
    return data;
  } catch (e: any) {
    console.log(e);
    throw Error(e);
  }
}

export { getGoods, getCategoryGoods }
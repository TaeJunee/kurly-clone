import axios from "axios"
import { QueryFunctionContext } from "@tanstack/react-query"

const BASE_URL = 'http://localhost:8080/goods';


const getProduct = async (query: QueryFunctionContext) => {

  try {
    const { data } = await axios.get(`${BASE_URL}/${query.queryKey[1]}`)
    console.log(data);
    return data;
  } catch (e: any) {
    throw Error(e)
  }
}

export { getProduct }
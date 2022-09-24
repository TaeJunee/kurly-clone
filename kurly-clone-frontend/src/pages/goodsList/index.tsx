import styled from "styled-components";
import { useQuery } from "@tanstack/react-query"
import qs from "qs"
import { getCategoryProduct } from "../../api/product"
import { categoryList } from '../../components/common/globalHeader/category/categoryList'
import CategoryProduct from "../../components/product/CategoryProduct";
import { useNavigate } from "react-router-dom";

interface Location {
  location: {
    search: string | Record<string, string>;
  };
}

export interface DataType {
    oid?: number;
    category?: string;
    subCategory?: string;
    createAt?: string;
    updateAt?: string;
    description: string;
    name: string;
    info?: string;
    price: number;
    thumbnail: string;
    imgMain?: string;
    discount?: number;
}

function selector(data: DataType) {
  for (let obj of categoryList) {
    if (obj.text === data.category) {
      return obj;
    }
  }
  return;
}

export default function GoodsList({ location }: Location) {
  const navigate = useNavigate();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true })
  const { data, isLoading, error } = useQuery([query], getCategoryProduct);

  if (isLoading) { return <span>Loading...</span> }
  if (error instanceof Error) { return <span>Error: {error.message}</span> }
  return (
    <MainContainer id="container">
      <CategoryTitle>{selector(data[0])?.text}</CategoryTitle>
      <CategoryWrapper>
        <CategoryList onClick={() => navigate(`/goods-list?category=${selector(data[0])?.text}`)}><a>전체보기</a></CategoryList>
        {selector(data[0])?.subMenu.map((item) => {
          return <CategoryList onClick={() => navigate(`/goods-list?category=${selector(data[0])?.text}&subCategory=${item.text}`)}><a>{item.text}</a></CategoryList>
        })}
      </CategoryWrapper>
      <Sort>
        <div className="count">총 {data.length}개</div>
        <ul>
          <SortBy><a>추천순</a></SortBy>
          <SortBy><a>신상품순</a></SortBy>
          <SortBy><a>판매량순</a></SortBy>
          <SortBy><a>혜택순</a></SortBy>
          <SortBy><a>낮은가격순</a></SortBy>
          <SortBy><a>높은가격순</a></SortBy>
        </ul>
      </Sort>
      <GoodsContainer>
        {data.map((item: DataType) => {
          return <CategoryProduct 
            name={item.name}
            description={item.description}
            thumbnail={item.thumbnail}
            price={item.price}
            discount={item.discount}
            oid={item.oid} /> })}
      </GoodsContainer>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 1050px;
  margin: 0px auto;
  padding-top: 26px;
  padding-bottom: 160px;
  position: relative;
`
const CategoryTitle = styled.h3`
  padding: 23px 0px 20px;
  font-weight: 500;
  font-size: 28px;
  color: rgb(51, 51, 51);
  line-height: 35px;
  letter-spacing: -1px;
  text-align: center;
`
const CategoryWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 9px 0px 19px;
  padding: 12px 0px 29px 39px;
  border: 1px solid rgb(226, 226, 226);
  line-height: 20px;
`
const CategoryList = styled.li`
  flex: 0 0 263px;
  overflow: hidden;
  padding: 16px 40px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:nth-of-type(4n) {
    flex-basis: 180px;
    padding-right: 0px;
  }
  a {
    letter-spacing: -1px;
    cursor: pointer;
  }
`
const Sort = styled.div`
  display: flex;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 18px 0px 16px;
  & .count {
    font-size: 12px;
    font-weight: 500;
    color: rgb(51, 51, 51);
  }
  & ul {
    position: relative;
    display: flex;
    align-items: center;
  }
`
const SortBy = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 24px;
  margin-left: 8px;
  font-size: 12px;
  color: rgb(153, 153, 153);
  cursor: pointer;
  &:nth-of-type(n+2)::before {
    content: "";
    display: flex;
    width: 1px;
    height: 10px;
    margin-right: 8px;
    background-color: rgb(226, 226, 226);
  }
  a {
    letter-spacing: -0.3px;
  }
`
const GoodsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1050px;
`
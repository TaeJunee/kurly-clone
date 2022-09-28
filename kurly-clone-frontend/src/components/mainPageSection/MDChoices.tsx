import { useQuery } from "@tanstack/react-query"
import styled, { css } from "styled-components"
import { useState } from 'react'
import { getRandomProducts } from "../../api/product"
import { categoryList } from "../common/globalHeader/category/categoryList"
import ProductSwiper from "../product/ProductSwiper"

interface Props {
  onSale: boolean;
}

export default function MDChoices({ onSale }: Props) {
  const [category, setCategory] = useState('채소');
  const { data, isLoading, error } = useQuery([onSale, category], getRandomProducts)

  return (
    <Container>
      <TitleWrapper>
        <TitleInnerWrapper>
          <span className='sectionTitle'>MD의 추천</span>
          </TitleInnerWrapper>
      </TitleWrapper>
      <CategoryWrapper>
        {categoryList.map((item, index) => {
          return <li><CategoryBtn 
            key={index}
            onClick={() => setCategory(item.text)}
            selected={item.text === category}>{item.text}</CategoryBtn></li>
        })}
      </CategoryWrapper>
      <ProductWrapper>
        <ProductSwiper data={data}/>
      </ProductWrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  width: 1050px;
  margin: 0px auto;
  padding: 40px 0px;
`
const TitleWrapper = styled.div`
  margin-bottom: 27px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TitleInnerWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 8px 0px 8px 8px;
  & .sectionTitle {
    color: rgb(51, 51, 51);
    font-size: 28px;
    line-height: 1.15;
    letter-spacing: -0.26px;
    font-weight: 500;
  }
`
const ProductWrapper = styled.div`
  position: relative;
  width: 1050px;
  margin: 0px auto;
`
const CategoryWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  place-content: center;
`
const CategoryBtn = styled.button<{ selected: boolean }>`
  display: block;
  padding: 10px 20px;
  border-radius: 22px;
  margin: 0px 5px 20px;
  font-size: 14px;
  height: 40px;
  line-height: 16px;
  background-color: rgb(247, 247, 247);
  color: rgb(51, 51, 51);
  ${({ selected }) => 
    selected 
      ? css`
          background-color: rgb(95, 0, 128);
          color: rgb(255, 255, 255);
        `
      : css`
      `}
`
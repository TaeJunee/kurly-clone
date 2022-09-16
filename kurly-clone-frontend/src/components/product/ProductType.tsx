import React from 'react'
import styled from 'styled-components'
import ProductSwiper from './ProductSwiper'
import { ProductInformation } from '../fakeRepo/salesProducts/salesProducts'

type Props = {
  items: ProductInformation[],
  title: string,
}

export default function ProductType({ items, title }: Props) {
  return (
    <ProductContainer>
      <ProductTypeWrapper>
        <ProductTypeTextWrapper>
          <ProductTypeText>
            <SpanText>{title}</SpanText>
          </ProductTypeText>
        </ProductTypeTextWrapper>
        <ProductListWrapper>
          <ProductSwiper items={items}/>
        </ProductListWrapper>
      </ProductTypeWrapper>
    </ProductContainer>
  )
}

const ProductContainer = styled.div`
  height: 100%;
`
const ProductTypeWrapper = styled.div`
  width: 1050px;
  margin: 0px auto;
  padding: 40px 0px;
`

const ProductTypeTextWrapper = styled.div`
  margin-bottom: 27px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ProductTypeText = styled.div`
  position: relative;
  display: flex;
  padding: 8px 0px 8px 8px;
`

const SpanText = styled.span`
  color: rgb(51, 51, 51);
  font-size: 28px;
  line-height: 1.15;
  letter-spacing: -0.26px;
  font-weight: 500;
`

const ProductListWrapper = styled.div`
  position: relative;
  width: 1050px;
  margin: 0px auto;
`
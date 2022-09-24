import styled from 'styled-components'
import { ProductInformation } from '../fakeRepo/salesProducts/salesProducts'

type Props = {
  item: ProductInformation,
}

export default function MainPageGoods({ item }: Props) {
  return (
    <ProductWrapper>
      <ImageWrapper>
        <img
          src={item.img}
          alt="상품 이미지"
          loading="lazy"
         />
      </ImageWrapper>
      <ProductInfo>
        <ProductName>
          {item.text}
        </ProductName>
        <ContentRow>
          <ProductPrice>
            <SalesPrice>{item.saledPrice().toLocaleString()} 원</SalesPrice>
          </ProductPrice>
        </ContentRow>
      </ProductInfo>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  color: rgb(51, 51, 51);
  cursor: pointer;
  width: 249px;
`

const ImageWrapper = styled.div`
  height: 320px;
  overflow: hidden;
  position: relative;
  background-color: rgb(245, 245, 245);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease-in-out 0s;
  }
`

const ProductInfo = styled.div`
  position: relative;
  padding: 14px 10px 0px 0px;
`

const ProductName = styled.h3`
  font-size: 16px;
  line-height: 1.45;
  font-weight: 400;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: normal;
  word-break: break-word;
  overflow-wrap: break-word;
`

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
`

const SalesPrice = styled.span`
  font-size: 16px;
  font-weight: 800;
  line-height: 1.5;
  white-space: nowrap;
`

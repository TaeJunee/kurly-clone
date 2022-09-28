import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { DataType } from '../../pages/productList'

export default function MainPageProduct({ name, price, discount, thumbnail, idf_product }: DataType) {
  const navigate = useNavigate();
  
  return (
    <ProductWrapper onClick={() => navigate(`/product/${idf_product}`)}>
      <ImageWrapper>
        <img
          src={thumbnail}
          alt="상품 이미지"
          loading="lazy"
         />
      </ImageWrapper>
      <ProductInfo>
        <ProductName>
          {name}
        </ProductName>
        <ContentRow>
          <ProductPrice>
            {discount
            ? <PriceContainer>
                <div>
                  <span className='discount-rate'>{Math.floor(discount * 100)}%</span>
                  <span className="sales-price">{(Math.round(price * (1 - discount) / 10) * 10).toLocaleString()} 원</span>
                  </div>
                <span className='dimmed-price'>{price.toLocaleString()} 원</span>
              </PriceContainer>
            : <PriceContainer><span className="sales-price">{price.toLocaleString()} 원</span></PriceContainer> }
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

const PriceContainer = styled.span`
  font-size: 16px;
  font-weight: 800;
  line-height: 1.5;
  white-space: nowrap;
  & .discount-rate {
    color: rgb(250, 98, 47);
    margin-right: 7px;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    white-space: nowrap;
    letter-spacing: -0.5px;
  }
  & .sales-price {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    white-space: nowrap;
    letter-spacing: -0.5px;
  }
  & .dimmed-price {
    padding-top: 2px;
    font-size: 16px;
    color: rgb(181, 181, 181);
    line-height: 24px;
    text-decoration: line-through;
  }
`

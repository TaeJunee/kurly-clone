import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { DataType } from "../../pages/productList"

export default function CategoryProduct({ name, description, thumbnail, price, idf_product, discount }: DataType) {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/product/${idf_product}`)}>
      <ImageWrapper>
        <img alt="상품 이미지" loading="lazy" src={thumbnail}/>
        <CartWrapper>
          <CartButton>
            <img alt="장바구니 아이콘" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="/>
          </CartButton>
        </CartWrapper>
      </ImageWrapper>
      <InfoWrapper>
        <span className="delivery-type"><span>{}</span></span>
        <Name>{name}</Name>
        {discount
          ? <PriceContainer>
              <div>
                <span className='discount-rate'>{Math.floor(discount * 100)}%</span>
                <span className="sales-price">{(Math.round(price * (1 - discount) / 10) * 10).toLocaleString()} 원</span>
                </div>
              <span className='dimmed-price'>{price.toLocaleString()} 원</span>
            </PriceContainer>
          : <PriceContainer><span className="sales-price">{price.toLocaleString()} 원</span></PriceContainer> }
        <Description>{description}</Description>
      </InfoWrapper>
    </Container>
  )
}

const Container = styled.div`
  flex: 0 0 338px;
  height: 682px;
  margin-right: 16px;
  color: rgb(51, 51, 51);
  cursor: pointer;
  &:nth-of-type(3n) {
    margin-right: 0px;
  }
`
const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  background-color: rgb(245, 245, 245);
  width: 338px;
  height: 435px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease-in-out 0s;
  }
`
const CartWrapper = styled.div``
const CartButton = styled.button`
  position: absolute;
  right: 16px;
  bottom: 16px;
`
const InfoWrapper = styled.div`
  padding: 14px 10px 0px 0px;
  & .delivery-type {
    display: block;
    padding-bottom: 2px;
    span {
      font-size: 14px;
      color: rgb(153, 153, 153);
      line-height: 19px;
      letter-spacing: -0.5px;
    }
  }
`
const Name = styled.div`
  overflow: hidden;
  max-height: 58px;
  margin-bottom: 9px;
  padding: 0px;
  font-size: 20px;
  line-height: 29px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: normal;
  word-break: break-word;
  overflow-wrap: break-word;
`
const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
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
const Description = styled.p`
  overflow: hidden;
  padding-top: 12px;
  font-size: 13px;
  color: rgb(153, 153, 153);
  line-height: 18px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: normal;
  word-break: break-word;
  overflow-wrap: break-word;
`
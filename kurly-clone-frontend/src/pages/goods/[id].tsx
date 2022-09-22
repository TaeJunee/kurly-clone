import styled from "styled-components"
import GlobalFooter from "../../components/common/globalFooter/GlobalFooter"
import GlobalHeader from "../../components/common/globalHeader/GlobalHeader"

export default function GoodsPage() {
  return (
    <>
    <GlobalHeader />
    <Wrapper>
    <Wrap>
      <ProductAtf id="product-atf">
        <ProductImg />
        <ProductInfoContainer>
          <ProductNameContainer>
            <Delivery></Delivery>
            <ProductNameWrapper>
              <ProductName>{}</ProductName>
              <ShareButton />
            </ProductNameWrapper>
            <ProductSubName>{}</ProductSubName>
          </ProductNameContainer>
          <PriceWrapper>
            <Price>{}</Price>
            <Won>원</Won>
          </PriceWrapper>
          <Membership>로그인 후, 적립 혜택이 제공됩니다.</Membership>
        <ProductNoticeContainer>    
        </ProductNoticeContainer>

        </ProductInfoContainer>
        
      </ProductAtf>
      <NavContainer>
          <NavWrapper>
            <NavItems>
              <NavLink><NavText>상품설명</NavText></NavLink>
            </NavItems>
            <NavItems>
              <NavLink><NavText>상세정보</NavText></NavLink>
            </NavItems>
            <NavItems>
              <NavLink><NavText>후기{}</NavText></NavLink>
            </NavItems>
            <NavItems>
              <NavLink><NavText>문의</NavText></NavLink>
            </NavItems>
          </NavWrapper>
        </NavContainer>
        <ProductDetailContainer>
          <ProductDetails id='description'></ProductDetails>
          <ProductDetails id='detail'></ProductDetails>
          <ProductDetails id='review'></ProductDetails>
          <ProductDetails id='inquiry'></ProductDetails>
        </ProductDetailContainer>
    </Wrap>
    </Wrapper>
    <GlobalFooter />
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`

const Wrap = styled.div`
  position: relative;
  width: 1050px;
  margin: 0px auto;
  padding-top: 30px;
`

const ProductAtf = styled.article`
  display: flex;
  justify-content: space-between;
  font-family: "Noto Sans";
`

const ProductImg = styled.div`
  width: 430px;
  height: 552px;
  background: url(https://img-cf.kurly.com/shop/data/goods/1593751693106l0.jpg) 0% 0% / cover, url(https://res.kurly.com/_next/static/images/noimg-150x195-2c819ff….svg) 50% 50% / contain no-repeat rgb(245, 245, 245);
`

const ProductInfoContainer = styled.div`
  width: 560px;
`

const ProductNameContainer = styled.div``

const Delivery = styled.span`
font-weight: 500;
line-height: 1.36;
letter-spacing: -0.5px;
color: rgb(153, 153, 153);
margin-bottom: 6px;
width: 500px;
`

const ProductNameWrapper = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: space-between;
`

const ProductName = styled.h2`
  width: 500px;
  font-weight: 500;
  font-size: 24px;
  color: rgb(51, 51, 51);
  line-height: 34px;
  letter-spacing: -0.5px;
  word-break: keep-all;
  margin-right: 20px;
`

const ShareButton = styled.button`
width: 40px;
height: 40px;
background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBzdHJva2U9IiNEREQiIGN4PSIyMCIgY3k9IjIwIiByPSIxOS41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNSAxMSkiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjgiPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iOSIgcj0iMi4xIi8+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMTM3KSI+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSI4Ljg2MyIgY3k9IjMiIHI9IjIuMSIvPgogICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTAgOC4xMzYgNi4zNjMgNC41Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNS4xMzcgMTgpIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjguODYzIiBjeT0iMyIgcj0iMi4xIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNMCA4LjEzNiA2LjM2MyA0LjUiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==) 50% 50% no-repeat;
`

const ProductSubName = styled.p`
padding-top: 5px;
font-size: 14px;
color: rgb(181, 181, 181);
line-height: 19px;
letter-spacing: -0.5px;
`

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-top: 19px;
  font-weight: bold;
  line-height: 30px;
  letter-spacing: -0.5px;
`

const Price = styled.span`
  padding-right: 4px;
  font-size: 28px;
  color: rgb(51, 51, 51);  
`

const Won = styled.span`
  display: inline-block;
  position: relative;
  top: 3px;
  font-size: 18px;
  color: rgb(51, 51, 51);
  vertical-align: top;
`
const Membership = styled.div`
  font-size: 14px;
  color: rgb(95, 0, 128);
  line-height: 19px;
  height: 19px;
  letter-spacing: -0.5px;
  margin-top: 14px;
`

const ProductNoticeContainer = styled.div`
  margin-top: 20px;
`

const NavContainer = styled.nav`
  z-index: 20;
  position: sticky;
  top: 56px;
  width: 1010px;
  box-shadow: rgb(221 221 221) 0px -0.5px 0px 0px inset;
  background-color: rgb(255, 255, 255);
  margin-top: 50px;
`

const NavWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  height: 60px;
`

const NavItems = styled.div`
  display: flex;
  flex: 1 1 0%;
  border-width: 1px 0px 0px 1px;
  border-color: rgb(238, 238, 238);
  border-style: solid;
  background-color: rgb(255, 255, 255);
  &: last-of-type {
    bordor-right-width: 1px;
  }
`

const NavLink = styled.a`
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const NavText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: rgb(102, 102, 102);
`

const ProductDetailContainer = styled.div`
  padding-bottom: 60px;
`

const ProductDetails = styled.div`
  position: relative;
  width: 1010px;
  padding-top: 100px
  &: first-of-type {
    padding-top: 40px;
  }
`
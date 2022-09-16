import styled from 'styled-components'
import { SocialMediaList } from './SNSList'

export default function GlobalFooter() {
  return (
    <FooterWrapper>
      <Footer id="footer">
        <FooterContainer>
          <FooterLeft>
            <CustomerCenterText>고객행복센터
              <span>365일 오전 7시 - 오후 7시</span>
            </CustomerCenterText>
            <CustomerCenterCall>1644-1107</CustomerCenterCall>
            <AskContainer>
              <AskFirst>카카오톡 문의</AskFirst>
              <AskSecondAndThrid>1:1 문의</AskSecondAndThrid>
              <AskSecondAndThrid>대량주문 문의</AskSecondAndThrid>
            </AskContainer>
            <AskEmail>
            비회원 문의 : 
            <a href="mailto:help@kurlycorp.com"> help@kurlycorp.com</a>
            <br/>
            비회원 대량주문 문의 :
            <a href="mailto:kurlygift@kurlycorp.com"> kurlygift@kurlycorp.com</a>
            </AskEmail>
          </FooterLeft>
          <FooterRight>
            <Intros>
              <IntroList><a>컬리소개</a></IntroList>
              <IntroList><a>컬리소개영상</a></IntroList>
              <IntroList><a>인재채용</a></IntroList>
              <IntroList><a>이용약관</a></IntroList>
              <IntroList><a>개인정보처리방침</a></IntroList>
              <IntroList><a>이용안내</a></IntroList>
            </Intros>
            <Info>
              법인명 (상호) : 주식회사 컬리 
              <Bar />
              사업자등록번호 : 261-81-23567
              <PurpleLink>사업자정보확인</PurpleLink>
              <br />
              통신판매업 : 제 2018-서울강남-01646 호 
              <Bar />
              개인정보보호책임자 : 이원준
              <br/>
              주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) 
              <Bar />
              대표이사 : 김슬아
              <br/>
              입점문의 :
              <PurpleLink>입점문의하기</PurpleLink>
              <Bar />
              제휴문의 :
              <PurpleLink>business@kurlycorp.com</PurpleLink>
              <br/>
              채용문의 :
              <PurpleLink>recruit@kurlycorp.com</PurpleLink>
              <br/>
              팩스: 070 - 7500 - 6098
            </Info>
            <SNSContainer>
              {SocialMediaList.map((item) => (
                <SNS
                  key={item.id}
                  href={item.href}
                  target="_blank"
                >
                  <img
                    key={item.id}
                    src={item.src}
                    alt={item.alt}
                  />
                </SNS>
              ))}
            </SNSContainer>
          </FooterRight>
        </FooterContainer>
      </Footer>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  padding-top: 29px;
  border-top: 1px solid rgb(247, 247, 247);
`

const Footer = styled.div`
  width: 1050px;
  margin: 0px auto;
`

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding-bottom: 67x;
`

const FooterLeft = styled.div``

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;s
`

const CustomerCenterText = styled.h2`
  padding-bottom: 17px;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;

  span {
    margin-left: 8px;
    font-weight: normal;
    font-size: 16px;
  }
`

const CustomerCenterCall = styled.strong`
  display: block;
  padding-bottom: 20px;
  font-size: 28px;
  line-height: 40px;
`

const AskContainer = styled.div`
  display: flex;
  margin-bottom: 38px;
`

const AskFirst = styled.button`
  display: block;
  width: 140px;
  height: 40px;
  border: 1px solid rgb(226, 226, 226);
  border-radius: 3px;
  line-height: 39px;
  text-align: center;
`

const AskSecondAndThrid = styled.button`
  display: block;
  width: 140px;
  height: 40px;
  margin-left: 8px;
  border: 1px solid rgb(226, 226, 226);
  border-radius: 3px;
  line-height: 39px;
  text-align: center;
`

const AskEmail = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: rgb(153, 153, 153);
`

const Intros = styled.ul`
  display: flex;
  width: 100%;
  padding-bottom: 29px;
`

const IntroList = styled.li`
  margin-left: 14px;

  &: first-of-type {
    margin-left: 0px;
  }

  &: nth-of-type(5) {
    font-weight: 500;
  }

  a {
    font-size: 14px;
    line-height: 18px;
  }
`

const Info = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgb(153, 153, 153);
`

const Bar = styled.span`
  padding-left: 4px;

  &::after {
    content: "|";
    padding-right: 4px;
    font-size: 10px;
    vertical-align: top;
  }
`

const PurpleLink = styled.a`
  margin-left: 3px;
  color: rgb(95, 0, 128);
`

const SNSContainer = styled.ul`
  display: flex;
  padding-top: 28px;
`

const SNS = styled.a`
  display: flex;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
import { useQuery } from "@tanstack/react-query"
import styled from "styled-components"
import { getRandomProducts } from "../../api/product";
import ProductSwiper from "../product/ProductSwiper"

interface Props {
  title: string;
  more: boolean;
  onSale: boolean;
}

export default function RandomCollection({ title, more, onSale }: Props) {
  const { data, isLoading, error } = useQuery([onSale], getRandomProducts);

  if (isLoading) { return <span>Loading...</span> }
  if (error instanceof Error) { return <span>Error: {error.message}</span> }

  return (
    <Container>
      <TitleWrapper>
        <TitleInnerWrapper more={more}>
          <span className='sectionTitle'>{title}</span>
          {more 
          && <span className='moreBtn'>
              <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0wIDBoMzJ2MzJIMHoiLz4KICAgICAgICA8cGF0aCBkPSJtMTAuOTUyIDIzLjM4NCAyLjA5NiAyLjE0NiAxMC4wNTUtOS44MjUtOS43MDEtMTAuMjc4LTIuMTgyIDIuMDYgNy42NzcgOC4xMzN6IiBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICAgIDwvZz4KPC9zdmc+Cg==' alt='더보기 아이콘' />
            </span>}
        </TitleInnerWrapper>
      </TitleWrapper>
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
const TitleInnerWrapper = styled.div<{ more: boolean }>`
  position: relative;
  display: flex;
  padding: 8px 0px 8px 8px;
  cursor: ${({ more }) => more ? 'pointer': ''};
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

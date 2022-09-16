import React from 'react'
import styled from 'styled-components'

type PropsType = {
  subMenus: {text: string}[]
}

export default function SubCategory({ subMenus }: PropsType) {
  return (
    <SubCategoryList>
      {subMenus.map((item, index: number) => (
        <SubCategoryItem key={index}>
          <ItemTextWrapper>
            <ItemText>{item.text}</ItemText>
          </ItemTextWrapper>
        </SubCategoryItem>
      ))}
    </SubCategoryList>
  )
}

const SubCategoryList = styled.ul`
  width: 266px;
  height: 100%;
  position: absolute;
  overflow-y: auto;
  top: -1px;
  left: 249px;
  z-index: 20;
  animation: 0.5s linear 0s 1 normal none;
`

const SubCategoryItem = styled.li`
  cursor: pointer;
`

const ItemTextWrapper = styled.div`
  padding: 11px 20px 11px 18px;
  display: flex;
  width: 100%;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  color: rgb(51, 51, 51);
  line-height: 22px;
`

const ItemText = styled.span`
  line-height: 18px;

  ${ItemTextWrapper}: hover & {
    box-shadow: rgb(95 0 128) 0px -1px 0px 0px inset;
    font-weight: 500;
    color: rgb(95, 0, 128);
  }
`
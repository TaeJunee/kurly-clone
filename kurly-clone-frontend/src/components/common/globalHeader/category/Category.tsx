import { useState } from 'react'
import styled from 'styled-components'
import { categoryList } from './categoryList'
import CategoryItems from './CategoryItems'

export default function Category() {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
   
  }

  return (
    <CategoryWrap>
      <CategoryInnerWrap isHovering={isHovering} >
        <CategoryList
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {categoryList.map((item) => {
            return <CategoryItems key={item.id} items={item} isWide={isHovering} />
          })}
          <EmptySpace isHovering={isHovering}/>
        </CategoryList>
      </CategoryInnerWrap>
    </CategoryWrap>
  )
}


const CategoryWrap = styled.div`
  max-height: calc(95vh - 55px);
  min-height: 200px;
  position: absolute;
  display: flex;
  top: 46px;
  padding-top: 10px;
`

const CategoryInnerWrap = styled.div<{ isHovering: boolean }>`
  position: relative;
  z-index: 21;
  width: ${({ isHovering }) => isHovering ? '517' : '249'}px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  animation: 0s linear 0s 1 normal none;
`

const CategoryList = styled.ul`
  overflow: auto;
  width: 247px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
`

const EmptySpace = styled.li<{ isHovering: boolean }>`
width: ${({ isHovering }) => isHovering ? '268' : '0'}px;
  height: 100%;
  position: absolute;
  top: -1px;
  left: 247px;
  background-color: rgb(247, 247, 247);
  z-index: -1;
  animation: 0.2s linear 0s 1 normal none;
`
import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Category from './category/Category'
import { reset } from '../../../redux/features/categorySlice'
import { useDispatch } from 'react-redux';

export default function GlobalNav() {
  const [scrollFixed, setScrollFixed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const dispatch = useDispatch();
  
  const handleScroll = () => {
    if (window.scrollY >=100) {
      setScrollFixed(true);
    } else {
      setScrollFixed(false);
    }
  }

  const handleMouseEnter = () => {
    setIsHovering(true);
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
    dispatch(reset());
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <NavContainer scrollFixed={scrollFixed}>
      <NavInnerContainer scrollFixed={scrollFixed}>
        <Categories scrollFixed={scrollFixed}>
          <CategoryWrapper 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <CategoryMenuBar></CategoryMenuBar>
            <CategoryMenuText>카테고리</CategoryMenuText>
            {isHovering && <Category/>}
          </CategoryWrapper>
        </Categories>
        <NavMenusWrapper scrollFixed={scrollFixed}>
          <NavMenus scrollFixed={scrollFixed}>
            <NavMenuText>신상품</NavMenuText>
          </NavMenus>
          <NavMenus scrollFixed={scrollFixed}>
            <NavMenuText>베스트</NavMenuText>
          </NavMenus>
          <NavMenus scrollFixed={scrollFixed}>
            <NavMenuText>알뜰쇼핑</NavMenuText>
          </NavMenus>
          <NavMenus scrollFixed={scrollFixed}>
            <NavMenuText>특가/혜택</NavMenuText>
          </NavMenus>
        </NavMenusWrapper>
        {!scrollFixed && (
          <AnnouncementWrapper>
          <AnnouncementText>
            <span>샛별・낮</span> 배송안내
          </AnnouncementText>
        </AnnouncementWrapper>
        )}
        
      </NavInnerContainer>
    </NavContainer>
    <Box scrollFixed={scrollFixed}/>
    </>
  )
}

const NavContainer = styled.div<{ scrollFixed: boolean }>`
  min-width: 1050px;
  letter-spacing: -0.3px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
  width: 100%;
  ${({ scrollFixed }) => 
    scrollFixed 
      ? css`
          position: fixed;
          z-index: 101;
          top: 0px;
          left: 0px;`
      : css`
          position: relative;
      `}
`

const NavInnerContainer = styled.div<{ scrollFixed: boolean }>`
  position: relative;
  display: flex;
  justify-content: ${({ scrollFixed }) => scrollFixed ? 'flex-start' : 'space-between'};
  width: 1050px;
  height: 56px;
  margin: 0px auto;
`

const Categories = styled.div<{ scrollFixed: boolean }>`
  flex: ${({ scrollFixed }) => scrollFixed ? '0 0 120px': ''};
`

const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

const CategoryMenuBar = styled.span`
  width: 16px;
  height: 14px;
  margin-right: 14px;
  background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMTZ2MS43SDBWMHptMCA2LjE1aDE2djEuN0gwdi0xLjd6bTAgNi4xNWgxNlYxNEgwdi0xLjd6IiBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==") 0px 0px / 16px 14px no-repeat;
  ${CategoryWrapper}:hover & {
    url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMTZ2MS43SDBWMHptMCA2LjE1aDE2djEuN0gwdi0xLjd6bTAgNi4xNWgxNlYxNEgwdi0xLjd6IiBmaWxsPSIjNUYwMDgwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==") 0px 0px no-repeat;
  }
`

const CategoryMenuText = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.3px;
  color: rgb(51, 51, 51);
  ${CategoryWrapper}:hover & {
    color: rgb(95, 0, 128);
  }
`

const NavMenusWrapper = styled.ul<{ scrollFixed: boolean }>`
  display: flex;
  flex: ${({ scrollFixed }) => scrollFixed ? '0 0 0%': ''};
  margin-left: 30px;
`

const NavMenus = styled.li<{ scrollFixed: boolean }>`
  display: flex;
  flex: ${({ scrollFixed }) => scrollFixed ? '0 0 120px': ''};
  justify-content: center;
  width: 150px;
  height: 55px;
  padding-top: 18px;
  line-height: 20px;
  text-align: center;
`

const NavMenuText = styled.span`
  height: fit-content;
  font-size: 16px;
  font-weight: 500;
  color: rgb(51, 51, 51);
  cursor: pointer;

  &:hover {
    color: rgb(95, 0, 128);
    border-bottom: 1px solid rgb(95, 0, 128);
  }
`

const AnnouncementWrapper = styled.div`
  display: flex;
  align-items: center;
`

const AnnouncementText = styled.a`
  height: 32px;
  padding: 6px 16px;
  border-radius: 18px;
  border: 1px solid rgb(238, 238, 238);
  color: rgb(102, 102, 102);
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.32px;

  span {
    font-weight: 500;
    color: rgb(95, 0, 128);
  }
`

const Box = styled.div<{ scrollFixed: boolean }>`
  min-height: 56px;
  display: ${({ scrollFixed }) => scrollFixed ? '': 'none'};
`
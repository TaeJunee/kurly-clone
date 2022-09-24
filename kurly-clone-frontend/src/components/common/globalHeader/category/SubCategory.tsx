import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { setSubCategory, unsetSubCategory } from '../../../../features/category/subCategorySlice';

type PropsType = {
  category: string;
  text: string;
}

export default function SubCategory({ category, text }: PropsType) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
        <SubCategoryItem 
          onClick={() => navigate(`goods-list?category=${category}&subCategory=${text}`)}
          onMouseEnter={() => dispatch(setSubCategory(text))}
          onMouseLeave={() => dispatch(unsetSubCategory())}>
          <ItemTextWrapper>
            <ItemText>{text}</ItemText>
          </ItemTextWrapper>
        </SubCategoryItem>
  )
}

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
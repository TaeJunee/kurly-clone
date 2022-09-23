import styled from "styled-components"

export const InputWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  padding: 10px 20px;
`
export const LeftWrapper = styled.div`
  width: 139px;
  padding-top: 12px;
`
export const MiddleWrapper = styled.div`
  flex: 1 1 0%;
`
export const RightWrapper = styled.div`
  width: 120px;
  margin-left: 8px;
  `
export const LabelText = styled.label`
  font-weight: 500;
  color: rgb(51, 51, 51);
  line-height: 20px;
`
export const Star = styled.span`
  color: rgb(238, 106, 123);
`
export const InputWrap = styled.div`
  position: relative;
  padding-bottom: 0px;
`
export const InputField = styled.input`
  width: 100%;
  height: 48px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: rgb(51, 51, 51);
  outline: none;
  box-sizing: border-box;
`
export const Button = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 44px;
  border-radius: 3px;
  color: rgb(95, 0, 128);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(95, 0, 128);
  span {
    font-weight: 500;
    font-size: 14px;
    display: inline-block;
  }
  &:disabled {
    border-color: rgb(221, 221, 221);
    color: rgb(221, 221, 221);
    cursor: default;
  }
`
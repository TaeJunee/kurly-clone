import styled from "styled-components"

type Props = {
  message: string;
}

export default function Alert({ message }: Props) {
  return (
    <AlertWrapper><Text>{ message }</Text></AlertWrapper>
  )
}

const AlertWrapper = styled.div`
  padding: 10px 0px;
`

const Text = styled.p`
  font-size: 13px;
  color: rgb(240, 63, 64);
  margin-top: -4px;
`
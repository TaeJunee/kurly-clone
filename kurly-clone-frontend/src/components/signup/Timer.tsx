import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { timeout } from '../../features/timer/timerSlice'

export default function Timer() {
  const dispatch = useDispatch();
  const [minutes, setMinutes] = useState<number>(2);
  const [seconds, setSeconds] = useState<number>(59);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          dispatch(timeout())
          clearInterval(countdown);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds])
  return (
    <TimeCount>
      <span>{ String(minutes).length === 1 && '0'+String(minutes) }:{ String(seconds).length === 1 ? '0'+String(seconds) : String(seconds)}</span>
    </TimeCount>
  )
}

const TimeCount = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  span {
    color: rgb(240, 63, 64);
  }
`
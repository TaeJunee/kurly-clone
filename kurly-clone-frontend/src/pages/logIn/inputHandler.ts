import { useCallback, useState } from 'react'

export default function InputHandler() {

  const [memberId, setMemberId] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const onChangeMemberId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberId(e.target.value); 
}, [])

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, [])


  return {
    memberId,
    password,
    onChangeMemberId,
    onChangePassword,
  }
}
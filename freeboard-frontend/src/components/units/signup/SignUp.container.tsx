import { useRouter } from 'next/router'
import { useState } from 'react'
import SignUpUI1 from './SignUp.presenter'

export default function SignUp1() {
  const router = useRouter()

  const [createEmail, setCreateEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [createName, setCreateName] = useState('')
  const [errorName, setErrorName] = useState('')
  const [createPassword, setCreatePassword] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [errorCheckPassword, setErrorCheckPassword] = useState('')

  const [isActive, setIsActive] = useState(false)

  const onChangeEmail = (event) => {
    setCreateEmail(event.target.value)

    if (event.target.value !== '') {
      setErrorEmail('')
    }
    const CheckEmail = /^\w[0-9a-zA-Z]+@\w[a-zA-Z]+\.[a-zA-Z]{2,3}$/
    if (!CheckEmail.test(event.target.value)) {
      setErrorEmail('이메일 형식에 올바르지 않습니다')
    }

    if (
      CheckEmail.test(event.target.value) &&
      createName &&
      createPassword &&
      checkPassword
    ) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onChangeName = (event) => {
    setCreateName(event.target.value)

    if (event.target.value !== '') {
      setErrorName('')
    }
    const CheckName = /^[0-9a-zA-Z가-힇]{4,8}$/
    if (!CheckName.test(event.target.value)) {
      setErrorName('4~8자 사이로 입력하세요')
    }

    if (
      createEmail &&
      CheckName.test(event.target.value) &&
      createPassword &&
      checkPassword
    ) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onChangePassword = (event) => {
    setCreatePassword(event.target.value)

    if (event.target.value !== '') {
      setErrorPassword('')
    }

    const CheckPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,10}$/
    if (!CheckPassword.test(event.target.value)) {
      setErrorPassword('6~10자 영문, 숫자로 입력하세요')
    }

    if (
      createEmail &&
      createName &&
      CheckPassword.test(event.target.value) &&
      checkPassword
    ) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onChangeCheckPassword = (event) => {
    setCheckPassword(event.target.value)

    if (event.target.value !== '') {
      setErrorCheckPassword('')
    }

    if (createPassword !== event.target.value) {
      setErrorCheckPassword('비밀번호가 일치하지 않습니다.')
    }

    if (
      createEmail &&
      createName &&
      createPassword &&
      createPassword === event.target.value
    ) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onClickCreateButton = () => {
    router.push('/login')
  }

  return (
    <SignUpUI1
      isActive={isActive}
      errorEmail={errorEmail}
      errorName={errorName}
      errorPassword={errorPassword}
      errorCheckPassword={errorCheckPassword}
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeCheckPassword={onChangeCheckPassword}
      onClickCreateButton={onClickCreateButton}
    />
  )
}

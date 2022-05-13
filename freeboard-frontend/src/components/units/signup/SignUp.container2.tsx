import SignUpUI2 from './SignUp.presenter2'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from './SignUp.queries'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Modal } from 'antd'

export interface IFormValues {
  email?: string
  name?: string
  password?: string
  checkPassword?: string
}

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^\w[0-9a-zA-Z]+@\w[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
      '이메일 형식에 올바르지 않습니다'
    )
    .required('필수입력입니다.'),
  name: yup.string().max(5).required('필수입력입니다.'),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{1,8}$/,
      '비밀번호는 영문, 숫자, 포함한 8자리 이내 입니다.'
    )
    .required('필수입력입니다.'),
  checkPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다')
    .required('비밀번호가 일치하지 않습니다')
})

export default function SignUp2 () {
  const router = useRouter()

  const [createUser] = useMutation(CREATE_USER)

  const [isActive, setIsActive] = useState(false)

  const { register, handleSubmit, formState } = useForm<IFormValues>({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema)
  })

  const onClickCreateButton = async (data) => {
    const { email, password, name } = data
    console.log(data)

    if (email && password && name) {
      setIsActive(true)
    }
    try {
      await createUser({
        variables: {
          createUserInput: {
            email,
            password,
            name
          }
        }
      })

      Modal.success({ content: '회원가입이 완료되었습니다.' })
      router.push('/members/login/login.container')
    } catch (error) {
      Modal.error({ content: error.message })
    }
  }

  return (
    <SignUpUI2
      isActive={isActive}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickCreateButton={onClickCreateButton}
    />
  )
}

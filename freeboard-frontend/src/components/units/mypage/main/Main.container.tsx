import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import { Modal } from 'antd'
import Head from 'next/head'
import {
  FETCH_USER_LOGGED_IN,
  CREATE_POINT_TRANSACTION_OF_LOADING,
} from './Main.queries'
import MainUI from './Main.presenter'

export default function Main() {
  const [amount, setAmount] = useState(0)
  const [visible, setVisible] = useState(false)

  const { data } = useQuery(FETCH_USER_LOGGED_IN)
  const [createPoint] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING)

  const onChangeAmount = (e) => {
    setAmount(Number(e.target.value))
  }

  const onClickPayment = async () => {
    const IMP = window.IMP
    IMP.init('imp49910675')
    setVisible(false)
    IMP.request_pay(
      {
        // param
        pg: 'html5_inicis',
        pay_method: 'card',
        name: '(주)KBStar',
        amount: amount,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // console.log(rsp.imp_uid)
          point(rsp)
        } else {
          alert('결제 실패하였습니다.')
        }
      }
    )
  }

  const point = async (rsp) => {
    console.log(rsp.imp_uid)
    try {
      await createPoint({
        variables: {
          impUid: rsp.imp_uid,
        },
      })
      window.location.reload()
      /* refetch()
      alert('성공') */
    } catch (error) {
      Modal.error({
        content: error.message,
      })
    }
  }

  return (
    <MainUI
      Head={Head}
      data={data}
      visible={visible}
      setVisible={setVisible}
      onClickPayment={onClickPayment}
      onChangeAmount={onChangeAmount}
    />
  )
}

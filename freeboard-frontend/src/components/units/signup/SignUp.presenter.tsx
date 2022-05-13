import {
  ChangeEventHandler,
  ReactChild,
  ReactFragment,
  ReactPortal
} from 'react'
import * as A from './SignUp.styled'

export default function SignUpUI1 (props: {
  onChangeEmail: ChangeEventHandler<HTMLInputElement>
  errorEmail: boolean | ReactChild | ReactFragment | ReactPortal
  onChangeName: ChangeEventHandler<HTMLInputElement>
  errorName: boolean | ReactChild | ReactFragment | ReactPortal
  onChangePassword: ChangeEventHandler<HTMLInputElement>
  errorPassword: boolean | ReactChild | ReactFragment | ReactPortal
  onChangeCheckPassword: ChangeEventHandler<HTMLInputElement>
  errorCheckPassword: boolean | ReactChild | ReactFragment | ReactPortal
  isActive: any
}) {
  return (
    <>
      <A.LoginBackground>
        {/* <img src="/images/login.png" /> */}
        <A.LoginWrapper>
          {/* <img src="/images/logo2.png" /> */}
          <h2>회원가입</h2>
          <span>이메일</span>
          <A.LoginId
            type="text"
            placeholder="이메일을 입력해주세요"
            onChange={props.onChangeEmail}
          />
          <p>{props.errorEmail}</p>
          <span>이름</span>
          <A.LoginId
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={props.onChangeName}
          />
          <p>{props.errorName}</p>
          <span>비밀번호</span>
          <A.LoginPassword
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={props.onChangePassword}
          />
          <p>{props.errorPassword}</p>

          <span>비밀번호 확인</span>
          <A.LoginPassword
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={props.onChangeCheckPassword}
          />
          <p>{props.errorCheckPassword}</p>

          <A.LoginButton
            style={
              props.isActive
                ? { cursor: 'pointer', background: '#ffa91f', color: 'white' }
                : { cursor: 'auto', background: 'white', color: '#583700' }
            }
          >
            회원가입
          </A.LoginButton>
        </A.LoginWrapper>
      </A.LoginBackground>
    </>
  )
}

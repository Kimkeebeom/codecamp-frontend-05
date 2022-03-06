import * as A from './SignUp.styled'

export default function SignUpUI2(props) {
  return (
    <>
      <A.LoginBackground
        onSubmit={props.handleSubmit(props.onClickCreateButton)}
      >
        {/* <img src="/images/login.png" /> */}
        <A.LoginWrapper>
          {/* <img src="/images/logo2.png" /> */}
          <h2>회원가입</h2>
          <span>이메일</span>
          <A.LoginId
            type="text"
            placeholder="이메일을 입력해주세요"
            {...props.register('email')}
          />
          <p>{props.formState?.errors?.email?.message}</p>
          <span>이름</span>
          <A.LoginId
            type="text"
            placeholder="이름을 입력해주세요"
            {...props.register('name')}
          />
          <p>{props.formState?.errors?.name?.message}</p>

          <span>비밀번호</span>
          <A.LoginPassword
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...props.register('password')}
          />
          <p>{props.formState?.errors?.password?.message}</p>

          <span>비밀번호 확인</span>
          <A.LoginPassword
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...props.register('checkPassword')}
          />
          <p>{props.formState?.errors?.checkPassword?.message}</p>

          <A.LoginButton
            style={
              props.isActive
                ? { cursor: 'pointer', background: '#03c75a', color: 'white' }
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

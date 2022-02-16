import * as L from "./login.styles";


export default function loginMainPage(){

    return(
        <L.Wrapper>
            <L.InnerWrapper>
                <L.LogoBox>
                    KB LOGO
                </L.LogoBox>
                <L.EmailBox type="text" placeholder="E-mail">
                </L.EmailBox>     
                <L.PwdBox  type="password" placeholder="Password">  
                </L.PwdBox>
                <L.RadioBodx>
                    <input type="radio"/> 로그인 상태 유지
                </L.RadioBodx>
                <L.LoginBtn>로그인</L.LoginBtn>
                <L.BottomBox>
                    비밀번호 찾기 | 이메일 찾기 | 회원가입
                </L.BottomBox>
            </L.InnerWrapper>
        </L.Wrapper>
    )
}
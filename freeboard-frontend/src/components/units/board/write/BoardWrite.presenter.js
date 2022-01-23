import * as S from './BoardWrite.styles'

export default function BoardWriteUI(props){
    return(
        <S.Wrapper>
            <S.WrapperHeader>
                <S.MainTitle>게시물 등록</S.MainTitle>
            </S.WrapperHeader>

            <S.Spancombined>
                <S.Writer>작성자</S.Writer>
                <S.Pwd>비밀번호</S.Pwd>
            </S.Spancombined>
            <S.Combined>
                <S.Name type="text" onChange={props.user} placeholder='이름을 적어주세요' />
                <S.NameError>
                    <S.Span>{props.writerError}</S.Span>
                </S.NameError>
                <S.Password type="password" onChange={props.password} placeholder='비밀번호를 입력해주세요'/>
                <S.PasswordError>
                    <S.Span>{props.pwdError}</S.Span>
                </S.PasswordError>
            </S.Combined>

            <S.SubTitle>제목</S.SubTitle>
            <S.Title type="text" onChange={props.subject} placeholder='제목을 작성해주세요'/>
            <S.TitleError>
                <S.Span>{props.titleError}</S.Span>
            </S.TitleError>

            <S.SubContent>내용</S.SubContent>
            <S.Content type="textarea" onChange={props.issue} placeholder='내용을 작성해주세요'/>
            <S.CntError>
                <S.Span>{props.contentsError}</S.Span>
            </S.CntError>

            <S.SubAddress>주소</S.SubAddress>
            <S.WrapperAddress>
                <S.Address type="address" placeholder='07250'/>
                <S.Search>
                    <S.Click>우편번호 검색</S.Click>
                </S.Search>
            </S.WrapperAddress>
            <S.WrapperAddressText>
                    <S.AddressText type="address"/>
                    <S.AddressText type="address"/>
            </S.WrapperAddressText>

            <S.SubYoutube>유튜브</S.SubYoutube>
            <S.Youtube type="text" placeholder='링크를 복사해주세요'/>

            <S.SubPhoto>사진 첨부</S.SubPhoto>
            <S.WrapperPhoto>
                <S.PhotoUpload>+</S.PhotoUpload>
                <S.PhotoUpload>+</S.PhotoUpload>
                <S.PhotoUpload>+</S.PhotoUpload>
            </S.WrapperPhoto>

            <S.SubRadio>메인 설정</S.SubRadio>
            <S.Radio>
            <input type="radio"/>유튜브
            <input type="radio"/>사진
            </S.Radio>

            <S.Register onClick={props.regis} isActive={props.isActive}>등록하기</S.Register>
            {/* <div>{msg}</div> */}

        </S.Wrapper>
    )
}
import {useRouter} from 'next/router'
import {useQuery, gql} from "@apollo/client"
import * as S from '../../../styles/boardDetail';

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            writer
            title
            contents
            createdAt
        }
    }
`

export default function BoardDetail(){
    const router = useRouter();
    const {data} = useQuery(FETCH_BOARD,{
        variables: {boardId: router.query.move}
    })

    console.log(data)
            // fetchBoard? : 게시물이 삭제 됐을 때, 이름이나 가격이 있으면 보여주거나 없으면 안보여주는 기능
    return( // data? : 옵셔널 체이닝(조건부랜더링) => data && data와 같은 의미로 데이터가 있을 때 데이터를 보여줘라는 기능
        <div>
            <S.Wrapper>
                <S.WrapperBox>
                    <S.WrapperHeader>
                        <S.AvatarWrapper>
                            <S.Avatar src='../../../styles/images/avatar.png'/>
                            <S.Info>
                                <S.HeaderWriter>작성자 : {data?.fetchBoard?.writer}</S.HeaderWriter>
                                <S.CreatedAt>Date : {data?.fetchBoard?.createdAt.slice(0,10)}</S.CreatedAt>
                            </S.Info>
                        </S.AvatarWrapper>
                    </S.WrapperHeader>
                    <S.WrapperBody>
                        <S.BodyTitle>제목 : {data?.fetchBoard?.title}</S.BodyTitle>
                        <S.BodyContents>내용 : {data?.fetchBoard?.contents}</S.BodyContents>
                    </S.WrapperBody>
                </S.WrapperBox>
                <S.WrapperBottom>
                    <S.Button>목록으로</S.Button>
                    <S.Button>수정하기</S.Button>
                    <S.Button>삭제하기</S.Button>
                </S.WrapperBottom>
            </S.Wrapper>
           
        </div>    
    )
}
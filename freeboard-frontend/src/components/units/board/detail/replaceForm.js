import { useRouter } from "next/router";
import { useMutation, useQuery, gql } from "@apollo/client";
import * as S from '../../../src/components/units/board/detail/BoardDetail.styles'
import { getMyDate } from "../../../src/commons/libraries/utils";

export const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            writer
            title
            contents
            createdAt
        }
    }
`;

export const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!){
        deleteBoard(boardId: $boardId)
    }
`

export default function BoardDetail(){
    const router = useRouter();
    const [deleteBoard] = useMutation(DELETE_BOARD)

    const { data } = useQuery(FETCH_BOARD, { 
        variables: { boardId: String(router.query.move) } 
    });

    
    const MoveToBoardList = () => {
        router.push("/board/list")
    }
    
    const MoveToBoardEdit = () => {
        router.push(`/board/${router.query.move}/edit`)
    }
    
    const onClickDelete = async () => {
        try {
            await deleteBoard({
                variables: { boardId: String(router.query.move) }
            })   
            alert('삭제가 완료되었습니다.')
            router.push(`/board/new`)
        } catch(error){
            alert(error.message)
        }
    }

    return (
        <S.Wrapper>
        <S.WrapperBox>
            <S.WrapperHeader>
                <S.AvatarWrapper>
                    <S.Avatar src='/images/board/detail/avatar.png'/>
                    <S.Info>
                        <S.HeaderWriter>{data?.fetchBoard?.writer}</S.HeaderWriter>
                        <S.CreatedAt>{getMyDate(data?.fetchBoard?.createdAt)}</S.CreatedAt>
                    </S.Info>
                </S.AvatarWrapper>
            </S.WrapperHeader>
            <S.WrapperBody>
                <S.BodyTitle>{data?.fetchBoard?.title}</S.BodyTitle>
                <S.BodyContents>{data?.fetchBoard?.contents}</S.BodyContents>
            </S.WrapperBody>
        </S.WrapperBox>
        <S.WrapperBottom>
            <S.Button onClick={MoveToBoardList}>목록으로</S.Button>
            <S.Button onClick={MoveToBoardEdit}>수정하기</S.Button>
            <S.Button onClick={onClickDelete}>삭제하기</S.Button>
        </S.WrapperBottom>
    </S.Wrapper>
    )
}
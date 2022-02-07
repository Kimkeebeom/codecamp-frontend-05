import { gql } from "@apollo/client";

export const FETCH_BOARD_COMMENTS = gql`
query fetchBoardComments($boardId: ID!, $page: Int){
    fetchBoardComments(boardId: $boardId, page: $page){
        _id
        writer
        contents
        rating
        createdAt
    }
}
`

export const DELETE_BOARD_COMMENT = gql`
mutation deleteBoardComment($password: String, $boardCommentId: ID!){
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
}
`

export const UPDATE_BOARD_COMMENT = gql`
mutation updateBoardComment($boardCommentId: ID!, $password: String, $updateBoardCommentInput: UpdateBoardCommentInput!
 ){
    updateBoardComment(boardCommentId: $boardCommentId, password: $password, updateBoardCommentInput: $updateBoardCommentInput){
        _id
    }
}
`
import { gql } from "@apollo/client"

// export const FETCH_BOARDS = gql`
// query fetchBoards{
//     fetchBoards{
//         _id
//         title
//         writer
//         createdAt
//     }
// }
// `

export const FETCH_BOARDS = gql`
    query fetchBoards($page: Int){
        fetchBoards(page: $page){
            _id
            writer
            title
            createdAt
        }
    }
`

export const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!){
        deleteBoard(boardId: $boardId)
    }
`

export const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount {
        fetchBoardsCount
    }
`
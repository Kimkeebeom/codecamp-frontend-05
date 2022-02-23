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
    query fetchBoards($search: String, $page: Int){
        fetchBoards(search: $search, page: $page){
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
    query fetchBoardsCount($search: String) {
        fetchBoardsCount(search: $search)
    }
`

export const FETCH_USER_LOGGED_IN = gql`   
    query fetchUserLoggedIn {
        fetchUserLoggedIn{
            email
            name
        }
    }
`
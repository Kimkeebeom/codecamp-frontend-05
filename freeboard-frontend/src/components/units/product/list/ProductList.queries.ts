import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
    query fetchUseditems($page: Int){
        fetchUseditems(page: $page){
            _id
            images
            name
            price
            createdAt
        }
    }
`
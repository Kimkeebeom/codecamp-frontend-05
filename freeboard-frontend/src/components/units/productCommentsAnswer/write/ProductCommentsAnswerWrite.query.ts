import { gql } from "@apollo/client";

export const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
    mutation createUseditemQuestionAnswer(
        $createUseditemQuestionAnswerInput:CreateUseditemQuestionAnswerInput!,
        $useditemQuestionId: ID!
        ){
        createUseditemQuestionAnswer(
            createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput,
            useditemQuestionId: $useditemQuestionId
            ){
            _id
            contents
        }
    }
`

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
    query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!){
        fetchUseditemQuestionAnswers(page: $page, useditemQuestionId: $useditemQuestionId ){
            _id
            contents
        }
    }
`
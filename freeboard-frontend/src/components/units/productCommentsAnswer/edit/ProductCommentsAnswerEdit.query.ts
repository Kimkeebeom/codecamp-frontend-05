import { gql } from "@apollo/client";

export const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
        updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
        useditemQuestionAnswerId: $useditemQuestionAnswerId
    ) {
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
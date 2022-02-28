import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { IMutation, IMutationDeleteUseditemQuestionArgs, IQuery, IQueryFetchUseditemQuestionsArgs } from "../../../../commons/types/generated/types";
import ProductCommentsListUI from "./ProductCommentsList.presenter";
import { DELETE_USED_ITEM_QUESTION, FETCH_USED_ITEM_QUESTIONS } from "./ProductCommentsList.query";

export default function ProductCommentsList(){
    const router = useRouter()

    const {data} = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
    >(FETCH_USED_ITEM_QUESTIONS, {
        variables: {useditemId: String(router.query.move), page:1}
    })  

    const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation,"deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
    >(DELETE_USED_ITEM_QUESTION)

    const onClickDelete = (event) => {
        try {
            deleteUseditemQuestion({
                variables: {
                    useditemQuestionId: event.target.id
                },
                refetchQueries: [{
                    query: FETCH_USED_ITEM_QUESTIONS,
                    variables: { useditemId: router.query.move, page: 1 }
                }]
            })
        } catch (error) {
            Modal.error({content: error.message})
        }
    }
    
    return(
        <ProductCommentsListUI
            data={data}
            onClickDelete={onClickDelete}
        />
    )
}
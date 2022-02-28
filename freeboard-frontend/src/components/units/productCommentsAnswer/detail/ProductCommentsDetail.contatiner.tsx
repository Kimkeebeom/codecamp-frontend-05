import { gql, useMutation, useQuery } from "@apollo/client"
import { Modal } from "antd"
import { IMutation, IMutationDeleteUseditemQuestionAnswerArgs, IMutationDeleteUseditemQuestionArgs, IQuery, IQueryFetchUseditemQuestionAnswersArgs } from "../../../../commons/types/generated/types"
import ProductCommentsAnswerList from "../list/ProductCommentsAnswerList.container"
import { DELETE_USED_ITEM_QUESTION_ANSWER } from "../list/ProductCommentsAnswerList.query"
import ProductCommentsAnswerWrite from "../write/ProductCommentsAnswerWrite.container"

const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
    query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!){
        fetchUseditemQuestionAnswers(page: $page, useditemQuestionId: $useditemQuestionId ){
            _id
            contents
        }
    }
`

export default function ProductCommentsAnswer(props){
    const {data} = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
    >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
        variables: { useditemQuestionId: props.useditemQuestionId, page: 1}
    })

    const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation,"deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
    >(DELETE_USED_ITEM_QUESTION_ANSWER)

    const onClickDelete = async (event) => {
        try {
            await deleteUseditemQuestionAnswer({
                variables: {
                    useditemQuestionAnswerId: event.target.id
                },
                refetchQueries: [{
                    query: FETCH_USED_ITEM_QUESTION_ANSWERS,
                    variables: { useditemQuestionId: props.useditemQuestionId, page: 1 }
                }]
            })
        } catch (error) {
            Modal.error({content: error.message})
        }
    }

    return(
        <>
            {data?.fetchUseditemQuestionAnswers?.map((el)=>(
            <div key={el._id}>
                 <div style={{ color: "white" }}>{el.contents}</div>
                 <button id={el._id} onClick={onClickDelete}>삭제하기</button>
                 <ProductCommentsAnswerList key={el._id} el={el}/>
             </div>
            ))}
                <ProductCommentsAnswerWrite
                data={data}
                useditemQuestionId={props.useditemQuestionId}
                />
        </>    
    )
}

           
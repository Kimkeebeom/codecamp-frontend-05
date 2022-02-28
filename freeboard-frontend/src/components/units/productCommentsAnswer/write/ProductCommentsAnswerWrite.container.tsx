import { useMutation } from "@apollo/client"
import { Modal } from "antd"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { IMutation, IMutationCreateUseditemQuestionAnswerArgs } from "../../../../commons/types/generated/types"
import ProductCommentsAnswerWriteUI from "./ProductCommentsAnswerWrite.presenter"
import { CREATE_USED_ITEM_QUESTION_ANSWER, FETCH_USED_ITEM_QUESTION_ANSWERS } from "./ProductCommentsAnswerWrite.query"

export default function ProductCommentsAnswerWrite(props){
    const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
    >(CREATE_USED_ITEM_QUESTION_ANSWER)
    
    // const router = useRouter()
    const [contents, setContents] = useState(" ")

    const onChangeContents = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setContents(e.target.value)
    }

    const onClickRegisCommentAnswer = async () => {
        try {
            await createUseditemQuestionAnswer({
                variables:{
                    createUseditemQuestionAnswerInput: {
                        contents: contents
                    }, useditemQuestionId: props.useditemQuestionId  // 기존 댓글에 대한 ID값!
                },
                refetchQueries:[
                    {
                        query: FETCH_USED_ITEM_QUESTION_ANSWERS,
                        variables: { useditemQuestionId: props.useditemQuestionId, page: 1 }
                        // variables: { useditemQuestionId: props.useditemQuestionId }
                    }
                ]
            })
            setContents(" ")
            console.log("contents:", contents)
            if (contents){
                Modal.success({content: "답글이 등록되었습니다."})
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return(
        <ProductCommentsAnswerWriteUI
            contents={contents}
            onChangeContents={onChangeContents}
            onClickRegisCommentAnswer={onClickRegisCommentAnswer}
        />
    )
}
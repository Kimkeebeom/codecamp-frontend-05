import { useMutation } from "@apollo/client"
import { Modal } from "antd"
import { ChangeEvent, useState } from "react"
import { IMutation, IMutationUpdateUseditemQuestionAnswerArgs, IUpdateUseditemQuestionInput } from "../../../../commons/types/generated/types"
import ProductCommentsAnswerEditUI from "./ProductCommentsAnswerEdit.presenter"
import { FETCH_USED_ITEM_QUESTION_ANSWERS, UPDATE_USED_ITEM_QUESTION_ANSWER } from "./ProductCommentsAnswerEdit.query"


export default function ProductCommentsEdit(props){
    const [isEdit, setIsEdit] = useState(false)
    const [editContents, setEditContents] = useState("")

    const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation,"updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
    >(UPDATE_USED_ITEM_QUESTION_ANSWER)

    const onClickUpdateButton = () => {
        setIsEdit(true)
    }

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setEditContents(event.target.value)
    }

    const onClickUpdate = async () => {
        try {
            const updateUseditemQuestionAnswerInput: IUpdateUseditemQuestionInput = {
                contents: editContents
            }
            // if(editContents) updateUseditemQuestionAnswerInput.contents = editContents

            await updateUseditemQuestionAnswer({
                variables:{
                    updateUseditemQuestionAnswerInput: updateUseditemQuestionAnswerInput,
                    useditemQuestionAnswerId: props.el._id
                },
                
                refetchQueries:[{
                    query: FETCH_USED_ITEM_QUESTION_ANSWERS,
                    variables: { useditemQuestionAnswerId: props.useditemQuestionId }
                }]
            })
            setIsEdit(false)
            // if(!editContents) return
            Modal.success({content: "수정이 성공적으로 완료되었습니다."})
        } catch (error) {
            Modal.error({content:"너뭔데"})
        }
    }

    return(
        <ProductCommentsAnswerEditUI
            onClickUpdateButton={onClickUpdateButton}
            onChangeContents={onChangeContents}
            onClickUpdate={onClickUpdate}
            isEdit={isEdit}
            el={props.el}
        />
    )
}
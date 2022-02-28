import { useMutation } from "@apollo/client"
import { Modal } from "antd"
import { useRouter } from "next/router"
import { ChangeEvent, useState, MouseEvent } from "react"
import { IMutation, IMutationUpdateUseditemQuestionArgs, IUpdateUseditemQuestionInput } from "../../../../commons/types/generated/types"
import { FETCH_USED_ITEM_QUESTION } from "../write/ProductCommentsWrite.query"
import ProductCommentsEditUI from "./ProductCommentsEdit.presenter"
import { UPDATE_USED_ITEM_QUESTION } from "./ProductCommentsEdit.query"

export default function ProductCommentsEdit(props){
    const router = useRouter()
    const [isEdit, setIsEdit] = useState(false)
    const [editContents, setEditContents] = useState("")

    const [updateUseditemQuestion] = useMutation<
    Pick<IMutation,"updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
    >(UPDATE_USED_ITEM_QUESTION)

    const onClickUpdateButton = () => {
        setIsEdit(true)
    }

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setEditContents(event.target.value)
    }

    const onClickUpdate = () => {
        try {
            const updateUseditemQuestionInput: IUpdateUseditemQuestionInput = {
                // contents: editContents
            }
            if(editContents) updateUseditemQuestionInput.contents = editContents

            updateUseditemQuestion({
                variables:{
                    updateUseditemQuestionInput: updateUseditemQuestionInput,
                    useditemQuestionId: props.el._id
                },
                
                refetchQueries:[{
                    query: FETCH_USED_ITEM_QUESTION,
                    variables: { useditemId: router.query.move, page: 1 }
                }]
            })
            setIsEdit(false)
            if(!editContents) return
            Modal.success({content: "수정이 성공적으로 완료되었습니다."})
        } catch (error) {
            Modal.error({content:error.message})
        }
    }

    return(
        <ProductCommentsEditUI
            onClickUpdateButton={onClickUpdateButton}
            onChangeContents={onChangeContents}
            onClickUpdate={onClickUpdate}
            isEdit={isEdit}
            el={props.el}
        />
    )
}
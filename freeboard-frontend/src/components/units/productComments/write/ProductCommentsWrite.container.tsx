import { useMutation } from "@apollo/client"
import { Modal } from "antd"
import { useRouter } from "next/router"
import { SetStateAction, useState } from "react"
import { IMutation, IMutationCreateUseditemQuestionArgs } from "../../../../commons/types/generated/types"
import ProductCommentsWriteUI from "./ProductCommentsWrite.presenter"
import { CREATE_USED_ITEM_QUESTION, FETCH_USED_ITEM_QUESTION } from "./ProductCommentsWrite.query"

export default function ProductCommentsWrite(){
    const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
    >(CREATE_USED_ITEM_QUESTION)

    const router = useRouter()
    const [contents, setContents] = useState("")

    const onChangeContents = (event: { target: { value: SetStateAction<string> } }) => {
        setContents(event.target.value)
    }

    const onClickRegisComment = async () => {
        try {
            await createUseditemQuestion({
                variables:{
                    createUseditemQuestionInput:{
                        contents: contents
                    }, useditemId: String(router.query.move) // 게시글에 대한 ID값!
                },
                refetchQueries: [
                    {
                        query: FETCH_USED_ITEM_QUESTION,
                        variables:{ useditemId: String(router.query.move), page: 1}
                    },
                ],
            })
            setContents("") // 댓글을 등록하고 나서 기존의 내용이 남아 있지 않게 빈값으로 초기화 시켜줌
            Modal.success({content: "댓글이 등록되었습니다."})
            console.log("dfadf")
        } catch (error) {
            Modal.error({content:error.message})
            console.log("dfd")
        }
    }
  
    return(
        <ProductCommentsWriteUI
            onChangeContents={onChangeContents}
            onClickRegisComment={onClickRegisComment}
            contents={contents}
        />
    )
}
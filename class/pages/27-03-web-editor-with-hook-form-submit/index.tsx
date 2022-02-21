import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { IMutation, IMutationCreateBoardArgs } from "../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";


const ReactQuill = dynamic(() => import("react-quill"), {ssr: false}) // ssr=server-side-rendering

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
    }
  }
`

interface IFormValues {
  writer?: string
  password?: string
  title?: string
  contents?: string
}

export default function WebEditorPage() {
  const router = useRouter()
  const [createBoard] = useMutation<
  Pick<IMutation, 'createBoard'>,
  IMutationCreateBoardArgs
  >(CREATE_BOARD)

    const {register, handleSubmit, setValue, trigger} = useForm({
      mode: 'onChange'
    })

    const handleChange = (value: string) => {
        console.log(value)
        
        // register로 등록하지 않고, 강제로 값을 넣어주는 기능!
        setValue("contents", value === "<p><br></p>" ? "" : value)

        // onChange가 됐는지 안됐는지 react-hook-form에 알려주는 기능!
        trigger("contents")
    }

    const onClickSubmit = async (data: IFormValues) => {
      // 타입지정을 해주는 와중에 필수입력 사항인 writer,password, title, contents에서 ts에러가 생겨
      // 아래와 같이 검증 코드를 작성해줘야 함!
      // 모두가 있는게 아니면 실행이 안되게 해줘!
      if(!(data.writer && data.password && data.title && data.contents)){
        Modal.warn({content: "필수 입력 사항입니다!"})
        return
      }
      // if(!Object.values(data).every(el => el)){
      //   Modal.warn({content: "필수 입력 사항입니다!"})
      //   return
      // }

      try {
        const result = await createBoard({
          variables:{
            createBoardInput: {
              writer: data.writer,
              password: data.password,
              title: data.title,
              contents: data.contents
            }
          }
        })
        router.push(`/27-04-web-editor-detail/${result.data?.createBoard._id}`)
      } catch (error) {
        Modal.error(error.message)
      }
    }

    return (
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자 : <input type="text" {...register("writer")} />
        <br />
        비밀번호 : <input type="password" {...register("password")} />
        <br />
        제목 : <input type="text" {...register("title")} />
        <br />
        내용 : <ReactQuill onChange={handleChange}/>
        <br />
        <button>등록하기</button>
      </form>
    );
  }
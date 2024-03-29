import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    writer: yup
    .string()
    .required('작성자를 입력해주세요')
    .max(5, "작성자는 5글자 이내 문자열입니다"),
    password: yup
    .string()
    .required('비밀번호를 입력해주세요')
    .max(8, "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열입니다.")
    .min(4, "비밀번호는 영문, 숫자, 특수문자를 포함한 3자리 이상을 적어주세요."),
    title: yup
    .string()
    .required('제목은 자유')
    .max(100, "제목은 100자 이내 문자열로 작성해주세요"),
    contents: yup
    .string()
    .required('이것도써줘야하나?')
    .max(1000, "내용은 1000자 이내 문자열로 작성해주세요")
})

interface FormValues{
    writer?: string,
    password?: string,
    title?: string,
    contents?: string
}

export default function ReactHookFormQuizPage() {
   
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema)
    })

    const onClickSubmit = (data: FormValues) => {
        console.log(data)
        console.log("외 왜안되돼?")
    }

    console.log("리렌더링 체크!")

    return(
        <form onSubmit={handleSubmit(onClickSubmit)}> 
           작성자: <input type="text" {...register("writer")} />
           <div>{formState.errors.writer?.message}</div>
           비밀번호: <input type="password" {...register("password")} />
           <div>{formState.errors.password?.message}</div>
           제목: <input type="text" {...register("title")} />
           <div>{formState.errors.title?.message}</div>
           내용: <input type="text" {...register("contents")} />
           <div>{formState.errors.contents?.message}</div>
           <button>등록하기</button>  
        </form>
    )
}
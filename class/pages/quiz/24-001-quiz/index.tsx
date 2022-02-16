import { useForm } from "react-hook-form"

interface FormValues{
    writer?: string,
    password?: string,
    title?: string,
    contents?: string
}

export default function ReactHookFormQuizPage() {
   
    const { register, handleSubmit, formState } = useForm()

    const onClickSubmit = (data: FormValues) => {
        console.log(data)
    }

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
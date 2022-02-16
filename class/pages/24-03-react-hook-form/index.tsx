import { useForm } from "react-hook-form"

interface FormValues{
    writer?: string,
    title?: string,
    contents?: string
}

export default function ReactHookFormPage() {
   
    const { register, handleSubmit } = useForm()

    // data 타입스크립트를 직접 지정해줘야 함!
    const onClickSubmit = (data: FormValues) => {
        console.log(data)
    }

    console.log("리렌더링 체크!!")

    return(
        <form onSubmit={handleSubmit(onClickSubmit)}> 
           작성자: <input type="text" {...register("Writer")} />
           제목: <input type="text" {...register("Title")} />
           내용: <input type="text" {...register("Contents")} />
           <button>등록하기</button>  
        </form>
    )
}
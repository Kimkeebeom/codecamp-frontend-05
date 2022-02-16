import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Button01 from "../../src/components/commons/buttons/01"
import Input01 from "../../src/components/commons/inputs/01"

// yupResolver와 관련된 내용
const schema = yup.object().shape({
    Email: yup
    .string()
    .email('이메일 형식이 적합하지 않습니다.')
    .required('이메일은 필수 입력 사항입니다.'),
    Password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
    .max(15, "비밀번호는 최대 15자리이하로 입력해주세요.")
    .required("비밀번호는 필수 입력 사항입니다.")
})

interface FormValues{
    Email?: string,
    Password?: string,
}

export default function ReactHookFormPage() {
   
    const { register, handleSubmit, formState } = useForm({
        mode: "onChange", // formState.errors.{}.message 부분을 props로 넘겨줄때 끊겼는데 이어주는 기능!
        resolver: yupResolver(schema),
    })

    // data 타입스크립트를 직접 지정해줘야 함!
    const onClickSubmit = (data: FormValues) => {
        console.log(data)
    }

    console.log("리렌더링 체크!!")

    return(
        <form onSubmit={handleSubmit(onClickSubmit)}> 
           이메일: <Input01 type="text" register={register("Email")}/>
            <div>{formState.errors.Email?.message}</div>
           비밀번호: <Input01 type="password" register={register("Password")} />
            <div>{formState.errors.Password?.message}</div>
           <Button01 isValid={formState.isValid} name="Login"/> 
        </form>
    )
}
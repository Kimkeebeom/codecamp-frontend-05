import { useState } from 'react'

export default function StateSignup(){

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError] = useState("")
    const [ pwderror, setPwderror ] = useState("")

    function aaa(event){
        // event.target : <input type="text" /> 태그 전체를 가져옴 
        console.log(event.target.value) // => 해당 태그의 값을 가져옴
        setEmail(event.target.value)
    }

    function bbb(event){
        setPassword(event.target.value)
    }

    function ccc(event){ //회원가입 버튼을 눌렀을 때 state를 통해서 이메일과 비밀번호가 잘 저장되어있는지 확인.
        console.log('email:' + email)
        console.log('password : ' + password)
        
        let check = true

        if(email.includes("@") === false){ // 사용자가 이메일 주소를 입력할 때 @를 빼먹을 경우가 있기 때문에 조건문을 사용해준다.
            setError("올바른 이메일 형식이 아닙니다!")
            //alert("이메일에 @가 없습니다. 잘못된 이메일 주소입니다!")
            check = false
        }
        if(password.length <= 8 === true){
            setPwderror("비밀번호 8자리 이상을 입력해주세요.")
            check = false
        } 
        
        if(check){
            alert("회원가입을 추카포카합니다!")
        }
        
    }
    
    return(
        <div>
            이메일 : <input type="text" onChange={aaa}/><br />
            <span>{error}</span><br/><br/>
            비밀번호 : <input type="password" onChange={bbb}/><br />
            <span>{pwderror}</span><br/><br/>
            <button onClick={ccc}>회원가입</button>
        </div>
    )

}
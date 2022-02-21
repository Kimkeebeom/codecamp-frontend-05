// import ReactQuill from 'react-quill'; => 다이나믹 import로 변경하기!
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {ssr: false}) // ssr=server-side-rendering

export default function WebEditorPage() {

    const hanndleChange = (value: string) => {
        console.log(value)
    }

    // if (process.browser){
    //     console.log("나는 브라우저다!")
    // } else {
    //     console.log("나는 프론트엔드 서버다!")
    // }

    return (
      <div>
        작성자 : <input type="text" />
        <br />
        비밀번호 : <input type="password" />
        <br />
        제목 : <input type="text" />
        <br />
        {/* process.browser일때 그려줘! => 에러가 생기는데 import 자체가 안되서 생기는 에러! 
        즉, import를 직접 컨트롤 해줘야한다. 이를 동적 import라하며 dynamic import라고 한다.*/}
        {/* 내용 : {process.browser && <ReactQuill onChange={hanndleChange}/>} */}
        내용 : <ReactQuill onChange={hanndleChange}/>
        <br />
        <button>등록하기</button>
      </div>
    );
  }
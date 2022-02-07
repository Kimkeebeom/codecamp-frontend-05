import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore/lite'
import { firebaseApp } from '../_app'



export default function FirebasePage(){

    const onClickSubmit = async () => {
        // firebase에 한줄 등록하기
        const board = collection(getFirestore(firebaseApp), "board")
        await addDoc(board, {
            wirter: "철수",
            title: "제목입니다!",
            contetns: "아야어여오요우유"
        })
    }

    const onClickFetch = async () => {    
        // firebase에서 데이터 꺼내오기
        const board = collection(getFirestore(firebaseApp), "board")
        const result = await getDocs(board)
        const docs = result.docs.map((el) => el.data()) // firebase에서 정한 문법이라 이렇게 작성해야 데이터를 받아올 수 있다.
        console.log(docs)
    }

    return(
        <div>
            <h1>파이어베이스 연습 페이지입니다!!!</h1>
            <button onClick={onClickSubmit}>등록하기</button>
            <button onClick={onClickFetch}>조회하기</button>
        </div>
    )
}
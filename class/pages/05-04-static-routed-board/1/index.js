import { useRouter } from "next/router"

export default function StaticRoutedPage(){
    const router = useRouter()

    const onClickMove = () => {
        router.push("/05-03-static-routing-board")
    }

    return(
        <div>
            <div>1번 게시글 페이지 이동 완료!!</div>
            <button onClick={onClickMove}>메인페이지로 이동!</button>
        </div>
    )

}
import {useRouter} from 'next/router'
import Head from 'next/head'

export default function BoardsDetailPage(){
    const router = useRouter()

    return (
        <div>
            <Head>
                <meta property="og:title" content="복습" />
                <meta property="og:description" content="복습만이 살길입니다~" />
                <meta property="og:image" content="https://www.100ssd.co.kr/news/photo/201911/65167_45054_4842.jpg"/>
            </Head>
            <div>
                안녕하세요! 게시글 상세페이지입니다, 
                게시글 ID는 {router.query.boardId}입니다!!
            </div>
        </div>
    )
}

export const getServerSideProps = () => {
    // 데이터를 요청할 것!!
}
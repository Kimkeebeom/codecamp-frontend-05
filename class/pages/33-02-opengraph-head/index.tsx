import Head from "next/head";

// 내가 만들어야할 페이지
export default function OpengraphHeadPage(){
    
    return(
        <div>
            <Head>
                <meta property="og: title" content="My Site"/>
                <meta property="og: description" content="Welcome to visit our site"/>
            </Head>
            <div>오픈 그래프 연습 페이지입니다!</div>
        </div>
    )
}
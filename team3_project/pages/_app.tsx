import 'antd/dist/antd.css'; // 모든 페이지에 antd의 css가 적용된다
import {ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, gql} from '@apollo/client' 
import { Global } from '@emotion/react';
import { AppProps } from 'next/dist/shared/lib/router/router'
import Layout from '../src/components/commons/layout';
import { globalStyles } from '../src/commons/styles/globalStyles';
import { createUploadLink } from 'apollo-upload-client'
import {onError} from '@apollo/client/link/error'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import Head from 'next/head';
import { getAccessToken } from '../src/commons/libraries/getAccessToken';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqZa7hybxrsFOoBM0D6Zwn_OOuyOr8C14",
  authDomain: "kbstar-4b5ca.firebaseapp.com",
  projectId: "kbstar-4b5ca",
  storageBucket: "kbstar-4b5ca.appspot.com",
  messagingSenderId: "311927489793",
  appId: "1:311927489793:web:ba0c5aa1281283f258c700"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

interface IUserInfo{
  name?: string;
  email?: string;
  picture?: string
}

interface IGlobalContext{
  accessToken?: string
  setAccessToken?: Dispatch<SetStateAction<string>>
  userInfo?: IUserInfo
  setUserInfo?: Dispatch<SetStateAction<IUserInfo>>
}


export const GlobalContext = createContext<IGlobalContext>({}) // ()안에는 Context 초기값이 들어간다, 에러가 뜨길래 초기값에 빈 객체를 넣어줌

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("")
  const [userInfo, setUserInfo] = useState<IUserInfo>({}) // 초기값은{} 비어있지만 빈객체로 타입이 추론되는것을 방치하기 위해 <IUserInfo>로 타입을 알려주기!
  const Value = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo
  }

  // if(localStorage.getItem("accessToken")) {
  //   setAccessToken(localStorage.getItem("accessToken") || "")
  // } // 이 코드를 작성해주니 localStorage가 없다고 오류가 나옴 ? next.js에서 렌더링이 어떻게 되는지 이해할 필요가 있다.

  // // 1. localStorage 별로 좋지 못한 방법
  // if(process.browser){
  //   if(localStorage.getItem("accessToken")) {
  //     setAccessToken(localStorage.getItem("accessToken") || "")
  //   }
  // }
  // // 2. localStorage 별로 좋지 못한 방법
  // if(typeof window !== "undefined") { // window=browser 라는게 있을 때, 실행해줘!
  //   if(localStorage.getItem("accessToken")) {
  //     setAccessToken(localStorage.getItem("accessToken") || "")
  //   }
  // }
  // 3. localStorage 이 방법이 제일 좋은 방법
  // useEffect(() => {
  //   if(localStorage.getItem("accessToken")) {
  //     setAccessToken(localStorage.getItem("accessToken") || "")
  //   }
  // }, []) // 토큰을 로컬스토리지에 저장하고 새로고침 했을 경우 다시 그 토큰을 꺼내와 로그인을 유지하는 방법!
  
  useEffect(() => {
      getAccessToken().then((newAccessToken) => {
        setAccessToken(newAccessToken)
      })
    }, [])

  
  const errorLink = onError(({graphQLErrors, operation, forward})=>{
    // 1. 에러를 캐치
    if(graphQLErrors){
      for (const err of graphQLErrors){
        // 2. 해당 에러가 토큰 만료 에러인지 체크(UNAUTHENTICATED)
        if(err.extensions.code === "UNAUTHENTICATED"){
          // 3. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then(newAccessToken => {
             // 4. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken)

            // 5. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            operation.setContext({
              headers:{
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`
              }
            })
          }) // 설정 변경(accessToken만!! 바꿔치기)
           return forward(operation) // 변경된 operation 재요청하기!!
        }
      }
    }  
  })

  const uploadLink = createUploadLink({
    uri: "https://backend05.codebootcamp.co.kr/graphql",
    headers: {Authorization: `Bearer ${accessToken}`},
    credentials: "include"
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]), // from([]): 어떤걸 링크할건데?
    cache: new InMemoryCache()
  })
  
  return(
    // shortandproperty로 accesstoken을 하나로 작성가능, 
    // 하지만 setAccessToken 등 다른 기능들을 추가하게 되면 길어지기 때문에 하나의 변수인 Value 담아서 넣어준다!
    <GlobalContext.Provider value={Value}>
      {/* <Head> 모든 페이지에서 카카오맵을 다운으로 받으므로 비효율 적임
        <script 
        type="text/javascript" 
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=09aad3d1435f13d9e7ab61e68249432d"
        ></script>
      </Head> */}
      <ApolloProvider client={client}>
        <Global styles={globalStyles}/> {/* 모든페이지 모든컴포넌트에 적용되는 css */}
        <Layout>
          <Component {...pageProps} />
        </Layout> 
      </ApolloProvider>
    </GlobalContext.Provider>
    
  )
}

export default MyApp

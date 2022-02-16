import 'antd/dist/antd.css'; // 모든 페이지에 antd의 css가 적용된다
import {ApolloClient, InMemoryCache, ApolloProvider, ApolloLink} from '@apollo/client' 
import { Global } from '@emotion/react';
import { AppProps } from 'next/dist/shared/lib/router/router'
import Layout from '../src/components/commons/layout';
import { globalStyles } from '../src/commons/styles/globalStyles';
import { createUploadLink } from 'apollo-upload-client'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
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
  useEffect(() => {
    if(localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken") || "")
    }
  }, []) // 토큰을 로컬스토리지에 저장하고 새로고침 했을 경우 다시 그 토큰을 꺼내와 로그인을 유지하는 방법!
 

  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    headers: {Authorization: `Bearer ${accessToken}`}
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]), // from([]): 어떤걸 링크할건데?
    cache: new InMemoryCache()
  })
  
  return(
    // shortandproperty로 accesstoken을 하나로 작성가능, 
    // 하지만 setAccessToken 등 다른 기능들을 추가하게 되면 길어지기 때문에 하나의 변수인 Value 담아서 넣어준다!
    <GlobalContext.Provider value={Value}>
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

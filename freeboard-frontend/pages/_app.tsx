// import '../styles/globals.css' // 추후에 css가 아닌 emotion으로 변경 및 적용 가능
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from '@apollo/client' 
import { AppProps } from 'next/dist/shared/lib/router/router'
import { Global } from '@emotion/react'
import Layout from '../src/components/commons/layout'
import { globalStyles } from '../src/commons/styles/globalStyles'
import "antd/dist/antd.css"
import { createUploadLink } from 'apollo-upload-client'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
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

// ()안에는 Context 초기값이 들어간다, 에러가 뜨길래 초기값에 빈 객체를 넣어줌
export const GlobalContext = createContext<IGlobalContext>({})

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("")
  const [userInfo, setUserInfo] = useState<IUserInfo>({}) // 초기값은{} 비어있지만 빈객체로 타입이 추론되는것을 
                                                          // 방치하기 위해 <IUserInfo>로 타입을 알려주기!
  const Value = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo
  }

  useEffect(() => {
    if(localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken") || "")
    }
  }, [])

  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    headers: {Authorization: `Bearer ${accessToken}`}
  })

  const client = new ApolloClient({
    // from([]): 어떤걸 링크할건데?
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]), 
    cache: new InMemoryCache()
  })
  
 return(
   <GlobalContext.Provider value={Value}>
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
    </GlobalContext.Provider>
  )
}

export default MyApp
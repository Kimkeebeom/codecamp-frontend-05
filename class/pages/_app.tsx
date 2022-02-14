import 'antd/dist/antd.css'; // 모든 페이지에 antd의 css가 적용된다
import {ApolloClient, InMemoryCache, ApolloProvider, ApolloLink} from '@apollo/client' 
import { Global } from '@emotion/react';
import { AppProps } from 'next/dist/shared/lib/router/router'
import Layout from '../src/components/commons/layout';
import { globalStyles } from '../src/commons/styles/globalStyles';
import { createUploadLink } from 'apollo-upload-client'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, Dispatch, SetStateAction, useState } from 'react';
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

interface IGlobalContext{
  accessToken?: string
  setAccessToken?: Dispatch<SetStateAction<string>>
}

export const GlobalContext = createContext<IGlobalContext>({}) // ()안에는 Context 초기값이 들어간다, 에러가 뜨길래 초기값에 빈 객체를 넣어줌

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("")
  const Value = {
    accessToken,
    setAccessToken
  }

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

// import '../styles/globals.css' // 추후에 css가 아닌 emotion으로 변경 및 적용 가능
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client' 
import { AppProps } from 'next/dist/shared/lib/router/router'
import { Global } from '@emotion/react'
import Layout from '../src/components/commons/layout'
import { globalStyles } from '../src/commons/styles/globalStyles'
import "antd/dist/antd.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://backend05.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache()
  })
  
 return(
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
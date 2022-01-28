// 추후에 css가 아닌 emotion으로 변경 및 적용 가능
// import '../styles/globals.css' 
import 'antd/dist/antd.css'; // 모든 페이지에 antd의 css가 적용된다
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client' 
import { Global } from '@emotion/react';
import { AppProps } from 'next/dist/shared/lib/router/router'
import Layout from '../src/components/commons/layout';
import { globalStyles } from '../src/commons/styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })
  
  return(
    <ApolloProvider client={client}>
      <Global styles={globalStyles}/> {/* 모든페이지 모든컴포넌트에 적용되는 css */}
      <Layout>
        <Component {...pageProps} />
      </Layout> 
    </ApolloProvider>
  )
}

export default MyApp

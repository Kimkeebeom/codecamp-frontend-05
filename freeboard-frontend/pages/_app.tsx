import '../styles/globals.css' // 추후에 css가 아닌 emotion으로 변경 및 적용 가능
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client' 
import { AppProps } from 'next/dist/shared/lib/router/router'
import { Global } from '@emotion/react'
import Layout from '../src/components/commons/layout'
import { globalStyles } from '../src/commons/styles/globalStyles'
import "antd/dist/antd.css"

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
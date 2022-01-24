// 추후에 css가 아닌 emotion으로 변경 및 적용 가능
import '../styles/globals.css' 
import 'antd/dist/antd.css'; // 모든 페이지에 antd의 css가 적용된다
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client' 
import { AppProps } from 'next/dist/shared/lib/router/router'


function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })
  
  return(
    <ApolloProvider client={client}> 
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp

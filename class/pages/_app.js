import '../styles/globals.css' //추 후에 css가 아닌 emotion으로 변경 및 적용 가능
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client' 

function MyApp({ Component, pageProps }) {

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

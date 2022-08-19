import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl6y99s200ubd01te683r8ad8/master',
  cache: new InMemoryCache()
})
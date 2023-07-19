import './App.css';
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client'
import UserData from './components/UserData';

function App() {
   const client = new ApolloClient({
    cache : new InMemoryCache(),
    uri : `http://localhost:4000/graphql`
   })
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <h1>My Apollo client</h1>
      <UserData />
    </div>
    </ApolloProvider>
  );
}

export default App;

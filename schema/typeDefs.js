const {gql} = require('apollo-server')

const typeDefs = gql`
  type User {
    id : Int!
    username : String!
    age : Int!
    nationality : Nationality!
    friends : [User]
    faviourteMovies : [Movie]
  } 

  type Movie {
    id : Int!
    name : String!
    yearOfPublication : Int!
    isInTheaters : Boolean!
  }
  type Query {
     users : [User!]!
     user(id : Int!) : User!
     movies : [Movie!]!
     movie(movieName : String!) : Movie!
  }
  input CreateUserInput {
    username : String!
    age : Int!
    nationality : Nationality = INDIAN
  }

  input UpdateUserName {
    id : Int!
    newusername : String!
  }

  type Mutation {
    createUser(input:CreateUserInput!) : User
    updateUser(input:UpdateUserName!) : User
    deleteUser(id : Int!) : User

  }

  enum Nationality {
    AMERICAN
    BRITISH
    CHINESE
    SPANISH
    AUSTRALIAN
    KOREAN
    MEXICAN
    EGYPTIAN
    FRENCH
    INDIAN
  }
`

module.exports = {typeDefs}
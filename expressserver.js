const express = require('express');
const {buildSchema} = require('graphql')
const {graphqlHTTP} = require('express-graphql')

const app = express()
let myMessage = "iam the world"
const schema = buildSchema(`
type Todo {
    userId:Int
    id:Int
    title:String
    completed:Boolean
}
type User {
    id:Int
    name:String
    description:String
}
type Query {
    hello: String
    rand(value:String) : String
    userData:User
    getalluserdata:[User]
    getexternaltodos : [Todo]
    getMsg : String
}


type Mutation {
    setMessage(value:String) : String
}
`)

const root = {
    hello : ()=>{
        return "hello world"
    },
    rand : (args)=>{
        return `my name checking random ${args.value}`
    },
    userData : ()=>{
        const userInfo = {
            id : 2,
            name : "ramuvenkatesh",
            description : "this is learning about graphql"
        }
        return userInfo
    },
    getalluserdata : ()=>{
        const userInfo = [{
            id : 1,
            name : "ramuvenkatesh",
            description : "this is learning about graphql"
        } ,
        {
            id : 2,
            name : "venkatesh",
            description : "this is learning about node"
        },
        {
            id : 3,
            name : "ramana",
            description : "this is learning about react"
        }
    ]
    return userInfo
    },
    getexternaltodos : async()=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
        const data = await response.json()
        const userInfo = await data
        return userInfo
    },
    setMessage : ({value})=>{
        myMessage = value
        return myMessage
    },
    getMsg : ()=> myMessage
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema : schema,
    rootValue : root
}))

app.listen(4000,()=>{
    console.log(`❄️ server listening on port :4000`)
})
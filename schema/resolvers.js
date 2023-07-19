const { userData,movieData } = require("../randomData/randomData");
const _ = require('lodash')

const resolvers = {
    Query : {
        users:()=>{
            return userData
        },
        user : (parent,{id})=>{
             const userInfo = _.find(userData,{id})
             return userInfo
        },
        movies : ()=>{
            return movieData
       },
        movie : (parent,{movieName})=>{
             const movieInfo = _.find(movieData,(movie)=>movie.name.toUpperCase() === movieName.toUpperCase())
             return movieInfo
        }
    },
    User : {
        faviourteMovies : ()=>{
            return _.filter(movieData,(movie)=>movie.yearOfPublication>=1974 && movie.yearOfPublication<=2014)
        }
    },
    Mutation : {
        createUser : (parent,args)=>{
          const user = args.input
          const userId = userData[userData.length-1].id+1
          user.id = userId
          userData.push(user)
          return user
        },
        updateUser : (parent,args)=>{
          const {id,newusername} = args.input
          let modifiedData
          userData.forEach(user=>{
            if(user.id == id){
                user.username = newusername
                modifiedData = user
            }
          })
          return modifiedData
        },
        deleteUser:(parent,{id})=>{
           _.remove(userData,(user)=>user.id === id)
           return null
        } 
    }
}

module.exports = {resolvers}
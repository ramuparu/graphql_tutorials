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
             const movieInfo = _.find(movieData,{name:movieName})
             return movieInfo
        }
    },
    User : {
        faviourteMovies : ()=>{
            return _.filter(movieData,(movie)=>movie.yearOfPublication>=1974 && movie.yearOfPublication<=2014)
        }
    }
}

module.exports = {resolvers}
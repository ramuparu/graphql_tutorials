import React, { useState } from 'react'
import {useQuery,gql,useLazyQuery} from '@apollo/client'

const userInformation = gql(`
query getUserInformation {
    users {
      id
      nationality
      age
      username
    }
  }
`)

const movieSearchByInput = gql(`
query getMovieSearchByInput($movieName : String!) {
    movie(movieName : $movieName){
        name
        yearOfPublication
    }
}
`)

const UserData = () => {
    const [movieInp,setMovieInp] = useState('')
    const {data,loading,error} = useQuery(userInformation)
    const [fetchMovie,{data : movieData, error : movieError}] = useLazyQuery(movieSearchByInput)
    console.log(movieError)
    if(loading) {
        return <h1>Data Loading-----</h1>
    }

    if(error) {
        return <h1>Error-----</h1>
    }
  return (
    <div>
        <ui>
        {data && data.users && data.users.map(userD => {
            return <li key={userD.id}>{userD.nationality}</li>
        })}
        </ui>
        <div>
            <input type="text" placeholder='Type Movie' value={movieInp} onChange={(e)=>setMovieInp(e.target.value)} />
            <button onClick={()=>{
                fetchMovie({
                    variables : {
                        movieName : movieInp
                    }
                })
            }}>Search</button>
            <div>
                {movieData && (
                    <div>
                        {" "}
                        <h1>movie name :{movieData.movie.name}</h1>
                        <h1>movie Year :{movieData.movie.yearOfPublication}</h1>
                        {" "}
                    </div>
                )
                }
                {movieError && (
                    <h1>Something went wrong</h1>
                )}
            </div>
        </div>
    </div>
  )
}

export default UserData

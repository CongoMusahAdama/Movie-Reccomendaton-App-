import React, {useState} from "react"; 
import { useQuery,useLazyQuery,gql, useMutation } from "@apollo/client";

const QUERY_ALL_USERS = gql`
    query GetAllUsers{
       users{
        id:
        name: 
        username:
        age: 
       }
    }
`;

const QUERY_ALL_MOVIES = gql` 
    query GetAllMovies{
       movies{
        name: 
        yearofPublication:
        IsInTheaters:
    }
  }
 `;
// creating querry for fetching data on command 
const QUERY__MOVIES_BY_NAME = gql` 
    query Movie($name: String!) {
      movie(name: $name) {
      name
      yearofPublication
      }
       
  }
 `;

 // creating the mutation for create user
 const CREATE_USER_MUTATION = gql`
    mutation CreateUser ($input : CreateUserInput!){
      CreateUser(input: $input){
        name
        id
      }
      
      }
 `;




function DisplayData(){
    // how to fetch data on cammand
    const [movieSearchedData, setMovieSearched]= useState("")

    // create userSate
    // state that is going the hold the value for the mutation input for creating user
    const [name, setName]= useState("");
    const [username, setUsername]= useState("");
    const [age, setAge]= useState(0);
    const [nationality, setNationality]= useState("")


    // usequerry returns an object from the apollo client that contains loading, error and data
 const {data, loading,refetch}= useQuery(QUERY_ALL_USERS);

 // n;b all the names in the movie function shouldnt be the same as the first function
 const {data: movieData}= useQuery(QUERY_ALL_MOVIES);

 // useLazyQuery
 const [
    fecthMovie, 
    {data: setMovieSearchedData, error: movieError},
] = useLazyQuery( QUERY__MOVIES_BY_NAME);

//useMutation hook
const [CreateUser]= useMutation(CREATE_USER_MUTATION);

 if (loading) {
    //  What is going to appear on the screen when the user browser is still loading
    return <h1> DATA IS LOADING</h1>
 }

 if (error){
    // what is going to appear when there is an error
    /return <h1> SORRY AN ERROR OCCURED</h1>
    console.log(error);
 }

 if (data){
    console.log(data);

 }

 if (movieSearchedData) {
    console.log(movieSearchedData);
 }

 if (movieError)
    console.log(movie)

 // returning the data weve created namned user or getallusers

 return (
    <div>
      <div>
         <input
          type="text"
          placeholder="name..."
          onChanged={(event) => { 
            setName(event.target.value);
          }}

          />
          <input 
            type="text"
            placeholder="name..."
            onChanged={(event) => { 
            setUsername(event.target.value);
            }}
            />
             
             <input 
             type="text"
             placeholder="name..."
             onChanged={(event) => { 
             setAge(event.target.value);

             age = "34"
             }}
             />

             <input
             type="text"
             placeholder="name..."
             onChanged={(event) => { 
             setNationality(event.target.value, toUppercare());
             }}
             />
      


         <input type="text" placeholder="username..."/>
         <input type="number" placeholder="age..."/>
         <input type="text" placeholder="nationality..."/>

         <button onClick={() =>{
            CreateUser({
               variables:{input:{name, username, age:Number(age), nationality}},
            });

            refetch();
         }}
            > 
            Create User</button>
      </div>
        {data &&
         data.usermap((user)=>{
            return (
                <div>
                    <h1>name:{user.name}</h1>
                    <h1>username:{user.userame}</h1>
                    <h1>age:{user.age}</h1>
                    </div>
               );
         })}



         {movieData &&
           movieData.movies.map((movie) => {
            return <h1>Movie name:{movie.name}</h1>;
           })}

           <div> 
             <input 
               type="text" 
               placeholder="prison break..."
               onChanged={(event) => { setMovieSearchedData(event.target.value);
             }}
             />
             <button> 
                onClick={
                  fecthMovie({
                    variables:  {
                        name: movieSearched,
                    },
                })};
                
            
                Fetch Daata
            </button>
             <div>
                {movieSearchedData && (
                    <div>
                       {""}
                       <h1>MovieName: {movieSearchedData.movie.name}</h1>{""}
                       <h1>
                       year of Publication:{movieSearchedData.movie.yearOfPublication}
                       </h1>{""} 
                       </div>
                )}
                {movieError && <h1> there was an error fetching the data</h1>}
             </div>
           </div>
     </div>
 );
}

export default DisplayData;
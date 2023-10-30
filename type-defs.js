const {gql} = require("apollo-server");

const typeDefs = gql`

    type User {
       id: ID!
       name: String!
       username:String!
       age: Int!
       nationality: String!
       Friends:[User]
# relating the type movie to the user type
       favoriteMovies:[Movie]
   }


## this type will interupt with the user, such that the user favourite movie 
type Movie{
      id: ID!
      name: String!
      yearofPublication:Int!
      IsInTheaters: Boolean!
  }


# TYPE QUERY= request. requesting of data type
    type Query {
       users: UserResult
       user(id: ID!): User!

       movies:[Movie!] !
       movie(name: String!): Movie!

  }

 #TYPE MUTATION

 type mutation {
   CreateUser(input: CreateUserInput!): User # creating a user
   updateUsername(input: updateUsernameInput!):User  #updating the userame
   deleteUser(id:ID!): User #deletng the user


   }
   
#creating user
 Input CreateUser{
   name: String!
   username:String!
   age: Int!
   nationality: String!
   
   }

#updating user
   Input updateUsernameInput{
       id: id!
       newUsername: String!
   
   }

#helps to request for a specific user function
enum nationality{
   CANADA
   ITALY
   GEORGIA
   UNITED STATE
} 

# union/result boxes which is used for error handling

type UsersSuccessfulResult{
       users:[User!]! 
}

type UsersErrorResult{
      message: String!
}

union UserResult = UsersSuccessfulResult | UsersErrorResult

`;


module.exports ={typeDefs};




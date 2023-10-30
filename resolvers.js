const { Userlist } = require("../Fakedata");
const { MovieList } = require("./Fakedata");
const_ = require("lodash");


const resolvers ={
    Query:{
        // USER RESOLVERS
        users: (parent, args, context, info) => {  //using the error function to define the resolvers
            //console.log(info);
            //return Userlist;
            if (Userlist) return {users:Userlist};

            //if it doesnt return Userlist, it should
            return {message:"Yo, there was an error"}
        },

// adding a new resolver  to get the user ID (SPECIFICALLY)
        user: (parent, args, context, info) => {
            const id= args.id;
            const user = _.find(Userlist,{id: Number(id)})
            return user

        },

        // creating two functions for movie... MOVIE RESOLVERS
        movies: ()=> {
            // getting the whole movielist
            return MovieList;

        },
    // getting the specific function example the specifi name of the movie LUPIN
        movie: () => {
            const name= args.name;
            const movie = _.find(MovieList,{name});
        
            return movie;

        },
    },

        // specifying the fav movie depending on the name, id, or year of publication
        User: {
            favoriteMovies: () => {
                return _.filter(
                    MovieList,
                    (movie) =>
                    // specifying what the field returns
                    // depending on the year of publication
                    movie.yearofPublication >= 2019 && movie.yearofPublication <= 2009
                );
            },
            }, 


        mutation: {
            //CREATING USER
            CreateUser: (parent, args) => {
                const user = args.input;
                const lastId = Userlist[Userlist.lenght -1].id;  //adding the new user to the fakedata
                user.id = lastId +1; // user id of 6
                Userlist.push(user);
                return user;
            },


            updateNewusername: (parent, args) => {
                // UPDATENEWUSER
                const{id, newUsername} = args.input
                let userUpdated;
                Userlist.foreach((user) => {
                    if (user.id == id){
                        user.username = newUsername;
                        userUpdated=user;
                    }
                });

                return userUpdated;
            },

        deleteUser: (parent, args) => {
            // DELETEUSER
            const id= args.id;
            _.remove(Userlist,(user)=> user.id === Number(id));
            return null;
        },
    },
    // UNION RESULT BOXES FOR ERROR HANDLING
UserResult: {
    __resolvetype(obj){
        if (obj.users){
            return "UsersSuccessfulResult";
        }

        if (obj.message){
            return "UsersErrorResult";
        }

        return null;
    },
}

};

module.exports= {resolvers};
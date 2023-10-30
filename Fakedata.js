 const Userlist = [
    {
        id: 1,
        name:"musah",
        username:"musah",
        age:"20",
        nationality:"CANADA",
//adding friends to the data
        friends:[{id:2,
            name:"shadrack",
            username:"shadrack",
            age:"22",
            nationality:"ITALY",
    

        }]
    },
    {
        id:2,
        name:"shadrack",
        username:"shadrack",
        age:"22",
        nationality:"ITALY",
// adding friends to the data
        friends:[{id: 3,
            name:"mustapha",
            username:"mustapha",
            age:"28",
            nationality:"GEORGIA",

        }]

    },
    {
        id: 3,
        name:"mustapha",
        username:"mustapha",
        age:"28",
        nationality:"GEORGIA",


        friends:[{
            id: 1,
            name:"musah",
            username:"musah",
            age:"20",
            nationality:"CANADA",
    
        }]
    },
    {
        id: 4,
        name:"sheriff",
        username:"sherrif",
        age:"25",
        nationality:"UNITED STATE",
    },
];


// MOVIES
const MovieList = [
    {
        id:1,
        name:"lupin",
        yearofPublication:2019,
        IsInTheaters: true,
},
{
        id:2,
        name:"prison break",
        yearofPublication:2007,
        IsInTheaters: true,
},
{
        id:3,
        name:"fubar",
        yearofPublication:2009,
        IsInTheaters: true,
},
{
        id:1,
        name:"AgriTech Documentary",
        yearofPublication:2030,
        IsInTheaters: false,
},
]

module.exports={Userlist, MovieList};
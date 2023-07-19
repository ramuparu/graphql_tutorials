const users = [
    {
      id: 1,
      username: 'JohnDoe',
      age: 25,
      nationality: 'AMERICAN',
      friends: [
        { id: 2, username: 'JaneSmith', age: 30, nationality: 'BRITISH' },
        { id: 5, username: 'EmilyJones', age: 32, nationality: 'AUSTRALIAN' }
      ]
    },
    {
      id: 2,
      username: 'JaneSmith',
      age: 30,
      nationality: 'BRITISH',
      friends: [
        { id: 1, username: 'JohnDoe', age: 25, nationality: 'AMERICAN' },
        { id: 3, username: 'DavidLee', age: 21, nationality: 'CHINESE' }
      ]
    },
    {
      id: 3,
      username: 'DavidLee',
      age: 21,
      nationality: 'CHINESE',
      friends: [
        { id: 2, username: 'JaneSmith', age: 30, nationality: 'BRITISH' },
        { id: 4, username: 'MariaGarcia', age: 28, nationality: 'SPANISH' }
      ]
    },
    {
      id: 4,
      username: 'MariaGarcia',
      age: 28,
      nationality: 'SPANISH',
      friends: [
        { id: 3, username: 'DavidLee', age: 21, nationality: 'CHINESE' },
        { id: 6, username: 'DanielKim', age: 27, nationality: 'KOREAN' }
      ]
    },
    {
      id: 5,
      username: 'EmilyJones',
      age: 32,
      nationality: 'AUSTRALIAN',
      friends: [
        { id: 1, username: 'JohnDoe', age: 25, nationality: 'AMERICAN' },
        { id: 6, username: 'DanielKim', age: 27, nationality: 'KOREAN' }
      ]
    },
    {
      id: 6,
      username: 'DanielKim',
      age: 27,
      nationality: 'KOREAN',
      friends: [
        { id: 4, username: 'MariaGarcia', age: 28, nationality: 'SPANISH' },
        { id: 5, username: 'EmilyJones', age: 32, nationality: 'AUSTRALIAN' }
      ]
    },
    {
      id: 7,
      username: 'SophiaLopez',
      age: 24,
      nationality: 'MEXICAN',
      friends: [
        { id: 8, username: 'MohammedAli', age: 31, nationality: 'EGYPTIAN' },
        { id: 9, username: 'IsabellaRousseau', age: 29, nationality: 'FRENCH' }
      ]
    },
    {
      id: 8,
      username: 'MohammedAli',
      age: 31,
      nationality: 'EGYPTIAN',
      friends: [
        { id: 7, username: 'SophiaLopez', age: 24, nationality: 'MEXICAN' },
        { id: 10, username: 'LiamGupta', age: 26, nationality: 'INDIAN' }
      ]
    },
    {
      id: 9,
      username: 'IsabellaRousseau',
      age: 29,
      nationality: 'FRENCH',
      friends: [
        { id: 7, username: 'SophiaLopez', age: 24, nationality: 'MEXICAN' },
        { id: 10, username: 'LiamGupta', age: 26, nationality: 'INDIAN' }
      ]
    },
    {
      id: 10,
      username: 'LiamGupta',
      age: 26,
      nationality: 'INDIAN',
      friends: [
        { id: 8, username: 'MohammedAli', age: 31, nationality: 'EGYPTIAN' },
        { id: 9, username: 'IsabellaRousseau', age: 29, nationality: 'FRENCH' }
      ]
    }
  ];

  const movies = [
    {
      id: 1,
      name: 'The Shawshank Redemption',
      yearOfPublication: 1994,
      isInTheaters: false
    },
    {
      id: 2,
      name: 'The Godfather',
      yearOfPublication: 1972,
      isInTheaters: false
    },
    {
      id: 3,
      name: 'The Dark Knight',
      yearOfPublication: 2008,
      isInTheaters: false
    },
    {
      id: 4,
      name: 'Pulp Fiction',
      yearOfPublication: 1994,
      isInTheaters: false
    },
    {
      id: 5,
      name: 'Fight Club',
      yearOfPublication: 1999,
      isInTheaters: false
    },
    {
      id: 6,
      name: 'Inception',
      yearOfPublication: 2010,
      isInTheaters: false
    },
    {
      id: 7,
      name: 'The Matrix',
      yearOfPublication: 1999,
      isInTheaters: false
    },
    {
      id: 8,
      name: 'Forrest Gump',
      yearOfPublication: 1994,
      isInTheaters: false
    },
    {
      id: 9,
      name: 'Goodfellas',
      yearOfPublication: 1990,
      isInTheaters: false
    },
    {
      id: 10,
      name: 'Interstellar',
      yearOfPublication: 2014,
      isInTheaters: false
    },
  ];
  
  

  module.exports = {userData: users,movieData : movies}
  
  // You now have an array with 10 objects, each representing a user with properties like id, username, age, nationality (in uppercase), and friends.
  
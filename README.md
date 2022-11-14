
# Blood Bank App

A simple web application for managing a blood bank. The app delivers functionalities that makes it easy 
for managment of a blood bank.

![bloodbanklive](https://github.com/lonebots/blood-bank-app/blob/master/resources/livedemobbms.png)

The Application was build using following technologies: 
- ReactJs
- JavaScript
- NodeJs
- MySQL

## Diagrams
<img src = "https://github.com/lonebots/blood-bank-app/blob/master/resources/bbms%20relational%20schema.png" alt = "schemadiagram" width = "400" /> <img src = "https://github.com/lonebots/blood-bank-app/blob/master/resources/bbms%20er%20diagram.png" alt = "erdiagram" width = "400" height = "322" />

## Deployment

Click [me](https://lonebots.github.io/blood-bank-app/) for the live demo (several functionalites may be unavailabe since its statically hosted).\
Watch the detailed explanation about the app [here](https://youtu.be/LRvpY_4qsOk)

## Features

The app incorportate following feature for different it twow categories of user: 

#### User
- Register & Login
- donate blood 
- request blood 

#### Employee
- Register & Login
- Update blood stocks
- update user health
- Handle blood request

#### General
- Search - based on blood group or location



## Run Locally

Clone the project

```bash
  git clone https://github.com/lonebots/blood-bank-app.git
```

Open MySQL WorkBench and run the `database.sql` file. 

To start the server

```bash
  cd server             
  npm install 
  npm devStart          
```

To start the client

```bash
  cd client
  npm install
  npm start
```


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Authors

- [@lonebots](https://www.github.com/lonebots)


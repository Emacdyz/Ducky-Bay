# Ducky Bay  

This project is buy/sell platform where users can create ads to sell products and others can see the list of products in order to buy something. It's mobile first, but can also display on tablets.

### 🔷 In Progress!

![alt text](https://github.com/Emacdyz/Ducky-Bay/blob/master/client/public/AppDisplay.png)

## Client

It's build using `create-react-app`. You first need to `yarn` in order to get all the dependencies locally. To start the app `yarn start` can be used.

The backend (server) of this project must be running for the app to function correctly.

## Server

The server side is composed by a product table:

* `GET /products/:id`: select product by id
* `GET /products`: list all products
* `POST /products`: create new product
* `PUT /products/:id'`: update an existing product

### Running

You need a working Postgres database that is preferrably empty (drop all the tables) and running
Install the dependencies using `yarn` in your terminal.

Compile the app (Typescript > Javascript) using `yarn compile` or `tsc -w` on a seperate terminal window. To create the table on your database, you will need to type `node .` or `nodemon`, in a seperate window, while the other one is still running. 

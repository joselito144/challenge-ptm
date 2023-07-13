## challenge-ptm

# Product Manager

This project is a web application that allows managing a list of products with full CRUD (Create, Read, Update, Delete) operations.

## Project Structure

The project is divided into three main folders:

1. **client**: Contains the front-end project developed in React.

2. **dataBase**: Contains the SQL files for creating the MySQL database and its tables.

3. **server**: Contains the back-end project developed in Java Spring.

## client

The client is developed using React. To compile the project, follow these steps:

1. Make sure you have [Node.js](https://nodejs.org) installed on your system.

2. Open a terminal and navigate to the "client" folder.

3. Run the following command to install the dependencies:

npm install

4. Once the installation is complete, run the following command to compile the project:

npm run build

5. After the compilation, a "build" folder will be generated containing the static files ready to be deployed.

## dataBase

In the "dataBase" folder, you will find the SQL files required to create the MySQL database and its tables. You can use these files to create the database and tables.

1. Make sure you have [MySQL](https://www.mysql.com) installed and running.

2. Open your MySQL client and create a new database with the desired name.

3. Execute the provided SQL scripts from the corresponding file to create the required tables in the newly created database.

## server

The server is developed using Java Spring. To run the project, follow these steps:

1. Make sure you have [Java](https://www.java.com) and [Maven](https://maven.apache.org) installed on your system.

2. Open a terminal and navigate to the "server" folder.

3. Run the following command to compile the project:

mvn clean install

4. After the compilation, run the following command to start the server:

mvn spring-boot:run

The server will be available at `http://localhost:8080`.

---

Now you are ready to start using the application! Make sure you have all the prerequisites installed and follow the provided instructions to compile and run each component of the project.




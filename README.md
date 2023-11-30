# products-api

RESTful API application for managing products. Written in NodeJS with Express Web Framework.

## Notes

There are two branches in this repository.

- `main`: contains RESTful API with CRUD and authentication feature.
- `crud`: contains RESTful API with CRUD feature.

## How to Use

1. Clone this repository.

2. Create a new database called `productsdb`.

```sql
CREATE DATABASE productsdb;
```

3. Create `.env` file for storing database configuration.

```sh
cp .env.example .env
```

4. Fill the database configuration and JWT secret key inside `.env` file.

5. Install the dependencies.

```sh
npm install
```

6. Run the application.

```sh
npm start
```

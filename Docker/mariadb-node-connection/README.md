

## maria db container:
docker run -p 3307:3306 -d --name mariadb -e MYSQL_ROOT_PASSWORD=mypassword mariadb/server:10.4

## Use maria db console
open docker dashboard -> mariadb container -> cli/console -> mysql
usefull commands:
MariaDB [(none)]> show databases;
        - CREATE DATABASE mydatabase;
        - show databases;
        - USE mydatabase;
        - SELECT DATABASE();
        - CREATE TABLE products(name VARCHAR(100));
        - DESCRIBE products;
        - INSERT INTO products VALUES ('notebook'), ('mouse'), ('keyboard');
        - SELECT * FROM products;

## Endpoints
GET localhost:3000/products
POST  localhost:3000/new-product
body:
{
    "name" : "monitor2"
}
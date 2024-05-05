
- Node version: 12.14.0

Backend:
- npm start    >>>>> port 4201 
- express backend server generado con: express generator
    https://www.sitepoint.com/create-new-express-js-apps-with-express-generator/


MySQL:
- MySQL Workbench


Test the web api:
GET
    list products
        http://localhost:4201/api/products
        http://localhost:4201/api/products?limit=5
        http://localhost:4201/api/products?page=2
    get products from a category
         http://localhost:4201/api/products/category/Shoes

POST
    add order
        POST - http://localhost:4201/api/orders/new
        JSON body
        {
            "userId": "2",
            "products":
                [{"id": "1", "incart": "2"}, {"id": "3", "incart":"5"}]
        }
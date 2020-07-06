using node v12.0.0 (64-bit)

Dev locally:
- nodemond

- npm run dev

Use Insomnia to test the api

endpoints:

GET
-get an array of photos
http://localhost:3000/api/photos

-get the information of a photo by id
http://localhost:3000/api/photos/:id
http://localhost:3000/api/photos/5e8cd0ea176c933aec46fd2c

POST
- add a new photo
http://localhost:3000/api/photos
STRUCTURED ->>> Multi-part form params:
image, title, description

DELETE
- remove a photo information and the image from uploads folder
http://localhost:3000/api/photos/:id

PUT
- modify a photo information 
http://localhost:3000/api/photos/:id
STRUCTURED ->>> JSON
{
	"title": "Mi titulo",
	"description": "nueva descripcion"
}
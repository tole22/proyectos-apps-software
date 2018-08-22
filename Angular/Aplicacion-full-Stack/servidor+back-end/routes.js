var db = require('./query');

function http(){

    this.config = function(app){
        app.get('/inventario/', function(request, response){
            db.select(response);
        })
        app.get('/inventario/:id/', function(request, response){
            db.selectId(request.params.id, response);
        })
        app.post('/inventario/', function(request, response){
            db.insert(request.body, response);
        })
        app.put('/inventario/', function(request, response){
            db.update(request.body, response);
        })
        app.delete('/inventario/:id/', function(request, response){
            db.delete(request.params.id, response);
        })
    }
}

module.exports = new http();
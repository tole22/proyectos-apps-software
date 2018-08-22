var conection = require('./connection');

function MethodsDB(){
    this.select = function(response){
        conection.obtain(function(er, cn){
            cn.query('select * from inventario', function(error, result){
                cn.release();
                if(error){
                    response.send({ estado: 'Error'})
                } else {
                    response.send(result);
                }
            })
        })
    }

    this.selectId = function(id, response){
        conection.obtain(function(er, cn){
            cn.query('select * from inventario where id=?', id, function(error, result){
                cn.release();
                if(error){
                    response.send({ estado: 'Error'})
                } else {
                    response.send(result);
                }    
            })
        })
    }

    this.insert = function(data, response){
        conection.obtain(function(er, cn){
            cn.query('insert into inventario set ?', data, function(error, result){
                cn.release();
                if(error){
                    response.send({ estado: 'Error'})
                } else {
                    response.send({ estado: 'OK'});
                }    
            })
        })
    }

    this.update = function(data, response){
        conection.obtain(function(er, cn){
            cn.query('update inventario set ? where id = ?', [data, data.id], function(error, result){
                cn.release();
                if(error){
                    response.send({ estado: 'Error'})
                } else {
                    response.send({ estado: 'OK'});
                }    
            })
        })
    }

    this.delete = function(id, response){
        conection.obtain(function(er, cn){
            cn.query('delete from inventario where id = ?', id, function(error, result){
                cn.release();
                if(error){
                    response.send({ estado: 'Error'})
                } else {
                    response.send({ estado: 'OK'});
                }    
            })
        })
    }
}

module.exports = new MethodsDB();
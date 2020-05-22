const fs = require('fs');
const path =  require('path');

const logger = {
    dataLoger: function(req, res, next){
        fs.appendFileSync(path.join(__basedir,'logs','logs.txt'),"El usuario ingreso a la ruta: " + req.url+'\n') 
        return next();
    },
    verifyAdmin: (req, res, next) => {

        const nombreAVerificar = req.query.user;
        let listadoNombresAdmitidos = ["Ada", "Greta", "Vim", "Tim​"];
        const nombreValido = listadoNombresAdmitidos.find(user => {return user == nombreAVerificar})    
        // El nombre no es válido
     if(!nombreValido) {
            return res.send('accesoDenegado');
        }
        req.nombreAdmin = nombreAVerificar;
        next();   
    }
}

 

module.exports = logger;

module.exports = logger;
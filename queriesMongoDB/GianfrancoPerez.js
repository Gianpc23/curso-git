//console.log( Math.floor(Math.random() * (2 - 0 + 1)) + 0);

function f() {
    var arrIBAN = ["ES6621000418401234567891", "ES6000491500051234567892", "ES9420805801101234567891", "ES9000246912501234567891"];
    var monedas = ["€", "$", "Libras"];
    for (var i = 0; i < 100000; i++) {
        db.cuentas.insert({
            _id: i,
            "username": "user" + i,
            "movimiento": Math.floor(Math.random() * (30000 - 0 + 1)) + 0,
            "divisa": monedas[Math.floor(Math.random() * (2 - 0 + 1)) + 0],
            "IBAN": arrIBAN[Math.floor(Math.random() * (3 - 0 + 1)) + 0]
        });
    }
}


/*************************************
 *               NETFLIX
 *************************************/
//use netflix
var tipos = ["Pelicula", "Serie"];
for (var i = 0; i < 100; i++) {
    db.contenido.insert({
        "Nombre": "Contenido" + i,
        "Tipo": tipos[i % 2],
        "NumTemporadas": "" + i % 10
    });
}
for (var i = 0; i < 500; i++) {
    db.usuarios.insert(
        {
            "Nombre": "User" + i,
            "Password": "" + i * 10,
            "Viendo": [
                {
                    "ContenidoID": "123asdjklsandklsn",
                    "Tipo": tipos[i % 2],
                    "TemporadaUsuario": "3",
                },
                {
                    "ContenidoID": "123aspijnkfefefas",
                    "Tipo": tipos[i + 1 % 2],
                    "TemporadaUsuario": "7",
                }
            ],
            "Terminadas": ["ContenidoID", "ContenidoID", "ContenidoID"]
        }
    );
}










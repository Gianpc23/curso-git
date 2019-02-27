/*********************************************3 LOS ALMACENES***************************************************************************************/
INSERT INTO almacenes(Codigo,Lugar,Capacidad) VALUES (1,"Bilbao",5),(2,"Madrid",3),(3,"Canarias",7);
INSERT INTO cajas(NumReferencia, Contenido, Valor, Almacen) VALUES ("ABCD1","Lápiz","160",1),("ABCD2","Cartón","110",2),("ABCD3","Fruta","300",2);
/***************************************************************************************************************************************************/

/*3.1. Obtener todos los almacenes.*/
SELECT * FROM almacenes;

/*3.2. Obtener todas las cajas cuyo contenido tenga un valor superior a 150 €.*/
SELECT * FROM cajas c WHERE c.Valor > 150;

/*3.3. Obtener los tipos de contenidos de las cajas.*/
SELECT c.Contenido FROM cajas c;

/*3.4. Obtener el valor medio de todas las cajas.*/
SELECT AVG(c.Valor) as Media FROM cajas c;

/*3.5. Obtener el valor medio de las cajas de cada almacén.*/
SELECT AVG(c.Valor) as Media FROM cajas c GROUP BY c.Almacen;

/*3.6. Obtener los códigos de los almacenes en los cuales el valor medio de las cajas
sea superior a 150 €.*/
SELECT a.Codigo FROM almacenes a 
WHERE a.Codigo IN (
	SELECT c.Almacen FROM cajas c 
    INNER JOIN almacenes a ON a.Codigo = c.Almacen GROUP BY c.Almacen HAVING AVG(c.Valor)>150
);

/*3.7. Obtener el número de referencia de cada caja junto con el nombre de la ciudad
en el que se encuentra.*/
SELECT c.NumReferencia, a.Lugar FROM cajas c
INNER JOIN almacenes a ON a.Codigo = c.Almacen;

/*3.8. Obtener el número de cajas que hay en cada almacén.*/
SELECT COUNT(*),a.Codigo FROM cajas c
INNER JOIN almacenes a ON a.Codigo = c.Almacen GROUP BY a.Codigo;

/*3.9. Obtener los códigos de los almacenes que estén saturados (los almacenes
donde el número de cajas es superior a la capacidad).*/
SELECT a.Codigo FROM almacenes a
INNER JOIN cajas c ON a.Codigo = c.Almacen;


SELECT a.Codigo, a.Capacidad FROM almacenes a INNER JOIN cajas c ON a.Codigo = c.Almacen GROUP BY a.Codigo; 

SELECT COUNT(*) FROM cajas c
INNER JOIN almacenes a ON a.Codigo = c.Almacen GROUP BY a.Codigo













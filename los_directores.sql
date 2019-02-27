/************************LOS DIRECTORES******************************************/
INSERT INTO despachos(Numero,Capacidad) VALUES (1,3),(2,4),(3,7),(4,1);

INSERT INTO directores(DNI, NomApels) VALUES ("12345678","Gian"),("98745624","Gian2");
INSERT INTO directores(DNI,NomApels,DNIJefe) VALUES ("98765432","Gian3","12345678"),
("98758689","Gian4","12345678");
INSERT INTO directores(DNI,NomApels,DNIJefe,Despacho)
VALUES ("87511765","Gian5","98765432",1),("75548265","Gian6","98745624",2);
/********************************************************************************/

/*5.1. Mostrar el DNI, nombre y apellidos de todos los directores.*/
SELECT d.DNI, d.NomApels FROM directores d;

/*5.2. Mostrar los datos de los directores que no tienen jefes.*/
SELECT d.DNI, d.NomApels FROM directores d WHERE d.DNIJefe IS NULL;

/*5.3. Mostrar el nombre y apellidos de cada director, junto con la capacidad del
despacho en el que se encuentra.*/
SELECT dir.NomApels, des.Capacidad FROM directores dir
INNER JOIN despachos des ON des.Numero = dir.Despacho; 

/*5.4. Mostrar el número de directores que hay en cada despacho.*/
SELECT COUNT(*) as DirXDespacho FROM directores dir
INNER JOIN despachos des ON des.Numero = dir.Despacho
GROUP BY dir.Despacho;

/*5.5. Mostrar los datos de los directores cuyos jefes no tienen jefes.*/
SELECT * FROM directores dir
LEFT JOIN directores dir2 ON dir.DNIJefe = dir2.DNI and dir2.DNI IS NOT NULL;
-- NO FUNCIONAAA



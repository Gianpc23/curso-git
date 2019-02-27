/*******************************SEGUNDO EJERCICIO DEL PDF*******************************************************************/
-- INSERT INTO departamentos(Nombre, Presupuesto) VALUES ("DIA",200),("DATSI",300),("BABEL",100),("CONWET",450);
-- INSERT INTO empleados(DNI,Nombre,Apellidos,Departamento)
-- VALUES ("12312312","César","Medina",1),("38927409","Gian","Perez",2),("90889776","Gian2","Perez2",3),("85874657","Gian3","Perez3",1),
-- ("79841264","Gian4","Perez4",4),("57951577","Gian5","Perez5",2),("68574927","Gian6","Perez6",4),("89734578","Juan","López",4),
-- 
/*********************************************************************************************************************************/
/*2.1. Obtener los apellidos de los empleados.*/
SELECT e.Apellidos FROM empleados e;

/*2.2. Obtener los apellidos de los empleados sin repeticiones.*/
SELECT DISTINCT e.Apellidos FROM empleados e;

/*2.3. Obtener todos los datos de los empleados que se apellidan 'López'.*/
SELECT * FROM empleados e WHERE e.Apellidos = "López";

/*2.4. Obtener todos los datos de los empleados que se apellidan 'López' ó 'Pérez'.*/
SELECT * FROM empleados e WHERE e.Apellidos IN ("López","Perez");

/*2.5. Obtener todos los datos de los empleados que trabajan para el departamento 4.*/
SELECT * FROM empleados e WHERE e.Departamento = 4;

/*2.6. Obtener todos los datos de los empleados que trabajan para el departamento 3 y para el departamento 4.*/
SELECT * FROM empleados e WHERE e.Departamento IN (3,4);

/*2.7. Obtener todos los datos de los empleados cuyo apellido comience por 'P'.*/
SELECT * FROM empleados e WHERE e.Apellidos LIKE 'P%';

/*2.8. Obtener el presupuesto total de todos los departamentos.*/
SELECT SUM(d.Presupuesto) as TotalPresupuesto FROM departamentos d;

/*2.9. Obtener el número de empleados en cada departamento.*/
SELECT COUNT(*) FROM empleados e GROUP BY e.Departamento;

/*2.10. Obtener un listado completo de empleados, incluyendo por cada empleado los
datos del empleado y de su departamento.*/
SELECT e.*, d.Nombre FROM empleados e
INNER JOIN departamentos d ON d.Codigo = e.Departamento;

/*2.11. Obtener un listado completo de empleados, incluyendo el nombre y apellidos
del empleado junto al nombre y presupuesto de su departamento.*/
SELECT e.Nombre,e.Apellidos, d.Nombre, d.Presupuesto FROM empleados e
INNER JOIN departamentos d ON d.Codigo = e.Departamento;

/*2.12. Obtener los nombres y apellidos de los empleados que trabajen en
departamentos cuyo presupuesto sea mayor de 300 €.*/
SELECT e.Nombre,e.Apellidos FROM empleados e
INNER JOIN departamentos d ON d.Codigo = e.Departamento WHERE d.Presupuesto > 300;

/*2.13. Obtener los datos de los departamentos cuyo presupuesto es superior al
presupuesto medio de todos los departamentos.*/
SELECT * FROM empleados e
INNER JOIN departamentos d ON d.Codigo = e.Departamento WHERE d.Presupuesto > (
	SELECT AVG(d.Presupuesto) FROM departamentos d
);
 
 /*2.14. Obtener los nombres (únicamente los nombres) de los departamentos que
tienen más de dos empleados.*/
SELECT d.Nombre FROM departamentos d  WHERE d.Codigo IN (
	SELECT d.Codigo FROM departamentos d
    INNER JOIN empleados e ON e.Departamento = d.Codigo GROUP BY e.Departamento HAVING COUNT(e.Departamento) > 2
);

/*2.15. Añadir un nuevo departamento: 'Calidad', con presupuesto de 40.000 € y
código 11. Añadir un empleado vinculado al departamento recién creado:
Esther Vázquez, DNI: 89267109.*/
INSERT INTO departamentos(Codigo, Nombre, Presupuesto) VALUES (11,"Calidad",40000);
INSERT INTO empleados(DNI,Nombre,Apellidos,Departamento) VALUES("89267109", "Esther", "Vázquez",11);

/*2.16. Aplicar un recorte presupuestario del 10 % a todos los departamentos.*/
UPDATE departamentos SET Presupuesto = Presupuesto * 0.9;

/*2.17. Reasignar a los empleados del departamento del DIA (código 1) al
departamento de BABEL (código 3).*/
UPDATE empleados SET Departamento = 3 WHERE Departamento = 1;

/*2.18. Despedir a todos los empleados que trabajan para el departamento de
informática a (código 14).*/
-- Añadí el departamento de informática pero borré el código del insert.
DELETE FROM empleados WHERE Departamento=14;

/*2.19. Despedir a todos los empleados que trabajen para departamentos cuyo
presupuesto sea superior a los 60.000 €.*/
DELETE FROM empleados WHERE Departamento IN (
	SELECT d.Codigo FROM departamentos d WHERE d.Presupuesto > 60000
);

/*2.20. Despedir a todos los empleados.*/
DELETE FROM empleados;










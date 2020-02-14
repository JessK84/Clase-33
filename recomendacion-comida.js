// Crear un programa que pregunte si va el usuario va a almorzar o cenar, y si es vegetariano o no. Dependiendo de las respuestas, debe recomendar un plato (es decir, debe haber cuatro platos posibles).



let comida = true === confirm("¿Va a almorzar?") || confirm("¿Va a cenar?") ;

let vegetariano = true === confirm("¿Es vegetariano?") && alert(`Puede elegir 4 deliciosos platos: \nomelette con ensalda \ntortilla de vegetales asados \nhamburguesa de lentejas con arroz jamaní \nbrusquetas caprese con sopa de vegetales `) 
vegetariano === false && alert(`Puede comer 4 deliciosos platos: \nmilansea napolitana con fritas \npastas con bolognesa \ntarta de atún o \nempanadas salteñas`);




// let comida = true === confirm("¿Va a almorzar?") || confirm("¿Va a cenar?");

// let vegetariano = true;
// confirm("¿Es vegetariano?") ===true && alert(`Puede elegir 4 deliciosos platos: \nomelette con ensalda \ntortilla de vegetales asados \nhamburguesa de lentejas con arroz jamaní \nbrusquetas caprese con sopa de vegetales `) && vegetariano !== true && alert(`Puede comer 4 deliciosos platos: \nmilansea napolitana con fritas \npastas con bolognesa \ntarta de atún o \nempanadas salteñas`);

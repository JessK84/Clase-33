// const miembro = confirm("Usted es miembro?");
// const cuota = confirm("Tiene cuota al dia?");
// const autorizacion = confirm("Tiene autorizacion?");

// const acceso = miembro && cuota || !miembro && autorizacion;

// alert("¿Tiene acceso? = " + ===acceso);



// Un club tiene las siguientes reglas: sólo pueden entrar miembros que tengan la cuota al día, o no miembros que tengan autorización. Hacer un programa que pregunte estas si es miembro, si tiene la cuota al día y si tiene autorización y muestre luego un mensaje indicando si tiene el acceso permitido o no.

const cuotaAlDia = confirm("¿Tiene la cuota al día?");
const miembro = confirm("¿Es ud. miembro?");
const autorizacion = confirm("¿Tiene autorización?");

const ingreso = cuotaAlDia &&  miembro || !miembro && autorizacion;

alert("¿Ud. puede ingresar?"  + ingreso);

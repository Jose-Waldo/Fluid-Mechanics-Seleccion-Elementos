/* FUNCIÓN PARA TRANSFORMACIÓN DE DECIMALES DE ARRAYS */
function transArray (arrayMixto, decim) {
    // Función para verificar si un elemento es un número
    const esNumero = valor => typeof valor === 'number' && !isNaN(valor);

    // Convertir números a notación científica y mantener otros elementos sin cambios
    let arrayTransformado = arrayMixto.map(item => {
    return esNumero(item) ? item.toExponential(decim) : item;
    });

    return (arrayTransformado);
}

/* BASE DE DATOS CON LAS TABLAS DEL PROGRAMA */
/* CLASES PARA EL BUEN MANEJO DE LA CREACION DE TABLAS */
class tablas {
    /* Tablas creadas mediante funciones */
    rugocidadEnBaseMaterial() {

        /* Es importante siempre definir la cabecera */
        let cabeceraRugMat = ["Material", "Rugosidad e(m)"];

        /* Columnas del programa */
        let material = ["Vidrio", "Plástico", "Tubo extruido, cobre, latón, y acero", 
            "Acero, comercial o soldado", "Hierro galvanizado", "Hierro ductil, recubierto", 
        "Hierro ductil, no recubierto", "Concreto, bien fabricado", 
        "Acero remachado"];
        let Rugosidad = ["Liso", 3.0*10**-7, 1.5*10**-6, 4.6*10**-5, 1.5*10**-4,
        1.2*10**-4, 2.4*10**-4, 1.2*10**-4, 1.8*10**-3];

        /* Funsión para pasar numeros decimales a mas manejables */
        Rugosidad = transArray(Rugosidad, 2);
        
        /* Elemento que contiene las columnas */
        let contColumnas = [material, Rugosidad];
        return [cabeceraRugMat, contColumnas];
    }

    propAguaEnTempera() {
        let cabeceraRugMat = ["Temperatura (°C)", "Peso Especifico γ (kN/m3)",
        "Densidad P (Kg/m3)", "Viscosidada Dinámica Nu (Pa*s)", 
        "Viscosidad Cinemática v (m2/s)"];

        let tempetatura = [0, 5, 10, 15, 20, 25, 35, 45, 50, 55, 60, 65, 70,
        75, 80, 85, 90, 95, 100];

        let pesoEspecifico = [9.81, 9.81, 9.81, 9.81, 9.79, 9.78, 9.77, 
        9.75, 9.73, 9.71, 9.69, 9.67, 9.65, 9.62, 9.59, 9.56, 9.53, 9.50,
        9.47, 9.44, 9.40];

        let densidad = [1000, 1000, 1000, 1000, 998, 997, 996, 994, 992, 
        990, 988, 986, 984, 981, 978, 975, 971, 968, 965, 962, 958];

        let viscosidadDinamica = [1.75*10**-3, 1.52*10**-3, 1.30*10**-3, 1.15*10**-3, 
        1.02*10**-3, 8.91*10**-4, 8.00*10**-4, 7.18*10**-4, 6.51*10**-4,
        5.94*10**-4, 5.41*10**-4, 4.98*10**-4, 4.60*10**-4, 4.31*10**-4, 
        4.02*10**-4, 3.73*10**-4, 3.50*10**-4, 3.30*10**-4,
        3.11*10**-4, 2.92*10**-4, 2.82*10**-4];
        viscosidadDinamica = transArray(viscosidadDinamica, 3);

        let viscosidadCinematica = [1.75*10**-6, 1.52*10**-6, 1.30*10**-6, 1.15*10**-5, 
            1.02*10**-6, 8.94*10**-7, 8.03*10**-7, 7.22*10**-7, 6.56*10**-7,
            6.00*10**-7, 5.48*10**-7, 5.0*10**-7, 4.67*10**-7, 4.39*10**-7, 
            4.11*10**-7, 3.83*10**-7, 3.60*10**-7, 3.41*10**-7,
            3.22*10**-7, 3.04*10**-7, 2.94*10**-7];
        viscosidadCinematica = transArray(viscosidadCinematica, 3);
        
        let contColumnas = [tempetatura, pesoEspecifico, densidad, viscosidadDinamica, viscosidadCinematica];
        return [cabeceraRugMat, contColumnas];
    }

    /* Diametros Areas */

    diamAreas() {
        let cabeceraRugMat = ["Diametro (mm)", "Diametro (m)", "Area (mm2)",
        "Area (m2)"];
    
        let diamMm = [6, 12, 18, 25, 32, 40, 45, 50, 60, 75, 90, 100, 115,
        125, 150, 175, 200, 225, 250, 300, 450, 600];
    
        let diamM = [0.006, 0.012, 0.018, 0.025, 0.032, 0.040, 0.045, 0.050,
        0.060, 0.075, 0.090, 0.100, 0.115, 0.125, 0.150, 0.175, 0.200 ,0.225,
        0.250, 0.300, 0.450, 0.600];
    
        let areaMm2 = [28.27, 113.1, 254.5, 490.9, 804.2, 1257, 1590, 1963,
        2827, 4418, 6362, 7854, 1.039*10**4, 1.227*10**4, 1.767*10**4, (2.405.toFixed(1))*10**4,
        3.142*10**4, 3.976*10**4, 4.909*10**4, 7.069*10**4, 1.590*10**4, 2.827*10**4];
    
        let areaM2 = [2.827*10**-4, 1.131*10**-4, 2.545*10**-4, 4.909*10**-4,
        8.042*10**-4, 1.257*10**-3, 1.590*10**-3,1.963*10**-3, 2.827*10**-3,
        4.418*10**-3, 6.362*10**-3, 7.854*10**-3,1.039*10**-3, 1.227*10**-3, 
        1.767*10**-2, 2.405*10**-2, 3.142*10**-2, 3.976*10**-2, 4.909*10**-2,
        7.069*10**-2, 1.590*10**-1, 2.827*10**-1];
        areaM2 = transArray(areaM2, 3);

        let contColumnas = [diamMm, diamM, areaMm2, areaM2];
        return [cabeceraRugMat, contColumnas];
    }

}

/* FUNCIONES CREACIÓN TABLAS */
/* Función Para la Creación de Cabecera */
function crearCabecera(arrayCabecera, clase) {
    let fila;
    let celda;
    /* Crea la fila que hace de cabecera */
    fila = document.createElement("tr");
    fila.classList.add(clase[1])
    /* Crea las celdas necesarias y las introduce en la fila */
    for (i of arrayCabecera) {
        /* Crea la celda */
        celda = document.createElement("th");
        celda.classList.add(clase[3])
        /* Introduce el contenido en la celda */
        celda.innerHTML = i;
        /* Incerta la celda en la fila */
        fila.appendChild(celda);
    }
    /* Retorna la fila */
    return fila;
}

/* Funcion creación de filas */
function crearFila (contenedorColum, cont, clases) {
    /* Crea la fila */
    let fila = document.createElement("tr");
    fila.classList.add(clases[1])
    let celda;
    /* Obtiene el numero de filas */
    let numeroFilas = contenedorColum.length;
    /* Genera un ciclo para la creación de las filas */
    for (let j = 0; j<= numeroFilas -1; j++) {
        /* Crea la celda*/
        celda = document.createElement("td");
        celda.classList.add(clases[2] + j)
        /* Introduce el contenido en la celda */
        celda.innerHTML = contenedorColum[j][cont];
        /* Introduce la celda en la fila */
        fila.appendChild(celda);
    }
    /* Retora la fila */
    return fila;
}

/* Funcion definitiva para crear tabla */
/* Se entrega el cotenedor dentro del cual se creeara la tabla, 
Se entrgra los datos de cabecera con el fin de crear esta,
El contColum, es un array que contiene las columnas, 
clasesTabla [array] se asigna las clases para los table, tr, td, th, 
el array para las clasesTabla se organiza asi [table, tr, td, th]*/
function crearTabla(contenedor, cabecera, contColum, clasesTabla) {
    /* Crea la tabla */
    let tabla = document.createElement("table");
    tabla.classList.add(clasesTabla[0]);
    /* Introduce la tabla en el elemento contenedor */
    contenedor.appendChild(tabla);
    /* Crea la cabecera y la introduce en la tabla */
    tabla.appendChild(crearCabecera(cabecera, clasesTabla));
    /* Ciclo conn el  */
    for (let i =0; i<= contColum[0].length-1; i++) { /*********************************[1] */
        /* crea las filas en base a la función crearFila */
        /* El i sirve para saltar entre filas */
        tabla.appendChild(crearFila(contColum, i, clasesTabla));
    }
}

/* Funsion para crear opciones del select */
function crearOpciones(selector, arraOpciones) { /* Requiere el select, y el array de opciones */
    /* Toma las opciones en un array y crea la lista con cada elemento */
    for (isele of arraOpciones) {
        /* Crea opción y la introduce en el elemento select */
        let opcion = document.createElement("option");
        opcion.value = isele;
        opcion.innerHTML = isele;
        selector.appendChild(opcion);
    }
}

/* Anima las las celda seleccionada en base a la información dada */
function animarObtenerDat(listatdDOM, arrCabeceyElem, mostrador, opcionSeleccionada) {
    let padre;
    let hijos;
    let informacionSalida = "";
    let numSeleccion = 0;
    /* Se crea un contdor de las filas */
    for (iSel in arrCabeceyElem[1][0]) {
        /* Toma el contenido de la primera columna y compara con la opción*/
        if (listatdDOM[iSel].textContent == opcionSeleccionada) {
            /* Numero que se usa para mostrar datos */
            numSeleccion = iSel;
            /* Agrega una clase para que el elemento se anime */
            listatdDOM[iSel].classList.add("elemento-seleccionado");
            padre = listatdDOM[iSel].parentElement;
            hijos = padre.children;
            /* Agrega la clase a todos los hijos */
            for (ican of hijos) {
                ican.classList.add("elemento-seleccionado")
            }
        }  
    }

    /* De esta manera se muestra la información del elemento seleccionado */
    for (linf in arrCabeceyElem[0]) { /* Recorre la cabecera */
        informacionSalida = informacionSalida.concat("" + arrCabeceyElem[0][linf] + ":  " + arrCabeceyElem[1][linf][numSeleccion] + "<br>")
    }
    /* Muestra la información en el DOM */
    mostrador.innerHTML = informacionSalida;
    return hijos;
}

let opciTablas = ["Rugosidades", "Propiedades Agua En Temperatura", "Area Diametro"];
let listaTablas = document.querySelector(".lista-tablas");
crearOpciones(listaTablas, opciTablas);

/* Crear funcion para creacion de tablas */
/* Crear tabla de rugocidades */
let contenedorTablas = document.querySelector(".tablas"); // Selecciona contenedor tablas
let clasese = ["table", "tr", "td", "th"]; /* Clases para cada uno de los elementos */
let baseDatosTablas = new tablas; /* Ingresa a la base de datos */
let listaOpciones = document.querySelector(".Lista-opciones-tabla");


/* Creación lista opciones */



let opcionAnterior;
let tablaAnterior;
let cont = 0;
let cont2 = 0;
let cabeceraColumnas;
/* MUESTRA EL CONTENIDO DE LA OPCION MARCADA */
listaTablas.addEventListener("click", function(){
    cont++

    if (cont % 2 == 0) {
        tablaAnterior = document.querySelector(".table");
        opcionAnterior = listaOpciones.children;
        let opcioon = listaTablas.value;
        
        /* El siguiente es el mecanismo mediante el que se crean las tablas */
        if (opcioon == opciTablas[0]) {
            cabeceraColumnas = baseDatosTablas.rugocidadEnBaseMaterial(); /* Crea el array de datos */
            crearTabla(contenedorTablas, cabeceraColumnas[0], cabeceraColumnas[1], clasese);
            while (listaOpciones.firstChild) {
                listaOpciones.removeChild(listaOpciones.firstChild);
            }
            crearOpciones(listaOpciones, cabeceraColumnas[1][0]);
            
            contenedorTablas.removeChild(tablaAnterior);
        }

        else if (opcioon == opciTablas[1]) {
            cabeceraColumnas = baseDatosTablas.propAguaEnTempera(); /* Crea el array de datos */
            crearTabla(contenedorTablas, cabeceraColumnas[0], cabeceraColumnas[1], clasese);
            while (listaOpciones.firstChild) {
                listaOpciones.removeChild(listaOpciones.firstChild);
            }
            crearOpciones(listaOpciones, cabeceraColumnas[1][0]);
            contenedorTablas.removeChild(tablaAnterior);
        }

        else if (opcioon == opciTablas[2]) {
            cabeceraColumnas = baseDatosTablas.diamAreas(); /* Crea el array de datos */
            console.log(cabeceraColumnas)
            crearTabla(contenedorTablas, cabeceraColumnas[0], cabeceraColumnas[1], clasese);
            while (listaOpciones.firstChild) {
                listaOpciones.removeChild(listaOpciones.firstChild);
            }
            crearOpciones(listaOpciones, cabeceraColumnas[1][0]);
            contenedorTablas.removeChild(tablaAnterior);
        }
    }
})
let tdo;
let salidadatos = document.querySelector(".salida-datos");
let ultimosAnimados;
listaOpciones.addEventListener("click", function(){
    cont2++
    if (cont2 % 2 == 0) {
        tdo = document.querySelectorAll(".td0")
        let opcion = listaOpciones.value;
        console.log(opcion);
        console.log(cabeceraColumnas);
        ultimosAnimados = animarObtenerDat(tdo, cabeceraColumnas, salidadatos, opcion);
        setTimeout(function(){
            for (icol of ultimosAnimados) {
                icol.classList.remove("elemento-seleccionado")
            }
        }, 10000)
        
    }
})




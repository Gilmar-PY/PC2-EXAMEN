
// simulacion con callbacks
function primer_Solicitud(callback) {
    setTimeout(() => {
        console.log("Primera solicitu completada");
        callback(" datos de la primera Solicitud");
    }, 10000);
}

primeraTarea((solicitud1) => {
    segundaTarea(data1, (solicitud2) => {
        terceraTarea(solicitud1, (solicitud2) => {
            console.log("solicitudes completadas :", solicitud2);
        });
    });
});

//manejo de errores
function fetchSoliciutudPromise() {
    return new Promise((resolve, reject) => {
        console.log("Iniciando solicitud de datos...");
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve({ id: 1, name: "" });
            } else {
                reject("Error: No se obtuvo las solicitudes.");
            }
        }, 3000);
    });
}

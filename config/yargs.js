const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea por hacer'
};

const argv = require('yargs')
    .command('listar', 'Muestra todas las tareas por hacer')
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea de la lista', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}
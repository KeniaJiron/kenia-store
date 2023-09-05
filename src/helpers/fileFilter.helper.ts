// crear un filtro de los tipos archivos admitidos
export const fileFilter = (
    req:Express.Request, //req es una solicitud, express seria 
    file:Express.Multer.File,
    callback,
) => {
    //(!file): Es un llamado a la accion Callback 
    //Si el archivo no existe o no viene entoces:
    if(!file) return callback (new Error('Archivo vacio'), false);

    //Llegamos hasta el minetype y tomamos la extension del archivo
    const fileExtension = file.mimetype.split('/') [1];
    
    //Estas serian las extesiones validas para los archivos
    const validExtension =[ 'jpg', 'png', 'jpeg'];

    //Si la extesiones validas incluyen la extension del archivo
    if(validExtension.includes(fileExtension)) {
        return callback(null, true);
    }

    callback(null, false);

};
import{v4 as id} from 'uuid';

export const fileNamer = ( 
req:Express.Request, 
file:Express.Multer.File,
callback,
) => {
      //(!file): Es un llamado a la accion Callback 
    //Si el archivo no existe o no viene entoces:
    if(!file) return callback (new Error('Archivo vacio'), false);

    //Llegamos hasta el minetype y tomamos la extension del archivo
    const fileExtension = file.mimetype.split('/') [1];

    //Creo una interpolacion, uniendo el uuid con la extension del archivo 
    const fileNamer = `${id()}.${fileExtension}`;

    //Retornar el nombre del archivo
    callback(null, fileNamer);
    

};
module.exports = (sequelize, DataTypes) => {
  //Aca tenemos que poner el mismo nombre de la tabla que creamos y sobre la cual vamos a trabajar.
  let alias = "Rol";

  //Las columnas van a ser objetos literales, que a su vez van a tener otros objetos dentro de ellas en donde van a estar detallados los campos. Aca tenemos que copiar el contenido que hay en workbench.
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    //Aca ya estamos resumiendo cada atributo, pero si quisieramos especificar cada uno de ellos , por ej el name, tendriamos que abrir otro objeto literal y empezar a desarrollarlo , tal como lo hicimos con el ID.
    //Los campos createdAt , updatedAt , deletedAt que estaban creados en la base de datos , no hace falta establecerlos aca ya que como estamos trabajando de manera estandarizada el sequelize se encarga.
    label: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
      autoIncrement: false,
    },
    value: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      allowNull: false,
      autoIncrement: false,
    },
  };

  //Dentro del config, se coloca toda la informacion que queremos poner si no cumplimos los estandares para crear los modelos. Esto se usa cuando nosotros no seguimos los estandares.
  let config = {
    timestamps: false,
  };

  ///Aca estamos definiendo el modelo. El alias es el nombre, el cols es el nombre de las diferentes columnas. Y el config, es la configuracion que va a tener el modelo.
  const Rol = sequelize.define(alias, cols, config);
  Rol.associate = function (models) {
    Rol.hasMany(models.User, {
      // as : 'users',
      foreignKey: "rol_id",
    });
  };
  return Rol;
};

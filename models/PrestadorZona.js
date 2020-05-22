module.exports = (sequelize, DataType) => {
    const PrestadorZona = sequelize.define(
      "PrestadorZona",
      {
        prestadores_id: {
          type: DataType.INTEGER,
          references: {
              model: 'Prestador',
              key: 'id',
          }
        }, 
        
        zonas_id: {
            type: DataType.INTEGER,
            references: {
                model: 'Zona',
                key: 'id',
            }
          },
      },

      {
        tableName: "prestadores_zonas",
        timestamps: false,
      }
    );
  
    return PrestadorZona;
  };
  
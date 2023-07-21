'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelurahan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      kelurahan.hasMany(models.pasien, {foreignKey: 'kelurahanId'})
    }
  }
  kelurahan.init({
    namaKelurahan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'nama kelurahan must be required'
        },
        notNull: {
          msg: 'nama kelurahan must be required'
        }
      }
    },
    namaKecamatan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'nama kecamatan must be required'
        },
        notNull: {
          msg: 'nama kecamatan must be required'
        }
      }
    },
    namaKota: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'nama kota must be required'
        },
        notNull: {
          msg: 'nama kota must be required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'kelurahan',
  });
  return kelurahan;
};
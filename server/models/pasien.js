'use strict';
const {
  Model
} = require('sequelize');
const getYYMMFromDate = require('../helpers/getDate');
module.exports = (sequelize, DataTypes) => {
  class pasien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pasien.belongsTo(models.kelurahan, { foreignKey: 'kelurahanId' })
    }
  }
  pasien.init({
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'nama must be required'
        },
        notNull: {
          msg: 'nama must be required'
        }
      }
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'alamat must be required'
        },
        notNull: {
          msg: 'alamat must be required'
        }
      }
    },
    telepon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'telepon must be required'
        },
        notNull: {
          msg: 'telepon must be required'
        }
      }
    },
    rt_rw: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'RT/RW must be required'
        },
        notNull: {
          msg: 'RT/RW must be required'
        }
      }
    },
    kelurahanId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'kelurahan must be required'
        },
        notNull: {
          msg: 'kelurahan must be required'
        }
      },
      references: {
        model: 'kelurahans',
        key: 'id'
      }
    },
    tanggalLahir: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'nama must be required'
        },
        notNull: {
          msg: 'nama must be required'
        }
      }
    },
    kelamin: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'nama must be required'
        },
        notNull: {
          msg: 'nama must be required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'pasien',
  });
  pasien.afterCreate(async (newPasien, options) => {
    const num = newPasien.id
    const newId = await getYYMMFromDate()
    const customId = +`${newId}${num}`
    return newPasien.id = customId;
  });
  return pasien;
};
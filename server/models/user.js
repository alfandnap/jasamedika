'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../middlewares/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'username must be required'
        },
        notNull: {
          msg: 'username must be required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'password must be required'
        },
        notNull: {
          msg: 'password must be required'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'role must be required'
        },
        notNull: {
          msg: 'role must be required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  user.beforeCreate(async (user, options) => {
    const hashedPassword = await hashPassword(user.password);
    user.password = hashedPassword;
  });
  return user;
};
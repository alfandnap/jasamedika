'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pasiens', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'nama is required'
          },
          notNull: {
            msg: 'nama is required'
          }
        }
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'alamat is required'
          },
          notNull: {
            msg: 'alamat is required'
          }
        }
      },
      telepon: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'telepon is required'
          },
          notNull: {
            msg: 'telepon is required'
          }
        }
      },
      rt_rw: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'RT/RW is required'
          },
          notNull: {
            msg: 'RT/RW is required'
          }
        }
      },
      kelurahanId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Kelurahan is required'
          },
          notNull: {
            msg: 'Kelurahan is required'
          }
        },
        references: {
          model: 'kelurahans',
          key: 'id'
        }
      },
      tanggalLahir: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'tangal lahir is required'
          },
          notNull: {
            msg: 'tangal lahir is required'
          }
        }
      },
      kelamin: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'kelamin is required'
          },
          notNull: {
            msg: 'kelamin is required'
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pasiens');
  }
};
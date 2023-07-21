const { user, kelurahan, pasien } = require('../models')
const { checkPassword } = require('../middlewares/bcrypt')
const { generateToken } = require('../middlewares/authentication')

class Controller {

  static async register(req, res, next) {
    try {
      const { username, password, role } = req.body
      if (!username || !password || !role) {
        throw { name: 'SequelizeValidationError' }
      }

      const newUser = await user.create({username, password, role})

      res.status(201).json({ id: newUser.id })

    } catch (error) {
      next(error)
    }
  }

  static async login(req, res, next) {
    try {
      const { username, password } = req.body
      if (!username || !password) {
        throw { name: 'Invalid' }
      }
      const findUser = await user.findOne({
        where: {
          username
        }
      })
      if (!findUser) {
        throw { name: 'Invalid' }
      }

      const verify = checkPassword(password, findUser.password)
      if (!verify) {
        throw { name: 'Invalid' }
      }

      const access_token = generateToken({
        id: findUser.id,
        role: findUser.role
      })

      res.status(200).json({ access_token, role: findUser.role })

    } catch (error) {
      next(error)
    }
  }

  static async postKelurahan(req, res, next) {
    try {
      const { namaKelurahan, namaKecamatan, namaKota } = req.body
      if (!namaKelurahan || !namaKecamatan || !namaKota) {
        throw { name: 'SequelizeValidationError' }
      }

      const newKelurahan = await kelurahan.create({namaKelurahan, namaKecamatan, namaKota})

      res.status(201).json({ id: newKelurahan.id })

    } catch (error) {
      next(error)
    }
  }

  static async getKelurahan(req, res, next) {
    try {
      // const { namaKelurahan, namaKecamatan, namaKota } = req.body
      // if (!namaKelurahan || !namaKecamatan || !namaKota) {
      //   throw { name: 'SequelizeValidationError' }
      // }

      const kelurahans = await kelurahan.findAll()

      res.status(200).json({ kelurahans })

    } catch (error) {
      next(error)
    }
  }

  static async putKelurahan(req, res, next) {
    try {
      const {id} = req.params

      const { namaKelurahan, namaKecamatan, namaKota } = req.body
      if (!namaKelurahan || !namaKecamatan || !namaKota) {
        throw { name: 'SequelizeValidationError' }
      }

      const newKelurahan = await kelurahan.update({ namaKelurahan, namaKecamatan, namaKota }, {
        where: {
          id
        }
      });

      res.status(200).json({ id })

    } catch (error) {
      next(error)
    }
  }

  static async postPasien(req, res, next) {
    try {
      const { nama, alamat, telepon, tanggalLahir, rt_rw, kelurahanId, kelamin } = req.body
      if (!nama || !alamat || !telepon, !tanggalLahir, !rt_rw, !kelurahanId, !kelamin ) {
        throw { name: 'SequelizeValidationError' }
      }

      const newPasien = await pasien.create({nama, alamat, telepon, rt_rw, kelurahanId, tanggalLahir, kelamin})

      res.status(201).json({ id: newPasien.id })

    } catch (error) {
      next(error)
    }
  }

}

module.exports = Controller
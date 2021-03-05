import express from 'express'
import BaseController from '../utils/BaseController'
import { usersService } from '../services/UsersService'

export class UsersController extends BaseController {
  constructor() {
    super('api/user')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getuserbyId)
      .get('/:id/posts', this.getpostsbyuserId)
      .post('', this.createUser)
  }

  async getAll(req, res, next) {
    try {
      res.send(await usersService.find(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getuserbyId(req, res, next) {
    try {
      res.send(await usersService.findById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async getpostsbyuserId(req, res, next) {
    try {
      res.send(await signupService.find({ user: req.params.id }))
    } catch (error) {
      next(error)
    }
  }

  async createUser(req, res, next) {
    try {
      res.send(201, await usersService.createUser(req.body))
    } catch (error) {
      next(error)
    }
  }
}

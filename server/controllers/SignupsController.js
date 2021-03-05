// import express from 'express'
import BaseController from '../utils/BaseController'
import { signupsService } from '../services/SignupsService'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class SignupsController extends BaseController {
  constructor() {
    super('api/signups')
    this.router
      .get('', this.getAll)
      .delete('/:id', this.deleteSignup)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createSignup)
  }

  async getAll(req, res, next) {
    try {
      res.send(await signupsService.find(req.query))
    } catch (error) {
      next(error)
    }
  }

  async createSignup(req, res, next) {
    try {
      req.body.account = req.userInfo.id
      res.send(201, await signupsService.createSignup(req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteSignup(req, res, next) {
    try {
      res.send(await signupsService.deleteSignup(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}

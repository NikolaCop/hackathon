// import express from 'express'
import BaseController from '../utils/BaseController'
import { commentsService } from '../services/CommentsService'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .get('', this.getAll)
      .put('/:id', this.editScore)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .delete('/:id', this.deleteComment)
      .post('', this.createComment)
  }

  async editScore(req, res, next) {
    try {
      res.send(await commentsService.vote(req.body.vote, req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      res.send(await commentsService.find(req.query))
    } catch (error) {
      next(error)
    }
  }

  async createComment(req, res, next) {
    try {
      req.body.account = req.userInfo.id
      res.send(201, await commentsService.createComment(req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteComment(req, res, next) {
    try {
      res.send(await commentsService.deleteComment(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}

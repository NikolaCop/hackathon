import express from 'express'
import BaseController from '../utils/BaseController'
import { postsService } from '../services/PostsService'

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getpostbyId)
      .get('/:id/signups', this.getAllSignupsByPostId)
      .get('/:id/comments', this.getAllCommentsByPostId)
      .post('', this.createPost)
      .delete('/:id', this.deletePost)
  }

  async getAllCommentsByPostId(req, res, next) {
    try {
      res.send(await commentsService.find({ post: req.params.id }))
    } catch (error) {
      next(error)
    }
  }

  async getAllSignupsByPostId(req, res, next) {
    try {
      res.send(await signupsService.find({ post: req.params.id }))
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      res.send(await postsService.find(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getpostbyId(req, res, next) {
    try {
      res.send(await postsService.findById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async createPost(req, res, next) {
    try {
      res.send(201, await postsService.createPost(req.body))
    } catch (error) {
      next(error)
    }
  }

  async deletePost(req, res, next) {
    try {
      res.send(await postsService.deletePost(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}

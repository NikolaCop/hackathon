import express from 'express'
import BaseController from '../utils/BaseController'
import { gamesService } from '../services/GamesService'
import { postsService } from '../services/PostsService'

export class GamesController extends BaseController {
  constructor() {
    super('api/games')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getgamebyId)
      .get('/:id/posts', this.getAllPostsByGameId)
      .post('', this.createGame)
      // .put('/:id', this.editGame)
      .delete('/:id', this.deleteGame)
  }

  async getAllPostsByGameId(req, res, next) {
    try {
      res.send(await postsService.find({ game: req.params.id }))
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      res.send(await gamesService.find(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getgamebyId(req, res, next) {
    try {
      res.send(await gamesService.findById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async createGame(req, res, next) {
    try {
      res.send(201, await gamesService.createGame(req.body))
    } catch (error) {
      next(error)
    }
  }

  // async editGame(req, res, next) {
  //   try {
  //     req.body.creatorId = req.
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async deleteGame(req, res, next) {
    try {
      res.send(await gamesService.deleteGame(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}

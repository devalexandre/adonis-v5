// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContext} from "@adonisjs/http-server/build/src/HttpContext";

export default class HomeController {
  async index({response}:HttpContext){
    return response.json({msg:"Welcome !!!"})
  }
}

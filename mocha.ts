require('dotenv').config({ path: './.env' })


import 'reflect-metadata'


(async function startHttpServer() {
  const { Ignitor } = await import('@adonisjs/core/build/src/Ignitor')
  await new Ignitor(__dirname).httpServer().start()
})()


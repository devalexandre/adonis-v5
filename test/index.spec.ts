require('dotenv').config({ path: '.env' })
import { describe , it } from 'mocha'
import supertest from "supertest";
import assert from 'assert'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

describe('GET /', function() {
  it('responds with json', async () => {
    const { body } = await  supertest(BASE_URL).get('/').expect(200)
    console.log("DATA",body)
    assert.deepStrictEqual(body,{msg:"Welcome !!!"})
  });
});


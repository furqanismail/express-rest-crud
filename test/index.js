const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const app = require('../app')

chai.use(chaiHttp)

describe('API ENDPOINT TODO', () => {
    it('GET TODO', (done) => {
        chai.request(app)
            .get('/api/v1/todo')
            .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJmdXJxYWFuIiwiZW1haWwiOiJpc21haWxmdXJxYWFuQGdtYWlsLmNvbSIsImFkZHJlc3MiOiJhbnRhbmcifSwiaWF0IjoxNjMyOTg0MDA1LCJleHAiOjE2MzI5ODQzMDV9.GYxInCeYJKcWcvLed7pnxBOnxlHzljlNciqR8qsucm8')
            .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('Object')
            expect(res.body).to.have.property('status')
            expect(res.body).to.have.property('data')
            expect(res.body.data).to.have.an('array')
            done()
        })
    })
})
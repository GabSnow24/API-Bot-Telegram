const request = require('supertest')
const { app } = require('../../app')
import prismaClient from '../../prisma/index'

describe('Usuario', () => {
    it('Shoud create', async () => {
        const mock_data = {
            name: "Teste Jest",
            email: "teste@jestlabs.com",
            password: "12345",
            cpf: "08128213315145105777",
            phone: 739880100
        }
        const user = await request(app)
        .post('/client')
        .send(mock_data)
        const deleted = await prismaClient.client.delete({
            where:{
                id: user.body.id
            }
        })
        expect(user.status).toBe(200)
    })
})
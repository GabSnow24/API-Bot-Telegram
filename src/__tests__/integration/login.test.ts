const request = require('supertest')
const { app } = require('../../app')
import prismaClient from '../../prisma/index'

describe('Login', () => {
    it('Shoud login', async () => {
        const mock_data = {
            name: "Teste Jest",
            email: "teste@jestlab.com",
            password: "12345",
            cpf: "081282133151451051",
            phone: 739880100
        }
        const user = await request(app)
        .post('/client')
        .send(mock_data)
        const login = await request(app)
            .post('/login')
            .send({
                email: mock_data.email,
                senha: mock_data.password
            })
        const deleted = await prismaClient.client.delete({
            where:{
                id: user.body.id
            }
        })
        expect(login.status).toBe(200)
    })
})
const request = require('supertest')
const { app } = require('../../app')
import { JsonWebTokenError } from 'jsonwebtoken'
import prismaClient from '../../prisma/index'
import createNewToken, { verifyToken } from '../../utils/token'

describe('Token', () => {
    it('Shoud return token', async () => {
        const mock_data = {
            userId: "213123123120"
        }
        const token = await createNewToken({userID:mock_data.userId})
        expect(token).toContain("ey")
    })
    it('Shoud verify token', async () => {
        const mock_data = {
            userId: "213123123120"
        }
        const token = await createNewToken({userID:mock_data.userId})
        const verify_token = await verifyToken(token)
        expect(verify_token.userID).toContain('213123123120')
    })
})
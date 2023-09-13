import { OpenAI } from 'openai'
import 'dotenv/config'

export const openai = new OpenAI({
    apiKey: process.env.KEY_OPENAI,
})
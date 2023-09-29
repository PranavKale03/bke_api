import dotenv from 'dotenv';
dotenv.config();

const Reset = '\x1b[0m';
const FgRed = '\x1b[31m';
const FgGreen = '\x1b[32m';
const FgYellow = '\x1b[33m';

var APP_ENV = process.env.APP_ENV.trim()
let API_HOST = ''
let MONGO_DATABASE_URL = ''

//SETTING BACKEND URL
switch (APP_ENV) {
    case "local":
        console.log('connecting to local api')
        API_HOST = 'http://localhost:4242'
        MONGO_DATABASE_URL = 'mongodb+srv://admin:admin123@bke.7w02svs.mongodb.net/test?retryWrites=true&w=majority'
        break;
    case "dev":
        console.log('connecting to dev api')
        API_HOST = 'https://bke-dev.vercel.app'
        MONGO_DATABASE_URL = 'mongodb+srv://admin:admin123@bke.7w02svs.mongodb.net/dev?retryWrites=true&w=majority'
        break;
    case "prod":
        console.log('connecting to prod api')
        API_HOST = 'https://bke-prev.vercel.app/'
        MONGO_DATABASE_URL = 'mongodb+srv://admin:admin123@bke.7w02svs.mongodb.net/prod?retryWrites=true&w=majority'
        break;
    default:
        console.log('connecting to default api')
        API_HOST = 'https://bke-dev.vercel.app'
        MONGO_DATABASE_URL = 'mongodb+srv://admin:admin123@bke.7w02svs.mongodb.net/test?retryWrites=true&w=majority'
        break;
}

console.log(FgYellow, API_HOST, Reset)
console.log(FgYellow, MONGO_DATABASE_URL, Reset)

let API_VERSION = 'api/v1'

export {
    APP_ENV,
    API_VERSION,
    MONGO_DATABASE_URL,
}
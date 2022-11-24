require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    dbHost : process.env.DB_HOST,
    dbUser : process.env.DB_USER,
    dbPassword : process.env.DB_PASSWORD || '',
    dbPort : process.env.DB_PORT || 3306,
    dbName : process.env.DB_NAME
}

module.exports = { config };
require('dotenv').config();

module.exports = {
  host: process.env.HOST,
  dialect: process.env.DB_PROVIDER,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  define: {
    underscore: true,
  },
};

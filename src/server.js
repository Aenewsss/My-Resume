require('dotenv').config({ path: process.env.NODE_ENV == 'dev' ? '.env.dev' : '.env' });

const app = require('./app');

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is at ${process.env.MAIN_URL}${PORT}`));
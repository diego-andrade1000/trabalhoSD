const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3332;

app.listen(PORT, () => {console.log(`server running on port ${PORT}`)})
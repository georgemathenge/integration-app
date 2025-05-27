const app = require('./src/app');
require('dotenv').config();
const serverless = require('serverless-http');  // Needed for Vercel

PORT = process.env.PORT || 4007
// module.exports.handler = serverless(app);  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

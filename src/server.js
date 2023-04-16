import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRoute from './route/web';
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000;

//setup View Engine
configViewEngine(app);
//initWebRoute
initWebRoute(app);




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
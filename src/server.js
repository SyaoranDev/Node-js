import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRoute from './route/web';
// import connection from './config/connectDB' 

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup View Engine
configViewEngine(app);
//initWebRoute
initWebRoute(app);




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
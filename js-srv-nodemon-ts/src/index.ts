import express from 'express'
import { headerTypes, headerValues } from './configs/corsConfigs';



const app  = express();
const port = 5000;

app.use(express.json())                         // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(function(_req, res, next) {
  res.header(headerTypes.acaOrigin,      headerValues.acaOrigin); 
  res.header(headerTypes.acaHeaders,     headerValues.acaHeaders); 
  res.header(headerTypes.acaMethods,     headerValues.acaMethods); 
  res.header(headerTypes.acaCredentials, headerValues.acaCredentials); 
  
  next();
});


app.post('/', async (_req, res) => {  
  res.send('Template ready');
});


app.listen(port, () => console.log(`Running on port ${port}`));

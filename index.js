const express = require('express');
const app = express();
const { palabraAlreves } = require('./function/index');
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.get('/iecho', palabraAlreves);//iecho?text=test

app.listen(port,()=>{
    console.log(`listening... ${port}`);
})
const express = require('express');
const app = express();
const { palabraAlreves } = require('./function/index');
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.get('/iecho', palabraAlreves);//iecho?text=test

app.listen(port,()=>{
    console.log(`listening... ${port}`);
})
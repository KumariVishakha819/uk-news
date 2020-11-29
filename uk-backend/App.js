const express = require('express');

const app = express();
var cors = require('cors')
app.use(cors())
const data= require('./Category.json');
app.get('/api/categories/:authToken', (req, res) => {
    if(req.params.authToken == '6929e4f32c84416aafb7717803dafd48')
    res.status(200).send(data.categories);
    else{
        res.status(404).send("Please provide valid app token")
    }
})

const port = process.env.PORT || 9090;

app.listen(port, () => { console.log(`listening on port ${port}`) })
const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://jhonatas:Jh0nnMong0@cluster0-p3mkb.mongodb.net/myweek10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json())

app.post('/', (request, response) => {
    console.log(request.body)
    return response.json({        
        message: "Hello JHON"
    })
})

app.listen(4545)
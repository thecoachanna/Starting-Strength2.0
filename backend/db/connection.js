const mongoose = require('mongoose')

const mongoURI = 'mongodb://localhost:27017/starting-strength'

mongoose.connect(mongoURI, {
    
})
.then(instance => {
    console.log(`connected on ${instance.connections[0].name }`)
})
.catch(err => console.log(`Got an error see details, ${err}`))


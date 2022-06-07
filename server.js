const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const mushroom = {
    'yellow morel': {
        'family': 'Morchellaceae',
        'genus': 'Morchella',
        'species': 'americana',
        'season': 'spring',
        'habitat': 'riparian',
        'edible': true,
        'flavor': 'earthy',
        'trees': ['cottonwood', 'ash', 'boxelder']
    },
    'porcini': {
        'family': 'Boletaceae',
        'genus': 'Boletus',
        'species': 'rubriceps',
        'season': 'summer',
        'habitat': 'conifer forest',
        'edible': true,
        'flavor': 'nutty',
        'trees': ['spruce', 'fir']
    },
    'hawks wing': {
        'family': 'Bankeraceae',
        'genus': 'Sarcodon',
        'species': 'imbricatus',
        'season': 'summer',
        'habitat': 'conifer forest',
        'edible': true,
        'flavor': 'savory',
        'trees': ['spruce', 'fir']
    },
    'unknown': {
        'family': 'unknown',
        'genus': 'unknown',
        'species': 'unknown',
        'season': 'unknown',
        'habitat': 'unknown',
        'edible': 'unknown',
        'flavor': 'unknown',
        'trees': 'unknown'
    }
}



app.get('/', (requst, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const mushroomName = request.params.name.toLowerCase()
    if(mushroom[mushroomName]){
        response.json(mushroom[mushroomName])
    }else {
        response.json(mushroom[unknown])
    }
  
})

app.listen(process.env.port || PORT, (request, response) => {
    console.log(`The server is on port ${PORT}.`)
})
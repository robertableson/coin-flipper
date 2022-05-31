const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

app.get('/api/heads-or-tails/', (request, response) => {
    const result = Math.random() >= 0.5 ? 'heads' : 'tails'
    response.json(result)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
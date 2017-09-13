import express from 'express'
import bodyParser from 'body-parser'
import fetch from 'node-fetch'


const getAnswer = async () => {
  try {
    const url = 'https://yesno.wtf/api'
    const res = await fetch(url)
    const json = await res.json()
    return json
  } catch (error) {
    return {
      error: error.message
    }
  }
}

const app = express()

app.use(bodyParser.json())

app.get('/', async (req, res) => {
  const answer = await getAnswer()
  res.send(answer)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

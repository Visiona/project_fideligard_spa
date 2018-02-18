require('es6-promise').polyfill
require('isomorphic-fetch')
require('dotenv').config()
const express = require('express')
const app = express()
const QUANDL_API_KEY = process.env.QUANDL_API_KEY
const baseUrl = 'https://www.quandl.com/api/v3/datatables/WIKI/PRICES'


app.set('port', (process.env.PORT || 3001))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.use(function(req, res, next) {
  res.setHeader('charset', 'utf-8')
  next()
})

// Extract checing status of the response
function checkStatus(response) {
  if (!response.ok) {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }

  return response
}

function parseJSON(response) {
  return response.json()
}

app.get('/api/fideligard', (req, res, next) => {
  console.log('Requesting Stock Data from Quandl...')
  debugger
  const dateParam = req.query.date
  const params = dateParam ? `&date=${dateParam}` : ''// &date=${dateParam}
  console.log(`here is our url: ${baseUrl}?api_key=${QUANDL_API_KEY}${params}`)
  fetch(`${baseUrl}?api_key=${QUANDL_API_KEY}${params}`)
                   // ?api_key=-WZZxS3RbGQsVNhKjz3s&date=1999-12-10
  .then(checkStatus)
  .then(parseJSON)
  .then((json) => {
      res.json(json)
  })
  .catch((error) => {
    next(error)
  })
})

app.get('/', (req, res) => {
  res.send('Hello to FIdeligard')
})

function errorHandler(err, req, res, next) {
  console.error(`Error: ${err.stack}`)
  res.status(err.response ? err.response.status : 500)
  res.json({error: err.message})
}

app.use(errorHandler)


app.listen(app.get('port'), () => {
  console.log(`Find the server at http://localhost:${app.get('port')}/`)
})

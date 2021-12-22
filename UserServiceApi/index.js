const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json(
	[
		{
			name: 'Nguyen Dinh Sang',
			email: 'nguyendinhsang9199@gmail.com'
		}
	]
  )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
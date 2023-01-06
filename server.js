// [REQUIRE] //
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const path = require('path')


// [REQUIRE] Personal // Other // API // Pages //
const api_instagram = require('./s-api/instagram')
const config = require('./s-config')

const p_gallery = require('./s-routes/pages/gallery')


// [EXPRESS] //
const app = express()
const server = http.createServer(app)


// [MONGOOSE-CONNECTION] //
mongoose.connect(
	config.MONGO_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	},
	(err, connected) => {
		if (connected) { console.log('Mongoose Connected to DB') }
		else { console.log(`Mongoose Connection Error --> ${err}`) }
	}
)


// [USE] // Default Stuff // Set static Folder // Rate-Limiter //
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


// [USE][ROUTE][API] //
app.use('/pages/gallery', p_gallery)


// [INSTAGRAM-API] Loop every 30 seconds //
api_instagram.intializeInstagramAPI()
setInterval(() => { api_instagram.intializeInstagramAPI() }, 30000)


// [HEROKU] Set Static Folder for Heroku //
if (process.env.NODE_ENV == 'production') {
	app.use(express.static('client/dist'))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
	})
}


// [PORT + LISTEN] //
const port = config.PORT
server.listen(port, () => { console.log(`Server Running on Port: ${port}`) })

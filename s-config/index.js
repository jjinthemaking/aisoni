// [REQUIRE] //
require('dotenv').config()


// [EXPORT] //
module.exports = {
	// [APP] //
	NODE_ENV: process.env.NODE_ENV || 'development',

	// [URL] //
	BASE_URL: process.env.BASE_URL || 'http://localhost:8080',
	SOCKET_BASE_URL: process.env.BASE_URL || 'http://localhost:5000',

	// [PORT] //
	PORT: process.env.PORT || 5000,
	
	// [MONGODB] //
	MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/aisoni',

	// [INSTAGRAM] //
	instagramAccessToken: process.env.INSTAGRAM_ACCESS_TOKEN || ''
}
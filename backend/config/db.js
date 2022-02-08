const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load config
dotenv.config({ path: 'config.env' });
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.dbPath, {
			dbName: 'mydb',
			useNewUrlParser: true,
			useUnifiedTopology: true,
			// useFindAndModify: true
		})
		console.log('MongoDB Connected!');

	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
}
module.exports = connectDB;



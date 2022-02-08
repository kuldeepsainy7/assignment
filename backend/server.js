const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors')
const dotenv = require('dotenv');
const router = express.Router();
// const logger = require('./logs/logger');
const connectDB = require('./config/db');

const detailRoute = require('./routes/detailRouter');


router.use(express.static(__dirname + "./public/"))

// Load Config
dotenv.config({ path: './config/config.env' });

// DB
connectDB()

app.use(cors())
// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/detail', detailRoute)

app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.send({
		error: {
			status: err.status || 500,
			message: err.message
		}
	});
});

app.listen(PORT, console.log(`Server is running on port ${process.env.PORT}`));



require('dotenv').config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');


// Create Express App Instance
const app = express();

// ==========  Import Application routers  ==========

const DuaRouter = require('./src/routes/api')

//    ==========    MIDDLEWARE     ==========

// ==========  Base Static File Provider Path  ========== 
app.use(express.static(path.join(__dirname, './public')));

// ==========  Request Limiting For Security Purpose  ==========
const limiter = rateLimit({
	windowMs: 30 * 60000,
	max: 5000,
	message: 'Too many requests from this IP, please try again later',
});

app.use(limiter);

// ========== Cross Origin Resource Sharing Enable  ==========
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10kb' }));


// ==========  Prevent NoSQL Query Injection  ==========


// ==========  CORS POLICY  ==========
app.use((req, res, next) => {
	res.setHeader('Content-Security-Policy', 'script-src * ');
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

// ==========  Request Visualizing  ==========
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('tiny'));
	console.log('Morgan enabled...');
}



// ==========  ROUTE HANDLERS  ==========
// Base routing url for API
app.use('/api/v1', DuaRouter);


//  ==========  Invalid Route Handler  ==========
app.all('*', (req, res, next) => {
	const err = new Error(`No route found at ${req.originalUrl}`);
	if (!err.statusCode) err.statusCode = 404;
	next(err);
});

//  ==========  GLOBAL ERROR MIDDLEWARE  ==========
app.use((err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	res.status(err.statusCode).send({ message: err.message });
});

module.exports = app;
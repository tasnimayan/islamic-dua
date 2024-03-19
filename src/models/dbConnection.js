const path = require('path');
const sqlite3 = require('sqlite3').verbose();


const dbPath = path.resolve(__dirname, 'dua_main.sqlite');

// Create a new SQLite database connection
const db = new sqlite3.Database(dbPath, (err) => {
	if (err) {
			console.error('Error connecting to the database:', err.message);
	} else {
			console.log('Connected to the database');
	}
});

module.exports = db;
'use strict'

// <Define a model using bookshelf that describes a song object, as well as 
// static methods for getting one or all songs from the db>
const { bookshelf } = require('../db/database');
const Song = bookshelf.Model.extend({
	tableName: 'Song'
},
{
	getAllSongs: function() {
		console.log('Get all songs model')
		return this.forge()
		.fetchAll()
		.then( (rows) => {
			return rows
		})
		.catch( (error) => {
			return error
		})
	},
	getOneSong: function(songId) {
		console.log('get one song model')
		return this.forge({songId})
		.fetch()
		.then( (song) => {
			return song
		})
		.catch( (error) => {
			return error
		})
	}
})

// When adding the 'table' property use your old friend DB Browser for SQLite to 
// open up the musichistory db and inspect the tables. Add the appropriate table name for 
// interfacing with the songs collection

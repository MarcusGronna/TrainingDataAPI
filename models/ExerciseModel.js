var mongoose = require('mongoose')

var ExerciseSchema = new mongoose.Schema({
    name: {type: String, required: true},
	primaryMuscleGroup: {type: String, required: true}, 
	secondaryMuscleGroup: String, 
	category: { 
		bodyPart: {type: String, required: true}, 
		type: String 
	}, 
	difficulty: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced']
    }, 
	media: { 
		image: String, 
		video: String 
	}
},
    { 
        collection: 'exercises'
    })

module.exports = mongoose.model('ExerciseModel', ExerciseSchema)
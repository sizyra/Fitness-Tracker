const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day:  {
        type: Date,
        default: () => new Date()
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Exercise Type"
        },

        name:  {
            type: String,
            trim: true,
            required: "Exercise Name"
        },

        distance: {
            type: Number
        },

        duration: {
            type: Number,
            required: "Duration (minutes)"
        },

        weight: {
            type: Number
        },

        sets: {
            type: Number
        },

        reps: {
            type: Number
        }
    }]},
    {
    toJSON: {
        virtuals: true
    }
});

WorkoutSchema.virtual("durations").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
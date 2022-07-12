const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    title: {
        type: String
    },
    tag: {
        type: String
    },
    image: {
        type: String
    },
    lecturer: {
        type: String
    },
    lessonNumber: {
        type: Number
    },
    duration: {
        type: String
    },
    shortDescription: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
}, {
    timestamps: true,
});

module.exports = Course = mongoose.model('Course', courseSchema);
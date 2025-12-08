const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema(
{
title: {
type: String,
required: [true, 'Title is required'],
trim: true,
},
description: {
type: String,
default: '',
},
due_date: {
type: Date,
validate: {
validator: function (v) {
// allow undefined/null, but if provided it must be a valid date
if (v === null || v === undefined) return true;
return !isNaN(new Date(v).getTime());
},
message: (props) => `${props.value} is not a valid date`,
},
},
completed: {
type: Boolean,
default: false,
},
},
{ timestamps: true }
);


module.exports = mongoose.model('Task', TaskSchema);

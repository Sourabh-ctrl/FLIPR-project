import { Schema, model } from 'mongoose';

const clientSchema = Schema({
  name: { type: String, required: true }, // [cite: 38, 87]
  description: { type: String, required: true }, // [cite: 37, 88]
  designation: { type: String, required: true }, // e.g., CEO [cite: 39, 89]
  image: { type: String, default: null }, // [cite: 36, 86]
}, { timestamps: true });

export default model('Client', clientSchema);
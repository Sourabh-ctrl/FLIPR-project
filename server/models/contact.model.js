import { Schema, model } from 'mongoose';

const contactSchema = Schema({
  fullName: { type: String, required: true }, // [cite: 57, 92]
  email: { type: String, required: true }, // [cite: 58, 93]
  mobile: { type: String, required: true }, // [cite: 59, 94]
  city: { type: String, required: true }, // [cite: 60, 95]
}, { timestamps: true });

export default model('Contact', contactSchema);
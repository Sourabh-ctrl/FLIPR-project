import { Schema, model } from 'mongoose';

const contactSchema = Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  city: { type: String, required: true },
}, { timestamps: true });

export default model('Contact', contactSchema);
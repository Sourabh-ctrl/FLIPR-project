import { Schema, model } from 'mongoose';

const clientSchema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  designation: { type: String, required: true },
  image: { type: String, default: null },
}, { timestamps: true });

export default model('Client', clientSchema);
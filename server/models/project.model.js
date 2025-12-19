import { Schema, model } from 'mongoose';

const projectSchema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }, 
  image: { type: String, required: true },
}, { timestamps: true });

export default model('Project', projectSchema);


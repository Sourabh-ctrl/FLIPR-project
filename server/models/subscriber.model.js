import { Schema, model } from 'mongoose';

const subscriberSchema = Schema({
  email: { type: String, required: true, unique: true }, // [cite: 71, 97]
}, { timestamps: true });

export default model('Subscriber', subscriberSchema);
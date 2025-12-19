import { Schema, model } from 'mongoose';

const subscriberSchema = Schema({
  email: { type: String, required: true, unique: true },
}, { timestamps: true });

export default model('Subscriber', subscriberSchema);
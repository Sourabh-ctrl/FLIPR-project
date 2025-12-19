import { Router } from 'express';
const router = Router();
import Project from '../models/project.model.js';
import Client from '../models/client.model.js';
import Contact from '../models/contact.model.js';
import Subscriber from '../models/subscriber.model.js';

router.get('/', (req, res) => res.json({ message: 'API OK' }));

router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/clients', async (req, res) => {
  try {
    const clients = await Client.find({});
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/contact', async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/subscribe', async (req, res) => {
  try {
    const subscriber = await Subscriber.create({ email: req.body.email });
    res.status(201).json(subscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/admin/projects', async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/admin/clients', async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/admin/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/admin/subscribers', async (req, res) => {
  try {
    const subscribers = await Subscriber.find({}).sort({ createdAt: -1 });
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
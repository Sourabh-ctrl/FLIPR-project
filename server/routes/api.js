import { Router } from 'express';
const router = Router();
import Project from '../models/project.model.js';
import Client from '../models/client.model.js';
import Contact from '../models/contact.model.js';
import Subscriber from '../models/subscriber.model.js';

// --- LANDING PAGE ROUTES ---

// API health check
router.get('/', (req, res) => res.json({ message: 'API OK' }));

// Fetch all projects for "Our Project" section [cite: 11]
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch all clients for "Happy Clients" section [cite: 34]
router.get('/clients', async (req, res) => {
  try {
    const clients = await Client.find({});
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Submit Contact Form [cite: 55, 61]
router.post('/contact', async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Subscribe to Newsletter [cite: 71]
router.post('/subscribe', async (req, res) => {
  try {
    const subscriber = await Subscriber.create({ email: req.body.email });
    res.status(201).json(subscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// --- ADMIN PANEL ROUTES ---

// Add new Project from Admin Panel [cite: 78]
router.post('/admin/projects', async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add new Client info from Admin Panel [cite: 85]
router.post('/admin/clients', async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// View all Contact Form responses in Admin Panel [cite: 90]
router.get('/admin/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// View all Subscribed Emails in Admin Panel [cite: 96]
router.get('/admin/subscribers', async (req, res) => {
  try {
    const subscribers = await Subscriber.find({}).sort({ createdAt: -1 });
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
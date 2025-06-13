require('dotenv').config();
const express = require('express');
const cors = require('cors');

const chatRoute = require('./routes/chat');
const propertyRoute = require('./routes/properties');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/chat', chatRoute);
app.use('/api/properties', propertyRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

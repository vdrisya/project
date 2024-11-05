const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const dotenv = require('dotenv');
const projectRoutes = require('./routes/projectRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const adminRoutes = require('./routes/adminRoutes');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect(process.env.mongoDb_URL).then(()=>{
    console.log("successfull");
});


app.use('/api/auth', projectRoutes);
app.use('/api/mentor', mentorRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/student', studentRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));

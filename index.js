const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/router');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', employeeRoutes);

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});

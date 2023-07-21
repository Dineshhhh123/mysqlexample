const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/controller');

router.get('/employees', employeeController.getAllEmployees);
router.get('/employees/:id', employeeController.getEmployeeById);
router.delete('/employees', employeeController.deleteEmployeeById);
router.post('/employees', employeeController.insertEmployee);
router.put('/employees', employeeController.updateEmployee);

module.exports = router;

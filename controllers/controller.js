const Employee = require('../models/model');

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.getAllEmployees();
    res.send(employees);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error reading employees');
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await Employee.getEmployeeById(id);
    res.send(employee);
  } catch (err) {
    console.log(err);
    res.status(404).send('Employee not found');
  }
};

const deleteEmployeeById = async (req, res) => {
  try {
    const id = req.body.id;
    await Employee.deleteEmployeeById(id);
    res.send('Deleted successfully.');
  } catch (err) {
    console.log(err);
    res.status(500).send('Error deleting employee');
  }
};

const insertEmployee = async (req, res) => {
    
    const { Name, EmpCode , Salary } = req.body;
    console.log(Name)
  try {

    const emp = { 
        Name, 
        EmpCode, 
        Salary
    }
    
    
    console.log(emp)
    console.log(emp.Name);
    const message = await Employee.insertEmployee(emp);
    console.log(message);
    res.send('inserted succesfully');
  } catch (err) {
    console.log(err);
    res.status(500).send('Error inserting employee');
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { EmpID,Name, EmpCode , Salary } = req.body;
    const emp = {
      EmpID, 
      Name, 
      EmpCode, 
      Salary
  }
    const message = await Employee.updateEmployee(emp);
    res.send(message);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error updating employee');
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  deleteEmployeeById,
  insertEmployee,
  updateEmployee
};

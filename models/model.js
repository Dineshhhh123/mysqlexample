const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Dinesh@123',
  database: 'employeedb',
  multipleStatements: true
});

db.connect((err) => {
  if (err)
    console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
  else
    console.log('DB connection succeeded.');
});

const Employee = {};

Employee.getAllEmployees = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM emp', (err, rows, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

Employee.getEmployeeById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM emp WHERE EmpID = ?', [id], (err, rows, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

Employee.deleteEmployeeById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM emp WHERE EmpID = ?', [id], (err, rows, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve('Deleted successfully.');
      }
    });
  });
};

Employee.insertEmployee = (emp) => {
  return new Promise((resolve, reject) => {
    var sql = "INSERT INTO emp (EmpID, Name, EmpCode , Salary) VALUES (?, ?, ?, ?)";
    console.log(emp.Name)
    db.query(sql, [emp.EmpID,emp.Name, emp.EmpCode, emp.Salary], (err, result) => {
        if (err) {
          console.error('Error creating employee: ' + err);
          return reject(err);
        }
        resolve(result.insertId);
      });
      })
    
  };


Employee.updateEmployee = (emp) => {
  const sql = 'UPDATE emp SET  Name=?, EmpCode=?, Salary=? WHERE EmpID=?';
  return new Promise((resolve, reject) => {
    
    db.query(sql, [emp.Name, emp.EmpCode, emp.Salary,emp.EmpID], (err, result) => {
      console.log(result)
      if (err) {
        console.error('Error updating employee: ' + err);
        return reject(err);
      }
      if (result.affectedRows > 0) {
        resolve('Employee updated successfully');
      } else {
        reject({ message: 'Employee not found' });
      }
    });
  });
};

module.exports = Employee;

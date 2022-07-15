let url = "http://dummy.restapiexample.com/api/v1";
const axios = require("axios");

// remember try diferent times because dummy api sometimes fails

async function getAllEmployees () {
  try {
    const response = await axios.get(`${url}/employees`);
    return response.data;
  } catch (error) {
      console.error(error);
  }
};

async function getEmployeeById (employee_id){
  try {
    const response = await axios.get(
      `${url}/employee/${employee_id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }


};

async function createEmployee (name , salary, age) {
  try {
    const body = {
      name,
      salary,
      age
    }
    const response = await axios.post(`${url}/create`,body);
    return response.data;
  } catch (error) {
    console.error(error,'error');
  }
};

const updateEmployee = async (name, salary, age , employee_id) => {
  try {

    const body = {
      name,
      salary,
      age,
      employee_id
    }

    const response = await axios.put(
      `${url}/update/${employee_id}`,
      body
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};


async function eliminate (employee_id) {
  try {
    const response = await axios.delete(
      `${url}/delete/${employee_id}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// try one by one so the request to dummy api does not fail

exports.handler = async function(event) {
  const getEmployees = await getAllEmployees();
  // const employeeById = await getEmployeeById(5);
  // const employeeCreated = await createEmployee("thomas", "1500", "25");
  // const updateEmployees = await updateEmployee("carlos", "2000", "40", 5);
  // const deleteEmployee = await eliminate(5);
  console.log(JSON.stringify(getEmployees), 'All employees');
  // console.log(JSON.stringify(employeeById), 'Employee By ID');
  // console.log(JSON.stringify(employeeCreated), 'Employee Created');
  // console.log(JSON.stringify(updateEmployees), 'Employee Updated');
  // console.log(JSON.stringify(deleteEmployee), 'Employee Eliminated');
}

// remember try diferent times because dummy api sometimes fails

// UNCOMMENT TO TEST LOCALLY
let event = JSON.parse("{	\"skipNulls\": 1 }");
exports.handler(event);
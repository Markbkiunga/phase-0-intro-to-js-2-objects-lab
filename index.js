// Write your solution in this file!
const employee = {
  name: "Mark",
  streetAddress: "Jacaranda 123",
};
console.log(employee);

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
  let newObject = {
    ...employeeObject,
    [key]: value,
  };
  console.log(newObject);
  return newObject;
}
// updateEmployeeWithKeyAndValue(employee, "lastName", "Brian");

function destructivelyUpdateEmployeeWithKeyAndValue(
  employeeObject,
  key,
  value
) {
  employeeObject[key] = value;
  console.log(employeeObject);
  return employeeObject;
}
// console.log(employee);
// destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Brian");

function deleteFromEmployeeByKey(employeeObject, key) {
  let newEmployee = { ...employeeObject };
  delete newEmployee[key];
  console.log(newEmployee);
  return newEmployee;
}
// deleteFromEmployeeByKey(employee, "streetAddress");

function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
  delete employeeObject[key];
  console.log(employeeObject);
  return employeeObject;
}
destructivelyDeleteFromEmployeeByKey(employee, "name");

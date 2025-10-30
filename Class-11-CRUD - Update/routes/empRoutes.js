import express from "express";
import fs from "fs/promises";
import path from "path";

const router = express.Router();

// Define file path for employees data
const dataFilePath = path.resolve("data", "employees.json");

// Helper: Read employees from file
async function getEmployees() {
  try {
    const data = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading employee file:", error);
    return [];
  }
}

// Helper: Save employees to file
async function saveEmployees(employees) {
  await fs.writeFile(dataFilePath, JSON.stringify(employees, null, 2));
}

/*
Update Employee API
--------------------
URL: http://127.0.0.1:8080/emp/update/:eid
Method: PUT
Body: { ename?, esal?, loc? }
*/
router.put("/update/:eid", async (req, res) => {
  console.log("Inside PUT Method");

  const empId = req.params.eid;
  const newData = req.body;

  let employees = await getEmployees();

  // Find employee by ID
  const index = employees.findIndex((emp) => emp.eid == empId);
  if (index === -1) {
    return res.status(404).json({ msg: "Employee not found" });
  }

  // Merge existing data with new data
  employees[index] = { ...employees[index], ...newData };

  // Save to file
  await saveEmployees(employees);

  console.log("Updated Employee:", employees[index]);

  return res.status(200).json({
    msg: "Employee updated successfully",
    employee: employees[index],
  });
});

export default router;

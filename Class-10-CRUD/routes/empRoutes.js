import express from "express";
import fs from "fs/promises";
import path from "path";

const router = express.Router();

// Utility functions
const dataFilePath = path.resolve("data", "employees.json");

// Helper to read employees
async function getEmployees() {
  try {
    const data = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return []; // Return empty array if file not found
  }
}

// Helper to save employees
async function saveEmployees(employees) {
  await fs.writeFile(dataFilePath, JSON.stringify(employees, null, 2));
}

/*
  Create
  -------
  Usage: Create new employee
  URL: http://127.0.0.1:8080/emp/create
  Method: POST
  Required Fields: eid, ename, esal, loc
  Access: Public
*/
router.post("/create", async (req, res) => {
  console.log("Inside POST Method");

  const emp = req.body;
  const employees = await getEmployees();

  const existing = employees.find((employee) => employee.eid === emp.eid);
  if (existing) {
    return res.status(400).json({ msg: "Buddy! Employee Already Exists" });
  }

  employees.push(emp);
  await saveEmployees(employees);

  return res.status(200).json({ msg: "New Employee Created Successfully" });
});

export default router;

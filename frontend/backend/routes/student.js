// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/students', async (req, res) => {
  try {
    const newStudent = req.body;
    console.log(req);
    const createdStudent = await studentController.createStudent(newStudent);
    console.log(createdStudent);
    res.status(200).json(createdStudent);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/students', async (req, res) => {
  try {
    const allStudents = await studentController.getAllStudents();
    res.json(allStudents);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/students/:studentId', async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const student = await studentController.getStudentById(studentId);
console.log(student);
    if (!student) {
      res.status(404).json({ error: 'Student not found' });
    } else {
      res.json(student);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/students/:studentId', async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const updatedStudent = req.body;
    console.log(updatedStudent);
    const student = await studentController.updateStudent(studentId, updatedStudent);

    if (!student) {
      res.status(404).json({ error: 'Student not found' });
    } else {
      res.json(student);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/students/:studentId', async (req, res) => {
  try {
    const studentId = req.params.studentId;
    console.log(studentId);
    const deletedStudent = await studentController.deleteStudent(studentId);

    if (!deletedStudent) {
      res.status(404).json({ error: 'Student not found' });
    } else {
      res.json(deletedStudent);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

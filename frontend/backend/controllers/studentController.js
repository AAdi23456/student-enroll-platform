// controllers/studentController.js
const Student = require('../models/student');

class StudentController {
  async createStudent(newStudent) {
    try {
        console.log(newStudent);
      const createdStudent = await Student.create(newStudent);
      return createdStudent;
    } catch (error) {
      throw error;
    }
  }

  async getAllStudents() {
    try {
      const allStudents = await Student.find();
      return allStudents;
    } catch (error) {
      throw error;
    }
  }

  async getStudentById(studentId) {
    try {
      const student = await Student.findById( studentId );
      return student;
    } catch (error) {
      throw error;
    }
  }

  async updateStudent(studentId, updatedStudent) {
    try {
        console.log(updatedStudent);
        const student = await Student.findOneAndUpdate(
            { $or: [{ _id: studentId }, { studentId: studentId }] },
            { $set: updatedStudent },
            { new: true }
      );
      return student;
    } catch (error) {
      throw error
    }
  }

  async deleteStudent(studentId) {
    try {
      const deletedStudent = await Student.findOneAndDelete({ _id:studentId });
      return deletedStudent;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new StudentController();

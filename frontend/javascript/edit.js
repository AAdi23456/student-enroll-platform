// edit.js
document.addEventListener('DOMContentLoaded', () => {
    const editForm = document.getElementById('editForm');
    const apiUrl = 'https://aquamarine-mackerel-coat.cyclic.app/students/';
  
    const getStudentById = async (studentId) => {
      try {
        const response = await fetch(apiUrl + studentId);
        const student = await response.json();
        console.log(student);
        return student;
      } catch (error) {
        console.error('Error fetching student:', error);
        return null;
      }
    };
  
    const fillFormWithData = (student) => {
      document.getElementById('name').value = student.name;
      document.getElementById('major').value = student.major;
      const enrollmentDate = new Date(student.enrollmentDate);
      document.getElementById('enrollmentDate').valueAsDate = enrollmentDate;
  
      // New fields
      
      document.getElementById('gender').value = student.Gender || 'male';
      document.getElementById('phone').value = student.Phone || '';
    };
  
    const updateStudent = async (studentId, updatedData) => {
      try {
        const response = await fetch(apiUrl + studentId, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        });
  
        if (response.ok) {
          alert('Student updated successfully!');
          window.location.href = 'index.html';
        } else {
          console.error('Failed to update student');
        }
      } catch (error) {
        console.error('Error updating student:', error);
      }
    };
  
    // Retrieve the student ID from local storage
    const studentId = JSON.parse(localStorage.getItem('studentId'));
  
    if (studentId) {
      getStudentById(studentId).then((student) => {
        if (student) {
          fillFormWithData(student);
        } else {
          alert('Student not found');
          window.location.href = 'index.html';
        }
      });
  
      editForm.addEventListener('submit', (event) => {
        event.preventDefault();
  
        const updatedData = {
          name: document.getElementById('name').value,
          major: document.getElementById('major').value,
          enrollmentDate: document.getElementById('enrollmentDate').value,
          Phone: document.getElementById('phone').value,
          Gender: document.getElementById('gender').value,
        };
  
        updateStudent(studentId, updatedData);
      });
    } else {
      alert('Student ID not provided');
      window.location.href = 'index.html';
    }
  });
  
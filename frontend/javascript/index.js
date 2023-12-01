// app.js
document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app');
    const apiUrl = 'https://aquamarine-mackerel-coat.cyclic.app/students/';
  
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
    };
  
    const createAddForm = () => {
      const form = document.createElement('form');
      form.innerHTML = `
        <h2>Add New Student</h2>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
  
        <label for="major">Major:</label>
        <input type="text" id="major" name="major" required>

        <label for="Phone">Phone:</label>
        <input type="number" id="Phone" name="Phone" required>
  
        <label for="Gender">Gender:</label>
        <select id="Gender" name="Gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
    
  
        <label for="enrollmentDate">Enrollment Date:</label>
        <input type="date" id="enrollmentDate" name="enrollmentDate" required>
  
        <button type="button" onclick="submitForm()">Submit</button>
        <button type="button" onclick="resetForm()">Cancel</button>
      `;
  
      return form;
    };
  
    const renderStudents = async () => {
      const students = await fetchData();
  
      // Add a form for adding new students
      const addForm = createAddForm();
      appContainer.appendChild(addForm);
  
      const table = document.createElement('table');
      table.classList.add('student-table');
  
      // Header Row
      const headerRow = document.createElement('tr');
      headerRow.innerHTML = `
        <th>Name</th>
        <th>Major</th>
        <th>Phone</th>
        <th>Gender</th>
        <th>Enrollment Date</th>
        <th>Actions</th>
      `;
      table.appendChild(headerRow);
  
      students.forEach((student) => {
        const row = document.createElement('tr');
        const enrollmentDate = new Date(student.enrollmentDate);
        //row.innerHTML=""
        row.innerHTML = `
          <td>${student.name}</td>
          <td>${student.major}</td>
          <td>${student.Phone}</td>
          <td>${student.Gender}</td>
          <td>${enrollmentDate.toISOString().split('T')[0]}</td>
          <td>
            <button onclick="deleteStudent('${student._id}')">Delete</button>
            <button onclick="editStudent('${student._id}')">Edit</button>
          </td>
        `;
  
        table.appendChild(row);
      });
     // appContainer.innerHTML=""
      appContainer.appendChild(table);
    };
  
    window.submitForm = async () => {
      const name = document.getElementById('name').value;
      const major = document.getElementById('major').value;
      const Phone = document.getElementById('Phone').value;
      const Gender = document.getElementById('Gender').value;
      const enrollmentDate = document.getElementById('enrollmentDate').value;
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, major,Phone:Phone,Gender:Gender, enrollmentDate }),
        });
  
        if (response.ok) {
          const newData = await fetchData();
          appContainer.innerHTML=""
          renderStudents(newData);
        } else {
          console.error('Failed to add new student');
        }
      } catch (error) {
        console.error('Error adding new student:', error);
      }
    };
    window.resetForm = () => {
        document.getElementById('name').value = '';
        document.getElementById('major').value = '';
        document.getElementById('Phone').value = '';
        document.getElementById('Gender').value = 'male'; // Set default value
        document.getElementById('enrollmentDate').value = '';
      
        // Additional logic for resetting other form fields if needed
      
        // Focus on the first input field after resetting
        document.getElementById('name').focus();
      };
    window.deleteStudent = async (studentId) => {
      try {
        const response = await fetch(apiUrl + studentId, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          const newData = await fetchData();
          appContainer.innerHTML=""
          renderStudents(newData);
        } else {
          console.error('Failed to delete student');
        }
      } catch (error) {
        console.error('Error deleting student:', error);
      }
    };
  
    window.editStudent = async (studentId) => {
      localStorage.setItem('studentId', JSON.stringify(studentId));
      window.location.href = 'edit.html';
    };
  
    renderStudents();
  });
  
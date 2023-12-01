# Student Records API

This API manages student records, providing endpoints for creating, reading, updating, and deleting student information.

## Endpoints

### 1. Create Student

- **Endpoint**: `POST /students`
- **Description**: Adds a new student to the records.
- **Request Body**: JSON object with the following properties:
  - `name` (String, required): Student's name.
  - `major` (String, required): Student's major.
  - `enrollmentDate` (Date, required): Student's enrollment date.
  - `Phone` (String, required): Student's phone number.
  - `Gender` (String, required): Student's gender.

### 2. Read Students

- **Endpoint**: `GET /students`
- **Description**: Retrieves the list of all students.
- **Response**: JSON array containing student objects with their details.

### 3. Read Specific Student

- **Endpoint**: `GET /students/:studentId`
- **Description**: Retrieves the details of a specific student.
- **Parameters**:
  - `studentId` (String, required): Unique identifier of the student.
- **Response**: JSON object containing the details of the specified student.

### 4. Update Student

- **Endpoint**: `PUT /students/:studentId`
- **Description**: Updates the details of an existing student.
- **Parameters**:
  - `studentId` (String, required): Unique identifier of the student.
- **Request Body**: JSON object with the properties to be updated.
- **Response**: JSON object containing the updated details of the student.

### 5. Delete Student

- **Endpoint**: `DELETE /students/:studentId`
- **Description**: Removes a student from the records.
- **Parameters**:
  - `studentId` (String, required): Unique identifier of the student.
- **Response**: JSON object containing the details of the deleted student.

## Usage

- Use the provided endpoints to interact with the student records.
- Ensure proper JSON format for request and response bodies.
- Handle errors by checking the HTTP status codes in the responses.
- Secure the API endpoints as needed based on the application's requirements.


// Import 'Buffer' - it's a global object in Node.js, so no explicit import needed

// ---------------------- 1. Create a Buffer ----------------------

// Create a buffer of size 256 bytes

let buffer = Buffer.alloc(256);

// Define a student object
let student1 = {
    id: 1,
    name: "Thananya",
    age: 20,
    grade: "A"
};

// Convert student object to JSON string
let studentStr = JSON.stringify(student1);

// Write student JSON string to buffer, returns number of bytes written
let bytesWritten = buffer.write(studentStr, "utf8");

// Display how many bytes were written
console.log("Bytes written to buffer:", bytesWritten);

// ---------------------- 2. Write Data to Buffer ----------------------

// Show buffer content as a string
console.log("Buffer content as string:", buffer.toString("utf8", 0, bytesWritten));

// ---------------------- 3. Read Data from Buffer ----------------------

// Read back data from buffer, slice only valid bytes
let bufferData = buffer.toString("utf8", 0, bytesWritten);

// Parse JSON string back to object
let parsedStudent = JSON.parse(bufferData);

// Display parsed student info in readable format
console.log("Parsed Student Data:");
console.log("ID:", parsedStudent.id);
console.log("Name:", parsedStudent.name);
console.log("Age:", parsedStudent.age);
console.log("Grade:", parsedStudent.grade);

// ---------------------- 4. Buffer Operations ----------------------

// Define another student
let student2 = {
    id: 2,
    name: "Rahul",
    age: 22,
    grade: "B"
};

// Convert second student to JSON string
let student2Str = JSON.stringify(student2);

// Append new student if there is space in buffer
let bytesWritten2 = buffer.write(student2Str, bytesWritten, "utf8");
console.log("\nAppended second student. Total bytes in buffer:", bytesWritten + bytesWritten2);

// Slice buffer to only read first student data
let firstStudentData = buffer.toString("utf8", 0, bytesWritten);
console.log("\nFirst Student Slice:", firstStudentData);

// Copy data to another buffer
let bufferCopy = Buffer.alloc(256);
buffer.copy(bufferCopy, 0, 0, bytesWritten);
console.log("Copied buffer content:", bufferCopy.toString("utf8", 0, bytesWritten));

// ---------------------- 5. Encoding & Decoding ----------------------

// Show buffer data in UTF-8
console.log("\nBuffer content in utf8:", buffer.toString("utf8", 0, bytesWritten));

// Show buffer data in ASCII
console.log("Buffer content in ascii:", buffer.toString("ascii", 0, bytesWritten));

// Show buffer data in Base64
console.log("Buffer content in base64:", buffer.toString("base64", 0, bytesWritten));

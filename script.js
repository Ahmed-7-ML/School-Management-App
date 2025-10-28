const API_URL = "http://127.0.0.1:8000";

// Load students on page load
document.addEventListener("DOMContentLoaded", getStudents);

function getStudents() {
    fetch(`${API_URL}/students`)
        .then(res => res.json())
        .then(data => {
            const students = data["All Students"];
            const table = document.getElementById("studentsTable");
            table.innerHTML = "";
            students.forEach(std => {
                table.innerHTML += `
                    <tr>
                        <td>${std.id}</td>
                        <td>${std.name}</td>
                        <td>${std.grade}</td>
                        <td><button onclick="deleteStudent(${std.id})">Delete</button></td>
                    </tr>
                `;
            });
        });
}

function addStudent() {
    const student = {
        id: Number(document.getElementById("studentId").value),
        name: document.getElementById("studentName").value,
        grade: Number(document.getElementById("studentGrade").value)
    };

    fetch(`${API_URL}/students`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(student)
    })
    .then(res => res.json())
    .then(() => getStudents());
}

function updateStudent() {
    const studentId = Number(document.getElementById("studentId").value);

    const updatedStudent = {
        id: studentId,
        name: document.getElementById("studentName").value,
        grade: Number(document.getElementById("studentGrade").value)
    };

    fetch(`${API_URL}/students/${studentId}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updatedStudent)
    })
    .then(res => res.json())
    .then(() => getStudents());
}

function deleteStudent(id) {
    fetch(`${API_URL}/students/${id}`, { method: "DELETE" })
    .then(res => res.json())
    .then(() => getStudents());
}

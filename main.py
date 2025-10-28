from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="School Management App")

app.add_middleware(
    CORSMiddleware, 
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers = ["*"]
)

class Student(BaseModel):
    id: int
    name: str
    grade : int

# Data Storage
students = [
    Student(id=1, name='Ahmed Amer', grade=5),
    Student(id=2, name='Yousef Omar', grade=3),
    Student(id=3, name='Zeyad Akram', grade=2)
]

@app.get("/")
async def home():
    return {"Meassage": "Welcome in School"}

# List all students
@app.get("/students")
async def get_students():
    return {"All Students": students}

# Add new student
@app.post("/students")
async def add_student(New_Student: Student):
    students.append(New_Student)
    return {"Studnet Added Successfully"}

@app.put("/students/{student_id}")
async def update_student(student_id: int, updated_student: Student):
    for idx, std in enumerate(students):
        if std.id == student_id:
            students[idx] = updated_student
            return {"Student Updated Successfully": students[idx]}
    return {"Message": "Student Not Found"}


@app.delete("/students/{student_id}")
def delete_student(student_id: int):
    for index, student in enumerate(students):
        if student.id == student_id:
            del students[index]
            return {"message": "Student deleted"}
    return {"error": "Student not found"}




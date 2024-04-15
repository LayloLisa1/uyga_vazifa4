let studentsList = new Map();
function createStudent(name, info) {
  if (!studentsList.has(name)) {
    studentsList.set(name, info);
    return [...studentsList.values()];
  } else {
    return "Bu nom bilan foydalanuvchi allaqachon mavjud.";
  }
}
function readStudent(name) {
  if (studentsList.has(name)) {
    return studentsList.get(name);
  } else {
    return "Foydalanuvchi topilmadi";
  }
}
function updateStudent(name, info) {
  if (studentsList.has(name)) {
    studentsList.set(name, info);
    return studentsList.get(name);
  } else {
    return "Foydalanuvchi topilmadi";
  }
}
function deleteStudent(name) {
  if (studentsList.has(name)) {
    studentsList.delete(name);
    return "Foydalanuvchi o'chirildi";
  } else {
    return "Foydalanuvchi topilmadi";
  }
}
console.log(createStudent("John", { age: 25, grade: "A" }));
console.log(createStudent("Alice", { age: 23, grade: "B" }));
console.log(readStudent("John"));
console.log(updateStudent("Alice", { age: 24, grade: "A" }));
console.log(deleteStudent("John"));
console.log(readStudent("John"));

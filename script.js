const studentName = "Alex";
let score = 83;

// Student info
console.log("Student: " + studentName);
console.log("Score: " + score);

// Process of checking
function getGrade(s) {
        if (s > 100 || s < 0) {
return "Invalid Score.";
    }
        if (s >= 90) {
        return "A";
    } else if (s >= 80) {
        return "B";
    } else if (s >= 75) {
        return "C";
    } else {
        return "F";
    }
}

// This is to check each students name and grade
function checkStudent(name, s) {
const grade = getGrade(s);

    if (grade === "Invalid Score.") {
    console.log("Invalid Score.");
        } else if (grade === "F") {
    console.log("Student: " + name + ", Score: " + s + " - Grade: " + grade + ". Failing!");
        } else {
    console.log("Student: " + name + ", Score: " + s + " - Grade: " + grade + ". Passing!");
    }
}

// Other students information
checkStudent("Alex", 83);
checkStudent("Sam", 60);
checkStudent("Lee", 95);
checkStudent("Jo", 75);

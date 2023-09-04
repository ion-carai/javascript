//Prima sarcina 
function removeDuplicates(array) {
    let uniqueArray = [];
    let uniquenumbers = new Set();

    for (let numar of array) {
        if (!uniquenumbers.has(numar)) {
            uniquenumbers.add(numar);
            uniqueArray.push(numar);
        }
    }

    return uniqueArray;
}

let array = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7,];
let result = removeDuplicates(array);
console.log(result);

//A doua sarcina
const students = [
    {
        firstName: "Ion",
        subjects: [
            { name: "mathematics", marks: [8, 9, 7, 5] },
            { name: "literature", marks: [9, 8, 5] },
            { name: "physics", marks: [7, 2, 10] }
        ]
    },

    {
        firstName: "Eugenia",
        subjects: [
            { name: "mathematics", marks: [88, 76, 90] },
            { name: "literature", marks: [95, 92, 89] },
            { name: "physics", marks: [78, 85, 88] }
        ]
    },

    {
        firstName: "Dan",
        subjects: [
            { name: "mathematics", marks: [6, 9, 4, 5] },
            { name: "literature", marks: [8, 8, 5, 10] },
            { name: "physics", marks: [7, 3, 10] }
        ]
    }
];

function calculateSubjectAverage(student, subjectName) {
    const subject = student.subjects.find(subj => subj.name === subjectName);
    if (!subject) {
        return 0;
    }
    const totalMarks = subject.marks.reduce((sum, mark) => sum + mark, 0);
    return totalMarks / subject.marks.length;
}

function calculateStudentAverage(student) {
    const totalSubjectAverages = student.subjects.reduce((sum, subject) => {
        const subjectAverage = calculateSubjectAverage(student, subject.name);
        return sum + subjectAverage;
    }, 0);
    return totalSubjectAverages / student.subjects.length;
}

function calculateOverallAverage(students) {
    const totalStudentAverages = students.reduce((sum, student) => {
        const studentAverage = calculateStudentAverage(student);
        return sum + studentAverage;
    }, 0);
    return totalStudentAverages / students.length;
}

const subjectAverages = {};
students.forEach(student => {
    student.subjects.forEach(subject => {
        const subjectAverage = calculateSubjectAverage(student, subject.name);
        if (!subjectAverages[subject.name]) {
            subjectAverages[subject.name] = [];
        }
        subjectAverages[subject.name].push({ student: student.firstName, average: subjectAverage });
    });
});

const overallAverage = calculateOverallAverage(students);

console.log("Mediile la fiecare materie:");
console.log(subjectAverages);
console.log("Media generală a tuturor studenților:", overallAverage);

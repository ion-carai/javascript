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

students.forEach(student => {
    student.subjects.forEach(subject => {
        let sum = 0;
        subject.marks.forEach(mark => sum += mark)

        const averageMark = sum / subject.marks.length;
        subject.averageMark = averageMark;
    });
});

students.forEach(student => {
    let sum = 0;

    student.subjects.forEach (subject => sum += subject.averageMark);
    student.averageMark = sum / student.subjects.length;
});

let sum = 0;
let averageMark = 0;

for (const student of students){
sum += student.averageMark;
averageMark = sum / students.length;
}

students.forEach(student => console.log(student))
console.log(averageMark);
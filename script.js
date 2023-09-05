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

//A treia sarcina
const products = [
    {
        name: "Laptop",
        category: "Electronics",
        price: 1800,
        originCountry: { name: "China", code: "CN" }
    },
    {
        name: "Tableta",
        category: "Electronics",
        price: 1000,
        originCountry: { name: "Taiawan", code: "TW" }
    },
    {
        name: "Blugi",
        category: "Clothing",
        price: 300,
        originCountry: { name: "Moldova", code: "MD" }
    },
];

function addProduct(product) {
    products.push(product);
}
addProduct({
    name: "Mouse",
    category: "Electronics",
    price: 25,
    originCountry: { name: "China", code: "CN" }
});

function takeProduct(productName) {
    const index = products.findIndex(product => product.name === productName);
    if (index !== -1) {
        const product = products.splice(index, 1)[0];
        return product;
    }
    return null;
}
const takenProduct = takeProduct("Mouse");
console.log("Produsul luat din depozit:", takenProduct);

function filterByCategory(category) {
    return products.filter(product => product.category === category);
}
const electronicsProducts = filterByCategory("Electronics");
console.log("Produsele din categoria Electronics:", electronicsProducts);

function filterByOriginCountry(countryCode) {
    return products.filter(product => product.originCountry.code === countryCode);
}
const usOriginProducts = filterByOriginCountry("US");
console.log("Produsele de origine SUA:", usOriginProducts);

function findMostExpensiveProduct() {
    return products.reduce((maxProduct, currentProduct) => {
        return currentProduct.price > maxProduct.price ? currentProduct : maxProduct;
    }, products[0]);
}
const mostExpensive = findMostExpensiveProduct();
console.log("Produsul cel mai scump:", mostExpensive);

function findCheapestProduct() {
    return products.reduce((minProduct, currentProduct) => {
        return currentProduct.price < minProduct.price ? currentProduct : minProduct;
    }, products[0]);
}
const cheapest = findCheapestProduct();
console.log("Produsul cel mai ieftin:", cheapest);

function findProductsInRange(minPrice, maxPrice) {
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}

const priceRangeProducts = findProductsInRange(600, 1000);
console.log("Produsele cu preț între 600 și 1000:", priceRangeProducts);



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

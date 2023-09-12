//Prima sarcina 
function removeDuplicates(array) {
    const uniqueArray = [];
   
    for (const number of array) {
        if (!uniqueArray.includes(number)) {
            uniqueArray.push(number);
        }
    }

    return uniqueArray;
}

const array = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7,];
const result = removeDuplicates(array);
console.log(result);






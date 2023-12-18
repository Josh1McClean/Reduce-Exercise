let toons = ['Family Guy', 'South Park', 'Rick & Morty', 'Invincible'];
let numbers = [1, 3, 10, 33, 100, 333];
let smallNumbers = [0, 2, 4, 6, 8, 8];
let madNumbers = [1, 2, 3, 50, 45, 77, 12, 34, 76, 90, 15, 100];
let jocks = [
    { name: "Bron", sport: "Basketball", bestYear: 2007 },
    { name: "OBJ", sport: "Football", bestYear: 2015 },
    { name: "Tyson", sport: "Boxing", bestYear: 1986 },
]
let jocksFullNames = [
    { first: 'LeBron', last: 'James' },
    { first: 'Odell', last: 'Beckham Jr' },
    { first: 'Mike', last: 'Tyson' }
];
let peeps = [
    { name: 'Deidre', age: 26, city: 'Brooklyn' },
    { name: 'Tasharah', gender: 'Female' },
    { name: 'Malik', gender: 'Male' },
    { name: 'Zoe', age: 25, city: 'Trenton' }
];
let users = [
    { username: 'sincerelydeidre' },
    { username: '444theloveoftash' },
    { username: '_mwilder' },
    { username: 'saintiv_' }
];

//Reduce- extractValue
function extractValue(arrayOfObjects, key) {
    // Use the reduce method to extract the values of the specified key
    return arrayOfObjects.reduce(function (accumulator, obj) {
        accumulator.push(obj[key]);
        return accumulator;
    }, []);
}
let extractedValues = extractValue(users, 'username');
console.log(extractedValues); // Console: (4) ['sincerelydeidre', '444theloveoftash', '_mwilder', 'saintiv_']

//Reduce- vowelCount
function vowelCount(string) {
    // Defines an array of vowels
    let vowels = ["a", "e", "i", "o", "u", "y"]
    // Uses the reduce method to count the occurrences of vowels
    return string.split('').reduce(function (accumulator, char) {
        // Converts the character to lowercase for case-insensitivity
        let lowerChar = char.toLowerCase();
        // Checks if the character is a vowel
        if (vowels.includes(lowerChar)) {
            // Increments the count for the vowel or initializes it to 1
            accumulator[lowerChar] = (accumulator[lowerChar] || 0) + 1;
        }
        return accumulator;
    }, {});
}
let result = vowelCount('Family Guy');
let resultVowel = vowelCount('South Park');
let resultVowelCount = vowelCount('Rick & Morty');
let resultVC = vowelCount('Invincible');
console.log(result); // Console: {a: 1, i: 1, y: 2, u: 1}
console.log(resultVowel); // Console: {o: 1, u: 1, a: 1}
console.log(resultVowelCount); // Console: {i: 1, o: 1, y: 1}
console.log(resultVC); // Console: {i: 3, e: 1}

//Reduce- addKeyAndValue
function addKeyAndValue(arrOfObj, key, value) {
    // Uses the reduce method to modify each object by adding the specified key and value
    return arrOfObj.reduce(function (accumulator, obj) {
        // Clones the original object to avoid modifying it directly
        let modifiedObject = { ...obj };
        // Adds the specified key and value to the modified object
        modifiedObject[key] = value;
        // Pushes the modified object to the accumulator array
        accumulator.push(modifiedObject);
        return accumulator;
    }, []);
}
let newArrKeyValue = addKeyAndValue(users, 'socials', 'Instagram');
console.log(newArrKeyValue); //Console: { username: 'sincerelydeidre', socials: 'Instagram' } 👇🏿
// { username: '444theloveoftash', socials: 'Instagram' }
// { username: '_mwilder', socials: 'Instagram' }
// { username: 'saintiv_', socials: 'Instagram' }

//Reduce- partition
function partition(array, callback) {
    // Uses the reduce method to split the array into two subarrays
    return array.reduce(function (accumulator, value) {
        // Determines which subarray to push the value into based on the callback result
        let subarrayIndex = callback(value) ? 0 : 1;
        // Initializes the subarray if it doesn't exist yet
        accumulator[subarrayIndex] = accumulator[subarrayIndex] || [];
        // Pushes the value into the appropriate subarray
        accumulator[subarrayIndex].push(value);
        return accumulator;
    }, []);
}
let isEven = function (num) {
    return num % 2 === 0;
};
let outcome = partition(madNumbers, isEven);
console.log(outcome); //Console: (2) [Array(7), Array(5)] (7) [2, 50, 12, 34, 76, 90, 100] (5) [1, 3, 45, 77, 15]
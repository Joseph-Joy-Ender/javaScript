let birthYears = [2000, 1972, 1999, 2001, 2003];
let currentYear = 2024;

const getResultArray = (arr, func)  =>{
    const result = []

    for (let birthYear of birthYears){
        let value = func(birthYear);
        result.push(value);
    }
    return result;
}
const calculateAge = (birthYear)=>{
    return currentYear - birthYear;
}

console.log(getResultArray(birthYears, calculateAge));
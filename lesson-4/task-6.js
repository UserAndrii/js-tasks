function findLargestNumber(numbers) {
    let max = numbers[0];
    for (let number of numbers) {
        max = number > max ? number : max;
    }
    return max;
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
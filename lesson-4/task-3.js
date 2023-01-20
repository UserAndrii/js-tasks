function getRectArea(dimensions) {
    const arr = dimensions.split(" ");
    
    return Number.parseInt(arr[0]) * Number.parseInt(arr[1])
}

console.log(getRectArea('8 11'));
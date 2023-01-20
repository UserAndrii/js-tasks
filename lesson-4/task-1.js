function calcBMI(weight, height) {
    const weightNum = Number.parseFloat(weight.replace(',', '.'));
    const heighttNum = Number.parseFloat(height.replace(',', '.'));

    let result = weightNum / (heighttNum * heighttNum);

    return result.toFixed(1);
}

const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8
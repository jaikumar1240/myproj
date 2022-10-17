const arr = [1,2,3,4];
function rev(arr) {
    let finalArr = []
    for(let i = 0;i<arr.length ;i++){
        finalArr.unshift(arr[i])
    }
    return finalArr;
}

const arr2 = rev(arr);
const arr1 = arr.reverse();
console.log({arr1, arr2});
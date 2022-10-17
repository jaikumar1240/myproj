const arr = [1,2,3,4]


const arr2 = arr.map(x=>x+3)

function arrMap(arr,cb) {
    let newArr =[];
    for(let i=0;i<arr.length;i++){
        newArr.push(cb(arr[i]));
    }
    return newArr;
}

const arr3 = arrMap(arr,(x)=>x+3)
console.log({ arr2 ,arr3});
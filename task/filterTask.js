const arr = [1, 2, 3, 4]
function arrFilter(arr,cb){
    let finalArr = [];
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i])){
            finalArr.push(arr[i]);
        }
    }
    return finalArr;
}

const arr1 = arr.filter(x=>x%2==0)
const arr2 = arrFilter(arr,(x)=>x%2==0)

console.log({arr1,arr2});
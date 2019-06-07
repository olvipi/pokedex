export default function uniqObjInArr(arr){
  let tempArr = [];
  let store = "";
  for (let i = 0; i < arr.length; i++) {
    let str = JSON.stringify(arr[i]);
    if (str !== store) {
      tempArr.push(arr[i]);
    }
    store = str;
  }
  return tempArr;
}
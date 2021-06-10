const arrayOfProperties = [
  "car",
  "car/wheel",
  "car/wheel/front",
  "car/wheel/rear",
  "car/rear",
  "car/rear/test",
  "car/rear/test/blue",
  "car/rear/head-blean",
  "car/rear/head-blean/blue",
  "boat/",
  "boat/large",
  "plane/small",
  "plane/blue",
  "ship/"
];

function transformArrayToObject(arrayOfProperties) {
  let obj = {};
  for(let i = 0; i < arrayOfProperties.length; i++){
    let split = arrayOfProperties[i].split('/');
    let temp = obj;
    for(let j = 0; j < split.length; j++){
      if(!temp[split[j]]){
        temp[split[j]] = {};
      }
      temp = temp[split[j]];
    }
  }
  return obj;
}

console.log(transformArrayToObject(routes));












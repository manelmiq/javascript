const source2 = {
  "draw": "",
  "columns": [
    {
      "data": "userid",
      "name": "",
      "searchable": true,
      "search": {
        "value": "",
        "regex": false
      }
    }
  ]
};

const solution = {
  "draw" : "",
  "columns[data]": "userid",
  "columns[name]": "",
  "columns[searchable]": "true",
  "columns[searchable][value]": "",
  "columns[searchable][regex]":"true"
};



function flattenRecursively (obj, flatten, flattenKey){
  for(let [key, value] of Object.entries(obj) ){
    let newKey = '';
    newKey = flattenKey +'[' + key + ']';
    if(typeof value === 'object'){
      flattenRecursively(value,flatten,newKey)
    }else{
      if(flattenKey != ''){
        key = flattenKey +'[' + key + ']';
      }
      flatten[key] = value;
    }
  }
}

function flattenArray(obj){
  let flattend = {};
  flattenRecursively(obj, flattend, '');
  return flattend;
}

console.log(flattenArray(source2));
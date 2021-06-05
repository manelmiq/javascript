const source = {
  a: 1,
  b: {
    c: true,
    d: {
      e: 'foo'
    }
  },
  f: false,
  g: ['red', 'green', 'blue'],
  h: [{
    i: 2,
    j: 3
  }]
};

const solution = {
  'a': 1,
  'b.c': true,
  'b.d.e': 'foo',
  'f': false,
  'g.0': 'red',
  'g.1': 'green',
  'g.2': 'blue',
  'h.0.i': 2,
  'h.0.j': 3
};


function flattenRecursively(object, flattenObject, flattenKey) {
  for ([key, value] of Object.entries(object)) {
    let newKey = key;
    if (flattenKey != '') {
      newKey = flattenKey + '.' + key;
    }
    if (typeof value === 'object') {
      flattenRecursively(value, flattenObject, newKey);
    } else {
      if (flattenKey != '') {
        key = flattenKey + '.' + key;
      }
      flattenObject[key] = value;
    }
  }
  return flattenObject;
}

function flatten(obj) {
  let object = {};
  flattenRecursively(obj, object, '');
  return object;
}

console.log(flatten(source));


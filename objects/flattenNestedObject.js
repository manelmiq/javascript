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

function flattenNestedObject(object) {
  let flattened = {};
  for (let [key, value] of Object.entries(object)) {
    if (typeof value === 'object') {

      // let [nestedKey, nestedValue] = extractObject(key, value);
      // flattened[nestedKey] = nestedValue;
    } else {
      flattened[key] = value;
    }
  }
  return flattened;
}

const reducer = (concatedKey, currentValue) => {
  if (typeof currentValue === 'object') {

  }

}

const flatten = (obj, prefix = '', res = {}) =>
  Object.entries(obj).reduce((r, [key, val]) => {
    const k = `${prefix}${key}`
    if (typeof val === 'object') {
      flatten(val, `${k}.`, r)
    } else {
      res[k] = val
    }
    console.log(r);
    return r
  }, res)

// console.log(flatten(source))


function extractObject(key, obj) {
  if (obj && typeof obj === "object") {
    let [nestedKey, value] = Object.entries(obj);
    key += nestedKey;
    extractObject(nestedKey, value);
  }
  return [key, obj];
}

console.log(flatten(source));


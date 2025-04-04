exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    let summe = 0;
    for (let i = 0; i < arr.length; i++){
      summe += arr[i];
    }
    return summe;
  },

  remove: function(arr, item) {
    var ret = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] !== item) {
        ret.push(arr[i]);
      }
    }

    return ret;
  },

  removeWithoutCopy: function(arr, item) {
    var i;
    var len;

    for (i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    return newArr;
  },

  insert: function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(v => v == item).length;
  },

  duplicates: function(arr) {
    return arr
    .filter((item, index) => arr.indexOf(item) !== index)
    .filter((item, index, self) => self.indexOf(item) === index);
  },

  square: function(arr) {
    return arr.map(Element => Element*Element);
  },


  findAllOccurrences: function(arr, target) {
    const indices = [];
    arr.forEach((item, index) => {
      if (item === target) {
        indices.push(index);
      }
    });
    return indices;
  } 
};

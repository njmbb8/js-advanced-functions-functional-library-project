const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: (collection, callback) => {
      if(typeof collection === 'object'){
        Object.entries(collection).forEach((entry) => callback(entry[1]))
      }
      else{
        collection.forEach(element => {
        callback(element);
      });
    }  
      return collection;
    },

    map: (collection, callback) => {
      let newArray= [];

      if(typeof collection === 'object'){
        Object.entries(collection).forEach((entry) => newArray.push((callback(entry[1]))));
      }
      else{
        collection.forEach((entry) => newArray.push(forEach(callback(entry))));
      }
      

      return newArray;
    },

    reduce: function(collection, callback, acc) {
      if(typeof collection === 'object'){
        Object.entries(collection).forEach((entry) => {
          if(!acc){
            acc = entry[1];
          }
          else{
            acc = callback(acc, entry[1], collection);
          }
        });
      }
      else{
        if(!acc){
          acc = entry[1];
        }
        collection.foreach(element => acc = callback(acc, element));
      }

      return acc;
    },

    find: function(collection, predicate) {
      let ret;
      Object.entries(collection).every((element) => {
        if(predicate(element[1])){
          ret = element[1];
          return false;
        }
        else{
          return true;
        }
      }
      );
      return ret;
    },

    filter: function(collection, callback){
      let matches = [];
      Object.entries(collection).forEach((element) => {
        if(callback(element[1])){
          matches.push(element[1])
        }
      })

      return matches;
    },

    size: function(collection){
      return Object.entries(collection).length;
    },

    first: function(collection, startAt = 1){
      let newArr = [];

      for( let i = 0; i < startAt; i++){
        newArr.push(collection[i]);
      }

      if(newArr.length > 1){
        return newArr;
      }
      else if(newArr.length === 1 ){
        return newArr[0];
      }
      else{
        return undefined;
      }
    },

    last: function(collection, numChars = 1){
      let newArr = [];
      for(let i = collection.length - numChars; i < collection.length; i++){
        newArr.push(collection[i]);
      }

      if(newArr.length > 1){
        return newArr;
      }
      else if(newArr.length === 1 ){
        return newArr[0];
      }
      else{
        return undefined;
      }
    },

    compact: function(collection){
      let truthy = [];
      collection.forEach((element) => {
        if(!!element){
          truthy.push(element);
        }
      })

      return truthy;
    },
    
    sortBy: function(array, callback){
      let newArr = [...array];
      
      newArr = newArr.sort((a,b) => callback(a) - callback(b));

      return newArr;
    },

    flatten: function(array, shallow = false){
      let ret = [];
      array.forEach((item) => {
        if(typeof item === 'object'){
          item.forEach((subItem) => {
            if(typeof subItem === 'object' && !shallow){
              this.flatten(subItem).forEach((subSubItem) => ret.push(subSubItem));
            }
            else{
              ret.push(subItem);
            }
          });
        }
        else{
          ret.push(item);
        }
      })
      return ret;
    },

    uniq: function(array, isSorted = false, callBack = (x) => {return x;}){
      let ret = [];
      array.forEach((item) => {
        let match = false;
        ret.forEach((matchedLetter) => {
          if(callBack(matchedLetter) === callBack(item)){
            match = true;
          }
        });
        if(!match){
          ret.push(item);
        }
      });
      return ret;
    },

    keys: function(object){
      let ret = [];
      Object.entries(object).forEach((x) => {ret.push(x[0])});
      return ret;
    },

    values: function(object){
      let ret = [];
      Object.entries(object).forEach((x) => {ret.push(x[1])});
      return ret;
    },

    functions(object){
      return Object.getOwnPropertyNames(object).filter(item => typeof object[item] === 'function');
    }
  }
})()

fi.libraryMethod()

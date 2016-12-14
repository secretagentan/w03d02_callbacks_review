(function() {
  'use strict';

  window._ = {};

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {
    return val;
  };

  document.write(_.identity(10) + '\n');

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   */
  var myObject = { //key: value,
    1: "Boshika",
    name: "Tara",
    3: "Los Angeles"
  }
// for...in loop syntax
  // for(var key in myObject) {
    console.log(1); // ==> returns 1
    // console.log(myObject[key]); ==> console error
    console.log(myObject.name); // ==> returns Tara
    console.log(myObject["name"]); // ==> returns Tara
    // console.log(myObject.1); ==> console error
    console.log(myObject[1]); // ==> returns Boshika
  // }

  // Call callback(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // callback function over each item in the input collection.
  _.each = function(collection, callback) {
    if(Array.isArray(collection)) {
      for(var i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else if (!Array.isArray(collection)) {
      for (var key in collection) {
        callback(collection[key], key, collection);
      }
    }
  };

document.write(_.each([1,2,3], function(value, index, thisArray){
  console.log(value + " " + index + " " + thisArray);
}))

  // Return the results of applying an callback to each element.
  _.map = function(collection, callback) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.

  };

  // document.write(_.map({1:"Boshika", 2:"Tara"}, function(value) {
  //   if (value === "Boshika") {
  //     return value;
  //   }
  // }))

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {

  };

  //TRY REDUCE
  // Reduces an array or object to a single value by repetitively calling
  // callback(accumulator, item) for each item. accumulator should be
  // the return value of the previous callback call.
  //
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the callback. In other words, in
  // the case where a starting value is not passed, the callback is not invoked
  // until the second element, with the first element as it's second argument.
  //
  // Example:
  //   var numbers = [1,2,3];
  //   var sum = _.reduce(numbers, function(total, number){
  //     return total + number;
  //   }, 0); // should be 6
  //
  //   var identity = _.reduce([5], function(total, number){
  //     return total + number * number;
  //   }); // should be 5, regardless of the callback function passed in
  //          No accumulator is given so the first element is used.
  _.reduce = function(collection, callback, accumulator) {

};
}());

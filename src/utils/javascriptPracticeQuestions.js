export const javascriptPracticeQuestions = [
    {
        question: "Problem 1: Deep Clone Object",
        description: "Create a function deepClone(obj) that deeply clones a given object. The function should handle nested objects, arrays, and primitive values.",
        seqOrder: 1,
        id: 1,
        topic: "Object",
        input: `function deepClone(obj) {
        // Your code here
      }
  
      // Test Cases
      const test1 = { a: 1, b: { c: 2, d: 3 } };
      const test2 = { a: [1, 2, 3], b: { c: 4, d: { e: 5 } } };
      const test3 = [{ a: 1 }, { b: 2 }];
  
      console.log(JSON.stringify(deepClone(test1)) === JSON.stringify(test1)); // true
      console.log(JSON.stringify(deepClone(test2)) === JSON.stringify(test2)); // true
      console.log(JSON.stringify(deepClone(test3)) === JSON.stringify(test3)); // true
  
      // Ensure deep copy
      const clone = deepClone(test2);
      clone.b.c = 999;
      console.log(test2.b.c === 4); // true`
    },
    {
        question: "Problem 2: Merge Two Objects",
        description: "Write a function mergeObjects(obj1, obj2) that merges two objects together. If both objects have the same key, the second object's value should overwrite the first.",
        seqOrder: 2,
        id: 2,
        topic: "Object",
        input: `function mergeObjects(obj1, obj2) {
        // Your code here
      }
  
      // Test Cases
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
  
      console.log(JSON.stringify(mergeObjects(obj1, obj2)) === JSON.stringify({ a: 1, b: 3, c: 4 })); // true
  
      const obj3 = { a: { nested: 1 }, b: 2 };
      const obj4 = { a: { nested: 3 }, c: 5 };
  
      console.log(JSON.stringify(mergeObjects(obj3, obj4)) === JSON.stringify({ a: { nested: 3 }, b: 2, c: 5 })); // true`
    },
    {
        question: "Problem 3: Flatten a Nested Object",
        description: "Write a function flattenObject(obj) that converts a deeply nested object into a flat object where each key is a path joined by dots (e.g., 'a.b.c': 3).",
        seqOrder: 3,
        id: 3,
        topic: "Object",
        input: `function flattenObject(obj) {
        // Your code here
      }
  
      // Test Cases
      const nestedObject = {
        a: 1,
        b: {
          c: 2,
          d: {
            e: 3
          }
        }
      };
  
      console.log(JSON.stringify(flattenObject(nestedObject)) === JSON.stringify({ 'a': 1, 'b.c': 2, 'b.d.e': 3 })); // true`
    },
    {
        question: "Problem 4: Invert Keys and Values of an Object",
        description: "Write a function invertObject(obj) that inverts the keys and values of the given object. Assume all values are unique.",
        seqOrder: 4,
        id: 4,
        topic: "Object",
        input: `function invertObject(obj) {
        // Your code here
      }
  
      // Test Cases
      const obj1 = { a: 1, b: 2, c: 3 };
      console.log(JSON.stringify(invertObject(obj1)) === JSON.stringify({ '1': 'a', '2': 'b', '3': 'c' })); // true`
    },
    {
        question: "Problem 5: Group By Property",
        description: "Write a function groupBy(arr, key) that takes an array of objects and a key and groups the array based on the value of the key.",
        seqOrder: 5,
        id: 5,
        topic: "Object",
        input: `function groupBy(arr, key) {
        // Your code here
      }
  
      // Test Cases
      const data = [
        { id: 1, category: 'fruits', name: 'apple' },
        { id: 2, category: 'fruits', name: 'banana' },
        { id: 3, category: 'vegetables', name: 'carrot' },
        { id: 4, category: 'fruits', name: 'grape' },
        { id: 5, category: 'vegetables', name: 'spinach' },
      ];
  
      const result = groupBy(data, 'category');
      console.log(JSON.stringify(result) === JSON.stringify({
        fruits: [
          { id: 1, category: 'fruits', name: 'apple' },
          { id: 2, category: 'fruits', name: 'banana' },
          { id: 4, category: 'fruits', name: 'grape' },
        ],
        vegetables: [
          { id: 3, category: 'vegetables', name: 'carrot' },
          { id: 5, category: 'vegetables', name: 'spinach' },
        ]
      })); // true`
    },
    {
        question: "Problem 6: Find the Difference Between Two Objects",
        description: "Write a function findDifference(obj1, obj2) that returns the difference between two objects as a new object. If a key exists in one object but not in the other, it should appear in the result. If the values for the same key are different in both objects, the result should show both values.",
        seqOrder: 6,
        id: 6,
        topic: "Object",
        input: `function findDifference(obj1, obj2) {
        // Your code here
      }
  
      // Test Cases
      const obj1 = { a: 1, b: 2, c: 3 };
      const obj2 = { a: 1, b: 4, d: 5 };
  
      const result = findDifference(obj1, obj2);
      console.log(JSON.stringify(result) === JSON.stringify({
        b: { obj1: 2, obj2: 4 },
        c: { obj1: 3, obj2: undefined },
        d: { obj1: undefined, obj2: 5 }
      })); // true`
    },
    {
        question: "Problem 7: Remove Undefined Keys from Object",
        description: "Write a function removeUndefinedKeys(obj) that removes all keys from the object whose values are undefined.",
        seqOrder: 7,
        id: 7,
        topic: "Object",
        input: `function removeUndefinedKeys(obj) {
        // Your code here
      }
  
      // Test Cases
      const obj1 = { a: 1, b: undefined, c: 3, d: undefined };
      console.log(JSON.stringify(removeUndefinedKeys(obj1)) === JSON.stringify({ a: 1, c: 3 })); // true
  
      const obj2 = { x: undefined, y: 2, z: undefined };
      console.log(JSON.stringify(removeUndefinedKeys(obj2)) === JSON.stringify({ y: 2 })); // true`
    },
    {
        question: "Problem 8: Count Occurrences of Values in Object",
        description: "Write a function countOccurrences(arr) that counts the occurrences of each value in an array of objects based on a specified key.",
        seqOrder: 8,
        id: 8,
        topic: "Object",
        input: `function countOccurrences(arr, key) {
        // Your code here
      }
  
      // Test Cases
      const data = [
        { category: 'fruits' },
        { category: 'fruits' },
        { category: 'vegetables' },
        { category: 'fruits' },
        { category: 'vegetables' }
      ];
  
      const result = countOccurrences(data, 'category');
      console.log(JSON.stringify(result) === JSON.stringify({ fruits: 3, vegetables: 2 })); // true`
    },
    {
        question: "Problem 9: Filter Object by Keys",
        description: "Write a function filterObjectByKeys(obj, keys) that returns a new object that only contains the keys provided in the keys array.",
        seqOrder: 9,
        id: 9,
        topic: "Object",
        input: `function filterObjectByKeys(obj, keys) {
        // Your code here
      }
  
      // Test Cases
      const obj1 = { a: 1, b: 2, c: 3 };
      const result = filterObjectByKeys(obj1, ['a', 'c']);
      console.log(JSON.stringify(result) === JSON.stringify({ a: 1, c: 3 })); // true`
    },
    {
        question: "Problem 10: Map Object to New Object with Modified Keys",
        description: "Write a function mapObjectKeys(obj, callback) that applies a transformation function to each key in the object and returns a new object with the transformed keys.",
        seqOrder: 10,
        id: 10,
        topic: "Object",
        input: `function mapObjectKeys(obj, callback) {
        // Your code here
      }
  
      // Test Cases
      const obj1 = { a: 1, b: 2, c: 3 };
      const result = mapObjectKeys(obj1, (key) => key.toUpperCase());
      console.log(JSON.stringify(result) === JSON.stringify({ A: 1, B: 2, C: 3 })); // true`
    },
    {
        question: "Problem 11: Find the Key of the Maximum Value",
        description: "Write a function findMaxKey(obj) that returns the key of the maximum value in the object. Assume all values are numbers.",
        seqOrder: 11,
        id: 11,
        topic: "Object",
        input: `function findMaxKey(obj) {
        // Your code here
      }
  
      // Test Cases
      const obj1 = { a: 1, b: 10, c: 5 };
      console.log(findMaxKey(obj1) === 'b'); // true`
    },
    {
        question: "Problem 12: Sort Array of Objects by Key",
        description: "Write a function sortByKey(arr, key) that sorts an array of objects by the specified key.",
        seqOrder: 12,
        id: 12,
        topic: "Object",
        input: `function sortByKey(arr, key) {
        // Your code here
      }
  
      // Test Cases
      const data = [
        { id: 3, name: 'apple' },
        { id: 1, name: 'banana' },
        { id: 2, name: 'carrot' }
      ];
  
      const result = sortByKey(data, 'id');
      console.log(JSON.stringify(result) === JSON.stringify([
        { id: 1, name: 'banana' },
        { id: 2, name: 'carrot' },
        { id: 3, name: 'apple' }
      ])); // true`
    },
    {
        question: "Problem 13: Get All Keys and Values as Arrays",
        description: "Write a function getKeysAndValues(obj) that returns two arrays: one with all the keys and another with all the values of the object.",
        seqOrder: 13,
        id: 13,
        topic: "Object",
        input: `function getKeysAndValues(obj) {
        // Your code here
      }
  
      // Test Cases
      const obj1 = { a: 1, b: 2, c: 3 };
      const [keys1, values1] = getKeysAndValues(obj1);
      console.log(JSON.stringify(keys1) === JSON.stringify(['a', 'b', 'c'])); // true`
    }
];

export function getJavascriptPracticeQuestionById(id) {
    return javascriptPracticeQuestions?.find(item => item?.id === id);
}

// Function to get all unique topics
export function getAllTopics() {
  return Array.from(new Set(javascriptPracticeQuestions?.map(item => item.topic)));
}

// Function to get all questions for a given topic
export function getQuestionsByTopic(topic) {
  return javascriptPracticeQuestions?.filter(item => item.topic === topic);
}
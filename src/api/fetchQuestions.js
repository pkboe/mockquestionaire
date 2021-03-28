const questions = {
  1: {
    question: "Is python Interpreted or Compiled?",
    answer: ["Interpreted"],
    type: "text",
  },
  2: {
    question: "Is Python Staticall typed or Dynamically Typed?",
    answer: ["Dynamically Typed"],
    type: "text",
  },
  3: {
    question: "What is namespace in Python?",
    answer: [
      " A namespace is a collection of currently defined symbolic names along with information about the object that each name references",
      "namespace is a mapping of every name defined in program to corresponding objects",
      "A namespace is a system to have a unique name for each and every object in Python",
      " A namespace is a dictionary of variable names (keys) and their corresponding objects (values)",
    ],
    type: "text",
  },
  4: {
    question: "What is PYTHONPATH?",
    answer: [
      "PYTHONPATH is an environment variable which you can set to add additional directories where python will look for modules and packages",
      "It is used to set the path for the user-defined modules so that it can be directly imported into a Python program",
    ],
    type: "text",
  },
  5: {
    question: "What are python modules?",
    answer: [
      "Modules refer to a file containing Python statements and definitions",
      "A module is a Python object with arbitrarily named attributes that you can bind and reference",
      "A file containing a set of functions you want to include in your application",
    ],
    type: "text",
  },
  6: {
    question: "Name 3 commonly used built-in modules in Python",
    answer: [
      "abc",
      "array",
      "asyncio",
      "audioop",
      "base64",
      "calender",
      "cgi",
      "copy",
      "csv",
      "datetime",
      "email",
      "enum",
      "errno",
      "fileinput",
      "fractions",
      "gc",
      "http",
      "imaplib",
      "io",
      "json",
      "keyword",
      "logging",
      "math",
      "operator",
      "os",
      "parser",
      "pickle",
      "pprint",
      "random",
      "socket",
      "sqlite3",
      "ssl",
      "string",
      "sys",
      "test",
      "time",
      "types",
      "urllib",
      "venv",
      "warnings",
      "xml",
      "zlib",
    ],
    type: "count-3",
  },
  7: {
    question: "What are Global Variables in python?",
    answer: [
      "Variables that are created outside of a function are known as global variables",
    ],
    type: "text",
  },
  8: {
    question: "'True' or False: Python is case-sensitive",
    answer: ["True"],
    type: "'true'-false",
  },
  9: {
    question: "What is type conversion in Python?",
    answer: [
      "The process of converting the value of one data type to another data type is called type conversion",
      "convert one data type to another",
      "The process of converting a Python data type into another data type is known as type conversion",
    ],
    type: "text",
  },
  10: {
    question: "What is __init__?",
    answer: [
      "a reseved method in python classes",
      "a constructor in object oriented terminology",
      "similar to constructors",
      "method called when an object is created from the class and it allow the class to initialize the attributes of a class",
    ],
    type: "text",
  },
  11: {
    question: "What is a lambda function?",
    answer: [
      "A lambda function is a small anonymous function",
      "an anonymous function is a function that is defined without a name",
      "Python lambdas are little, anonymous functions, subject to a more restrictive but more concise syntax than regular Python functions",
      "A function which contains only a single expression",
    ],
    type: "text",
  },
  12: {
    question: "What does [::-1} do?",
    answer: [
      "reverse the order of an array or a sequence",
      "reverse the give list, array, string",
    ],
    type: "text",
  },
  13: {
    question: "What are python iterators?",
    answer: [
      "An iterator is an object that contains a countable number of values",
      "An iterator is an object that can be iterated upon",
      "Iterator is an object that is used to iterate over iterable objects like lists, tuples, dicts, and sets",
      "an object which allows a programmer to traverse through all the elements of a collection",
      "An iterator is an object that implements next, which is expected to return the next element of the iterable object that returned it",
    ],
    type: "text",
  },
  14: {
    question: "What are docstrings in Python?",
    answer: [
      "the string literals that appear right after the definition of a function, method, class, or module",
      "provide a convenient way of associating documentation with Python modules, functions, classes, and methods",
      "a string literal that occurs as the first statement in a module, function, class, or method definition",
      "",
    ],
    type: "text",
  },
  15: {
    question: "'True' or False: Python supports Multiple Inheritance?",
    answer: ["True"],
    type: "'true'-false",
  },
};

var input = questions;

var result = [],
  item;

for (var type in input) {
  item = {};
  item.type = type;
  item.data = input[type];
  result.push(item);
}
console.log(result);
export default result;

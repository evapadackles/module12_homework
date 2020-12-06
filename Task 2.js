const obj = {
  key1 : 5,
  key2 : 5,
  key3 : 5,
  key4 : 5,
};

const testKey = "key2";

const countKey = (strIn, objIn) => { // не забывайте про правила именования переменных и функций: имена должны быть в camelCase, кроме имен классов и конструкторов
return (strIn in objIn);
}

console.log(countKey(testKey, obj))
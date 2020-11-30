const obj = {
  key1 : 5,
  key2 : 5,
  key3 : 5,
  key4 : 5,
};

const testKey = "key2";

const CountKey = (strIn, objIn) => {
return (strIn in objIn);
}

console.log(CountKey(testKey, obj))
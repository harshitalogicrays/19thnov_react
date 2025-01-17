let obj = {fname:"Ram",lname:"sharma",age:20}
//convert JS object into JSON string -
console.log(obj)
let jsonstr = JSON.stringify(obj)
console.log(jsonstr)

//convert json string into object 
let obj1 = JSON.parse(jsonstr)
console.log(obj1);

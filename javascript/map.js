const map = new Map();

map.set("fname","Shruti");
map.set("lname", "Sharma");
map.set("age",21);
map.set("desg","trainee");
console.log(map);

console.log("Map has age : " + map.has("age"));
console.log("Map has Salary : " + map.has("salary"));
console.log("Get me lastname : " + map.get("lname"));
console.log("Delete desg " + map.delete("desg"));
console.log(map);
map.clear();
console.log(map);
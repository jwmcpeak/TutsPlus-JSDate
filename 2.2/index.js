const feb14 = new Date("February 14, 2010 5:30 PM");

console.log(feb14.getFullYear());
console.log(feb14.getMonth());
console.log(feb14.getDay()); // day of the week
console.log(feb14.getDate()); // day of month
console.log(feb14.getHours());
console.log(feb14.getMinutes());
console.log(feb14.getSeconds());

console.log(feb14.getUTCFullYear());
console.log(feb14.getUTCMonth());
console.log(feb14.getUTCDay()); // day of the week
console.log(feb14.getUTCDate()); // day of month
console.log(feb14.getUTCHours());
console.log(feb14.getUTCMinutes());
console.log(feb14.getUTCSeconds());

console.log(feb14.toISOString());
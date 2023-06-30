const date = new Date("February 14, 2010 5:30 PM");

date.setFullYear(2012);
date.setMonth(date.getMonth() + 1); // march
date.setDate(22);
date.setHours(12);
date.setMinutes(0);

date.setUTCFullYear(2012);
date.setUTCMonth(2);
date.setUTCDate(22);
date.setUTCHours(0);
date.setUTCMinutes(0);


console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay()); // day of the week
console.log(date.getDate()); // day of month
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

console.log(date.getUTCFullYear());
console.log(date.getUTCMonth());
console.log(date.getUTCDay()); // day of the week
console.log(date.getUTCDate()); // day of month
console.log(date.getUTCHours());
console.log(date.getUTCMinutes());
console.log(date.getUTCSeconds());

console.log(date.toISOString());
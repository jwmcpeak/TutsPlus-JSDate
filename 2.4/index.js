const date1 = new Date('August 5, 2014 5:30 PM');
const date2 = new Date('August 5, 2014  5:30 PM');

if (date1 < date2) {
    console.log('date1 is earlier than date2');
} else if (date2 < date1) {
    console.log('date2 is earlier than date1');
}

// timestamp is the number of ms since unix epoch
// jan 1, 1970

//console.log((date1 - date2) / 1000 / 60 / 60);

const ts = Date.now();
const ts2 = Date.parse('August 5, 2014 5:30 PM');

console.log(new Date(ts));

const timestamp1 = date1.getTime();
const timestamp2 = date2.getTime();

if (timestamp1 === timestamp2) {
    console.log("they're identical");
} else {
    console.log('not identical');
}

if (timestamp1 == timestamp2) {
    console.log("they're equal");
} else {
    console.log('not equal');
}
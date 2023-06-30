const date1 = new Date('July 4, 2014 5:30 PM');

// date1.toLocaleString();
// date1.toLocaleDateString();
// date1.toLocaleTimeString();

// const options = {
//     dateStyle: 'short',
//     timeStyle: 'short',
//     timeZone: 'America/New_York',
//     hour12: true
// };

// console.log(date1.toLocaleString('en-US', options));
// console.log(date1.toLocaleString('en-GB', options));
// console.log(date1.toLocaleString('de-DE', options));

// yyyyMMdd-hhmmss
const [yyyy, MM, dd, hh, mm, ss] = [
    date1.getUTCFullYear(),
    fn(date1.getUTCMonth() + 1),
    fn(date1.getUTCDate()),
    fn(date1.getUTCHours()),
    fn(date1.getUTCMinutes()),
    fn(date1.getUTCSeconds())
];

const str = `${yyyy}${MM}${dd}-${hh}${mm}${ss}`;

console.log(str);

function fn(num) {
    return num.toLocaleString('en-US', {
        minimumIntegerDigits: 2
    });
}
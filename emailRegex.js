var fs = require('fs');


let file = fs.readFileSync('test.txt').toString();



// let count = 0
// for(let i = 0; i < file.length; i++){
//     if (file.substring(i,i + 13) === '@softwire.com'){count++}
// }
// console.log(count)


//let softwireRegex = /(\s)[\w\.'_%+-]*@softwire.com(\s)/g;

//let cases = file.match(softwireRegex)

//console.log(cases.length)
//console.log(cases)
// let emailRegex = /\s[\w\.'_%+-]*@[\w'_%+-]*\.[\w\.'_%+-]*\s/g;

// let emailRegex =/\s[\w\.'_%+-]*@[.]*\s/g;

let dRegex = /@[\w-]*\.[\w\.]*/g;
let emails = file.match(dRegex)



let domains = []
for(let i = 0; i < emails.length; i++){
   if (domains.indexOf(emails[i]) == -1){
      domains.push(emails[i])
    }
}
console.log(domains)
console.log(domains.length)

// Turns domains elements to keys of a new object and sets value to 0
let domainCount = {};
domains.forEach(key => domainCount[key]= 0)


 // Nested loop that checks how many times domains eleemnt is in email and tallys count   
for(let i = 0; i < domains.length; i++){
   
   for(let j = 0; j < emails.length; j++){
      if (domains[i] === emails[j]){domainCount[domains[i]] = domainCount[domains[i]] +1}
   }
}

console.log(domainCount)


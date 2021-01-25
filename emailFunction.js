//Run 'npm i readline-sync' in command line before running to install 'readline-sync' package

var fs = require('fs');
var readline = require('readline-sync');

let extraction = (extract) => {
let file = fs.readFileSync(extract).toString();
domainFunction(file)
topTenDomains(file)
userReq(file)
}

//Function that counts how many of each domain is used
let domainFunction = (text) => {
    let dRegex = /@[\w-]*\.[\w\.]*/g;
    let emails = text.match(dRegex);
  
    let domainCount = {};
    emails.forEach(key => {
        if (domainCount[key]){domainCount[key] = domainCount[key] +1}
        else {domainCount[key] = 1}
    });
    
    console.log(domainCount)
    return domainCount
};

//Function that orders the top ten most used domains
let topTenDomains = (text) => {
  let domains = domainFunction(text);
  let sortable = [];
  for (let domain in domains){sortable.push([domain, domains[domain]])};
  let topTen = [];
  let topN = 0;
  let top;
  while (topTen.length < 10 && topTen.length < sortable.length){
      sortable.forEach(pair => {
          if(pair[1] > topN && topTen.indexOf(pair[0]) === -1){
              topN = pair[1];
              top = pair[0]
            }
      });
      topTen.push(top);
      topN = 0;
      
  }
  topTen.forEach(pos => console.log(`${topTen.indexOf(pos) + 1}. ${pos}`))
};

//Function that returns the minimum amount of times a domain should occur as requested by user
let userReq = (text) => {
    let domains = domainFunction(text)
    let answer = {};
    console.log('At least how many times should domains appear?');
    let number = readline.prompt()
    for(domain in domains){
        if (domains[domain] >= number){
            answer[domain] = domains[domain]
        }   
    }
    for (result in answer){
        console.log(`${result} ${answer[result]} times`)
    };
}

extraction('test.txt');
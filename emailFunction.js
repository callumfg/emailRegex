var fs = require('fs');

let extraction = (extract) => {
let file = fs.readFileSync(extract).toString();
domainFunction(file)
topTenDomains(file)
}


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

let topTenDomains = (text) => {
  let domains = domainFunction(text);
//   console.log(domains)
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


extraction('test.txt');
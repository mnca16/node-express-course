const { readFileSync, writeFileSync } = require('fs')

// video
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
// the third value flag is used to append everytime the program is run
writeFileSync(
 './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  {flag: 'a'}
)

// home work 

writeFileSync('./temporary/fileA.txt', 
"Writing temporary text ",
{flag: 'a'}
)



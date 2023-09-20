const { readFile, writeFile} = require('fs')

// video
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return 
    }
    const first = result 
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', 
        `Here is the result: ${first}, ${second}`,
        (err, result) => {
            if(err) {
              console.log(err)
              return 
            }
            console.log(result)
         }
        )
    })
     
})

// homework

console.log("at start");
writeFile('./temporary/fileB.txt',
  'This is line 1\n', (err, result) => {
    console.log("at point 1")
if (err) {
    console.log("This error happened: ", err);
} else {
    const first = result 
    console.log("at point 2")
    writeFile('./temporary/fileC.txt',
    'This is line 2\n', (err, result) => {
        if(err) {
            console.log(err)
        } else {
            console.log("at point 3")
            const second = result
            writeFile('./temporary/fileD.txt',
            `This is line 3 with result\n`, (err, result) => {
                if(err)(
                    console.log(err)
                )
                console.log(result)
            }
            )
        }
    }
    )
 }
 },
) 

 console.log('at end');

 /*
 Personal note: I attempt to write results from the 
 first and second response but I would need to read what's
 in the file frist 
 
 */

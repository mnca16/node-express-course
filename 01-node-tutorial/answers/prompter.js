const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
const title = "Guess a number between 1 and 10";
const subTitle = "Enter a number below";
let item = "";
const highNumOutput = "You guessed too high"
const lowNumOutput = "You guessed too low"
const winOutput = "You guessed the right number"
let secretNum = Math.floor(Math.random() * 10);

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
  <p style="color:#A52A2A;">${title}</p>
  <p style="color:#5F9EA0;">${subTitle}</p>
  <form method="POST">
  <input name="item" type="number"></input>
  <button type="submit">Submit</button>
  </form>
  <p style="color:#DC143C;">${item}</p>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      if (body["item"] > secretNum) {
        item = highNumOutput
      } else if (body['item'] < secretNum) {
        item = lowNumOutput
      } else if (parseInt(body['item']) === secretNum) {
        item = `${winOutput}: ${body['item']}!!`
      } else{
        item = "Nothing was entered.";
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");

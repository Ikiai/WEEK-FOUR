const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var Request = require("request");
var answer = 0;
rl.question('Select your preferred news source by inserting the corresponding number:\n1. BBC NEWS \n2. FOX NEWS \n3. AL JAZEERA \n4. CNN ', (answer) => {

    if (answer == 1) {

        Request.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8c61d66d36a04d9ca70c78d63f7a1aad", (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            console.dir(JSON.parse(body));
        });
    } else if (answer == 2) {

        Request.get("https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=8c61d66d36a04d9ca70c78d63f7a1aad", (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            console.dir(JSON.parse(body));
        });
    } else if (answer == 3) {
        Request.get("https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=8c61d66d36a04d9ca70c78d63f7a1aad", (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            console.dir(JSON.parse(body));
        });
    } else if (answer == 4) {
        Request.get("https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=8c61d66d36a04d9ca70c78d63f7a1aad", (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            console.dir(JSON.parse(body));
        });
    }

    rl.close();

});
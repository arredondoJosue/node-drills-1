const fs = require("fs");
const path = require("path");

/* CREATE FILE:
    ==> This will create a file for you and name it. By default it is creating the file in the same location as this directory
    ==> You can use the .appendFile() method to make a file. .appendFile() will look to see if the file exists, if so it will add this data to the file, if it does not exist, it will create the file and add the data. .appendFile() takes in 3 parameters: 1) filepath or path to file that is supposed to exist, 2) data, which will most often be a string, and 3) a callback that will handle errors and success (can be defined outside or can be an anonymous arrow function). 

    BOILER PLATE HINT: fs.appendFile("./", "", () => {})
*/

fs.appendFile(path.join(__dirname, "text.txt"), "Hello World", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File successfully created");
  }
});

/* READ FILE:
 */

fs.readFile(__dirname + "/text.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

/* UPDATE A FILE:
    ==> This re-writes a file comletely. 
 */

fs.writeFile(__dirname + "/text.txt", "Hello Josue", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful rewrite");
  }
});

/* RENAME A FILE:
 */

fs.rename(__dirname + "/text.txt", __dirname + "/greeting.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File successfully renamed");
  }
});

/* DELETE A FILE:
 */

fs.unlink(__dirname + "/text.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File successfully deleted/unlinked");
  }
});

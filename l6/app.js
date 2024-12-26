const fs = require("fs");

//! --------- Reading from a file📖 --------
//console.log("Before reading ASYNC 1️⃣...");
fs.readFile("file.txt", "utf-8", (err, data) => {
  //Async/Non-Blocking
  if (err) throw err;
  //console.log(`The Data: ${data} 2️⃣...`);
});
//console.log("After reading ASYNC 3️⃣...");

//console.log("Before reading SYNC 4️⃣");
const data = fs.readFileSync("file.txt", "utf-8");
// console.log(`Sync data: ${data} 5️⃣`);
// console.log(`After reading SYNC 6️⃣`);

//! --------- Writing to a file✍🏻 --------

console.log("Before writing ASYNC 1️⃣...");
fs.writeFile("newfile.txt", "Hello, Async write!", (err) => {
  if (err) throw err;
  console.log("The file has been saved ASYNC WRITE! 2️⃣");
});

console.log("After writing ASYNC 3️⃣");

console.log("Before writing SYNC 4️⃣");

fs.writeFileSync("newfile.txt", "Hello, Sync write plzzz!");
fs.appendFile("newfil.txt", "\nAppending file asynchronously...", (err) => {
  if (err) throw err;
  console.log("The file has APPENDED! ✅");
});

console.log("The file has been saved SYNC WRITE! 5️⃣");

//! --------- Removing Files 🚮--------
//Not recommended
fs.unlink("newfil.txt", (err) => {
  if (err) throw err;
  console.log("File deleted successfully! ✅ 🚮 ");
});

//! RECOMMENDED APPROACHES 🌟🌟🌟
//! Read
const readStream = fs.createReadStream("file.txt", "utf-8");
//console.log(readStream)
readStream.on("data", (chunk) => {
  console.log(chunk);
});
readStream.on("end", () => {
  console.log("--------- End of file -------");
});

//! Write
const writeStream = fs.createWriteStream("newfile2.txt", "utf-8");

writeStream.write("Hello, I am writing data to a file using streams! ✍🏻");

//! PIPE - transfering data from one file to another 📁 => 📁
const readStream2 = fs.createReadStream("file.txt", "utf-8");
const writeStream2 = fs.createWriteStream("newfile3.txt", "utf-8");

readStream2.pipe(writeStream2);

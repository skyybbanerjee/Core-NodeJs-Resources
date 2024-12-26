const Emitter = require("./emitter"); //custom events
const BuiltInEmitter = require("events"); //core NodeJs module events
const events = require("./config").events;

//console.log(events);

const emitter = new Emitter();
const builtIn = new BuiltInEmitter();
emitter.on(events.GREET, function () {
  console.log(`Hello👋🏻`);
});

emitter.on(events.FILEOPENED, function () {
  console.log(`Files(s) opened successfully📂`);
});

emitter.on(events.FILESAVED, function () {
  console.log(`Files(s) saved successfully✔️`);
});

emitter.on(events, function () {});

//console.log(emitter);

emitter.emit(events.FILEOPENED);
emitter.emit(events.FILESAVED);
emitter.emit(events.GREET);

// events ->
//making our own event-emitters
function Emitter() {
  this.events = {};
}

Emitter.prototype.on = function (type, evtListener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(evtListener);
};

//loop on -> [cb1, cb2, cb3, ...cbN etc,]

Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach((listener) => {
      listener();
    });
  }
};

module.exports = Emitter;

function Stopwatch(){
  let startTime = 0;
  let stopTime = 0;
  let isStarted = false;

  let startTimer = function(){
    startTime = new Date();
    isStarted = true;
  };

  let stopTimer = function(){
    stopTime = new Date();
    isStarted = false;
  };

  this.start = function(){
    if( isStarted )
      throw new Error("Stopwatch has already started.")
    startTimer();
  };

  this.stop = function(){
    if ( !isStarted )
      throw new Error("Stopwatch is not started.")
    stopTimer();
  };

  this.reset = function() {
    startTime = 0;
    stopTime = 0;
  };

  Object.defineProperty(this, 'resetTimer', {
    set: function() {
      startTime = 0;
      stopTime =  0;
    },
    writable: false,
    enumerable: false,
    configurable: false
  })

  Object.defineProperty(this, 'duration', {
    get: function() {
      if( startTime == 0 )
        return 0;
      if( !isStarted )
        return (stopTime - startTime) / 1000;
      stopTime = new Date();
      return (stopTime - startTime) / 1000;
    }
  });
};

Stopwatch.prototype.start = function() {

}

const sw = new Stopwatch();

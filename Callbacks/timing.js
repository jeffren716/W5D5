class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    this.date = new Date();
    this.date.setSeconds(45);
    this.date.setMinutes(34);
    this.date.setHours(9);
    this.printTime();
    setInterval(function() {
      clock._tick();
    }, 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(this.date.toString().slice(16,25));
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.date.setSeconds(this.date.getSeconds() + 1);
    this.printTime();
  }
}

const clock = new Clock();

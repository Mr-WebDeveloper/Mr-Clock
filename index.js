  var h = "00";
  var m = "00";
  var s = "00";

  var x = "00";
  var y = "00";
  var z = "00";
  var flag = "true";
  var reset = 0;
  var timer = 0;


  let startBtn = document.getElementById('start'); 
  let stopBtn = document.getElementById('stop'); 
  let resetBtn = document.getElementById('reset');

  var count = true;
  let getbtn = document.getElementById("get");
  var stopWatchTime = false;
  var currenttime = false;

  var time = true;
  var stopwatchTitle = false;


  // Time Function
  function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();

      m = checkTime(m);
      s = checkTime(s);

      document.getElementById('time').innerHTML = h + ":" + m + ":" + s; 
      t = setTimeout(function() {
        startTime()
      }, 500);
      // isTime = h + ":" + m + ":" + s ; 
      return (h + ":" + m + ":" + s);
    }
    startTime();
    

    // Get Time

    getbtn.addEventListener('click', function (){
        getbtn.setAttribute('disabled', '');          
        time = true;
        stopwatchTitle = false;
        startBtn.removeAttribute('disabled');
        stopBtn.removeAttribute('disabled');
        resetBtn.removeAttribute('disabled');
    });
    
    function getTime()
    {
      currenttime = startTime();
      document.getElementById('currenttime').innerHTML = currenttime; 
      a = setTimeout(function() {
          getTime()
        }, 500);
        // isTime = currenttime;
        if(time)
        {
          document.title = "Mr-Clock - " + currenttime; 
          stopwatchTitle= false;
        }
    }




    startBtn.addEventListener('click', function () { 
        // titleText = "stopwatch";
        stopwatchTitle = true;
        time = false;
        flag = true; 
        getStopWatch();
        startBtn.setAttribute('disabled', '');
        stopBtn.removeAttribute('disabled');
        resetBtn.removeAttribute('disabled');
    });
    stopBtn.addEventListener('click', function () { 
        flag = false;
        startBtn.removeAttribute('disabled');
        stopBtn.setAttribute('disabled', '');
        resetBtn.removeAttribute('disabled');
    }); 
    resetBtn.addEventListener('click', function () {
        flag = false;
        reset = true;
        h = "00";
        m = "00";
        s = "00";
        clearTimeout(start);
        startBtn.removeAttribute('disabled');
        stopBtn.removeAttribute('disabled');
        resetBtn.setAttribute('disabled', '');
        document.getElementById("stopwatch").innerHTML = h + ":" + m + ":" + s;
        stopWatchTime = h + ":" + m + ":" + s;
    });    





    //  Stop Watch
    
    function getStopWatch()   
    {
      function checkdigit(i)
      {
        if(i < 10)
        {
          i = "0" + i;
        }
        return i;
      }

      if(flag)
      {
        var start = setTimeout(() => {
          getStopWatch();
        },1000)
      }

      if(flag)
      {
        s++;
        z = checkdigit(s);
      }
      
      if(s > 59)
      {
        s = "00";
        m++;
        x = checkdigit(m);
      }
      if(m > 59)
      {
        m = "00";
        h++;
        y = checkdigit(h);
      }

      if(flag)
      {
        document.getElementById("stopwatch").innerHTML = y + ":" + x + ":" + z;
        stopWatchTime = y + ":" + x + ":" + z;
      }

      if(reset)
      {
        h = 0;
        m = 0;
        s = 0;
        reset = false;
      }
      if(stopwatchTitle)
      {
        document.title = "Mr-Clock - " + stopWatchTime; 
        getbtn.removeAttribute('disabled');
        time = false;
      }
    }



    // countDown Timer

    const startTimer = document.getElementById("startTimer");
    const stopTimer = document.getElementById("stopTimer");
    const resetTimer = document.getElementById("resetTimer");
    var timerValue = 0;

    startTimer.addEventListener('click', function (){
      timerValue = document.getElementById("timeInput").value;
        [hours, minutes, seconds] = timerValue.split(":");

      startTimerFunction(hours, minutes, seconds);

    });


    startTimer.addEventListener('click', function () { 
        // titleText = "stopwatch";
        // stopwatchTitle = true;
        // time = false;
        // flag = true; 
        // getStopWatch();
        startTimer.setAttribute('disabled', '');
        stopTimer.removeAttribute('disabled');
        resetTimer.removeAttribute('disabled');
    });
    stopTimer.addEventListener('click', function () { 
        flag = false;
        startTimer.removeAttribute('disabled');
        stopTimer.setAttribute('disabled', '');
        resetTimer.removeAttribute('disabled');
    }); 
    resetTimer.addEventListener('click', function () {
        // flag = false;
        // reset = true;
        h = "00";
        m = "00";
        s = "00";
        clearTimeout(start);
        startTimer.removeAttribute('disabled');
        stopTimer.removeAttribute('disabled');
        resetTimer.setAttribute('disabled', '');
        document.getElementById("timeOutput").innerHTML = h + ":" + m + ":" + s;
        document.getElementById("timeInput").value = h + ":" + m + ":" + s;
        // stopWatchTime = h + ":" + m + ":" + s;
    });    


  
  function startTimerFunction(hours, minutes, seconds) {

    var setTimerValue = setInterval(function () {

      // hours = hours < 10 ? "0" + hours : hours;
      // minutes = minutes < 10 ? "0" + minutes : minutes;
      // seconds = seconds < 10 ? "0" + seconds : seconds;

        if (seconds > 0) {
            seconds--;
        } else if (minutes > 0) {
            seconds = 59;
            minutes--;
        } else if (hours > 0) {
            seconds = 59;
            minutes = 59;
            hours--;
        }

        if (hours == 0 && minutes == 0 && seconds == 0) {
            clearInterval(setTimerValue);
            var audio = new Audio('Alarmclock.mp3');
            audio.play();
        }

        updateDisplay(hours, minutes, seconds);
        // console.log(hours, minutes, seconds);
      }, 100);
    }
    
    function updateDisplay(hours, minutes, seconds) {
      // hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      var finalTime = hours + ":" + minutes + ":" + seconds;
    document.getElementById("timeOutput").innerHTML = finalTime;
    console.log(finalTime);
    console.log(hours + ":" + minutes + ":" + seconds);
  }


    
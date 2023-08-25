// Debounce and Throttle both are used for limiting the rate of function execution
// Debounce is a decorator function which takes a function and delay
// Work of debounce is to call the function which is passed to it after the delay
// But if in case before the delay timing function is called again then it will discard the previous call and will call the last call of function after delay

/* let counter = 0;
const getData = () => {
  // calls an api and gets data
  console.log('Fetching data',counter++)
}

const doSomeMagic = function(fn,delay){  
   let timer;
    return function(){
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(()=>{
        fn.apply(context,args)
      },delay)
    }
}

const betterFunction = doSomeMagic(getData,1000) */

const inputBox = document.getElementById("input-event");

//===========Decorator Function=============//

/* function decorater(func) {
  return function (...args) {
    console.log("You are calling function returned from decorater");
    console.log(args);
    console.log("this", this.a);
    func.call(this, ...args);
  };
}

function hi(name, surname) {
  console.log("Hi", name + " " + surname);
}

let decorated = decorater(hi);

var a = "checking this";

decorated("Ajay", "Arya");

inputBox.addEventListener("input", decorater); */

// Decounce function

function debounce(func, delay) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.call(this, ...args);
    }, delay);
  };
}

// function which is to be called ultimately from inside of  debounce
const funcPassed = (e, name, title) => {
  console.log(e.target.value);
  console.log(`${name} ${title}`);
};

// debounce function called and stored returned function in variable decoratedFunction which is  passed to eventlistner
let decoratedFunction = debounce(funcPassed, 1000);

// Called with arguments
inputBox.addEventListener("input", (e) => decoratedFunction(e, "ajay", "arya"));

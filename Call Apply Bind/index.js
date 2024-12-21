//=========== CALL =========== //

const user1 = {
  firstName: "Ajay",
  lastName: "Arya",
  about: function (hobby, musician) {
    console.log(this.firstName, this.lastName, hobby, musician);
  },
};

const user2 = {
  firstName: "Sanjay",
  lastName: "Arya",
};

console.log(user1.about());

// User 2 does not have about function but want to borrow from user1
// so call will be used
// first argument of call is reference of this  or with which object this will be bind
// so in first argument we can paas object

// So here about is called from user1 only but as user2 is passed in first argument of call so reference of this will be of user 2
// so in about function this.firstName will be of user2 only
console.log(user1.about.call(user2));

// with arguments

console.log(user1.about.call(user2, "music", "rahman"));

// Now we can create a function outside only not in object and we can call that function with reference of any object using call and passing reference of this

function about2(hobby, musician) {
  console.log(this.firstName, this.lastName, hobby, musician);
}

// about2 called with user1 as this
console.log(about2.call(user1, "Dance", "Hritik"));

// about2 called with user2 as this
console.log(about2.call(user2, "Song", "Main hoon na"));

//=========== APPLY =========== //

// Apply is same as call only difference is the extra arguments  passed in apply will be in array
// No need to spread or extract values from array in the function

console.log(about2.apply(user2, ["Song", "Main hoon na"]));

//=========== BIND =========== //

// Bind also works like call, only difference is it does not execute the function, rather it returns a function which can be called later. It will be called later with the reference of this which was passed in bind
// Arguments will be passed same as passed in call
// Arguments will not be passed in array

// Example 1
const returnedFunction = user1.about.bind(user2, "song", "dil se");

// Example 2
const returnedFunction2 = about2.bind(user2, "song", "dil se");

returnedFunction();
returnedFunction2();

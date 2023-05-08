//function to add int
result();
function result() {
  const y = 5;
  const x = 6;
  add(y, x);
}

function add(y, x) {
  const z = y + x;
  return console.log(z);
}

print = (output) => {
  console.log(output);
};

let username;
const lastname = "prosper";
const nickname = "Noir";

let outcome = () => {
  const name = username ? lastname : nickname;
  return name;
};

let new_outcome = () => {
  invert();
  const name = username ? lastname : nickname;
  return name;
};

function invert() {
  username = !username;
}

print(outcome());
print(new_outcome());

//arr methods (some)
function checkAvailabilty(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
}
function func() {
  // orignal function
  let arr = [2, 5, 8, 1, 4];
  console.log(checkAvailabilty(arr, 5));
}
func();

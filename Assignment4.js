function cubeNumber(number) {
  if (typeof number === "number") {
    cube = number ** 3;
    return cube;
  } else {
    console.log("Enter a numeric type!!");
  }
}
var numCube = cubeNumber(4);
console.log(numCube);

function matchFinder(string1, string2) {
  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}

var matchIncludes = matchFinder("John Doe", "ohn");
console.log(matchIncludes);

function sortMaker(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > 0 || arr[i + 1] > 0) {
      if (arr[i] < arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        console.log(arr);
      } else if (arr[i] === arr[i + 1]) {
        console.log("equal");
      }
    } else if (arr[i] < 0 || arr[i + 1] < 0) {
      console.log("invalid input");
    }
  }
}

var arry = [2, 7];
sortMaker(arry);

function findAddress(obj) {
  var values = Object.values(obj);
  var output = values.join(",");
  console.log(output);
}

var ob = { street: 10, house: "15A", society: "Earth Perfect" };
findAddress(ob);

function canPay(changeArray, totalDue) {
  sum = 0;
  for (let i = 0; i <= changeArray.length - 1; i++) {
    sum += changeArray[i];
  }
  if (sum >= totalDue) {
    return true;
  } else {
    return false;
  }
}

var shamorto = canPay([1, 0, 5], 10);
console.log(shamorto);

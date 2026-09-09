/* Example1
*
**
***
****
*****
*/
for (let i = 1; i <= 5; i++) {
  let row = "";               //creating empty string
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}


/* Example2
*****
****
***
**
*
*/
for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

/* Example3
1
12
123
1234
12345
*/
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}


/* Example4
1
22
333
4444
55555
*/
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i;
  }
  console.log(row);
}


/* Example5
****
****
****
****
*/
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    row += "*";
  }
  console.log(row);
}

/*Example6
    *
   **
  ***
 ****
*****
*/
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {      //to print spaces
        row += " ";
    }
    for (let j = 1; j <= i; j++) {      //to print stars
        row += "*";
    }
    console.log(row);
}

/*Example7
A
AB
ABC
ABCD
ABCDE
*/
let n1 = 5;
for (let i = 1; i <= n1; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += String.fromCharCode(64 + j);
    }
    console.log(row);
}

/*Example8
A
BB
CCC
DDDD
EEEEE
*/
let n2 = 5;
for (let i = 1; i <= n2; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += String.fromCharCode(64 + i);
    }
    console.log(row);
}

/*Example9
*****
*   *
*   *
*   *
*****
*/
let n3 = 5;
for (let i = 1; i <= n3; i++) {
    let row = "";
    for (let j = 1; j <= n3; j++) {
        if (i === 1 || i === n3 || j === 1 || j === n3) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}

/*Example10
*
**
* *
*  *
*****
*/
let n4 = 5;
for (let i = 1; i <= n4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i || i === n4) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}




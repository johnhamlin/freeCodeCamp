'use strict';

function checkCashRegister(price, cash, cid) {
  const values = [
    ['ONE HUNDRED', 100],
    ['TWENTY', 20],
    ['TEN', 10],
    ['FIVE', 5],
    ['ONE', 1],
    ['QUARTER', 0.25],
    ['DIME', 0.1],
    ['NICKEL', 0.05],
    ['PENNY', 0.01],
  ];
  let owed = cash - price;
  let output = {
    status: '',
    change: [],
  };
  const cidCopy = JSON.parse(JSON.stringify(cid));

  // this version mutates cid
  for (const [bill, value] of values) {
    // add current bill to change array and initialize amount to 0
    // output.change.push([bill, 0]);

    // Counting down from 100 Dollar Bills, find the first bill available in the change drawer
    let cidCurrent = cidCopy.find(([cidBill]) => cidBill === bill);
    // If that bill isn't available, break out of this iteration and continue to next bill
    if (cidCurrent === undefined) continue;

    // make change
    while (owed > 0 && cidCurrent[1] > 0 && owed >= value) {
      // if what's still owed is bigger than the current bill being addressed
      if (owed >= value) {
        let changeCurrent = output.change.find(
          ([changeBill]) => changeBill === bill
        );
        if (changeCurrent === undefined) {
          output.change.push([bill, 0]);
          changeCurrent = output.change.find(
            ([changeBill]) => changeBill === bill
          );
        }

        changeCurrent[1] = +(changeCurrent[1] + value).toFixed(2);
        owed = +(owed - value).toFixed(2);
        cidCurrent[1] = (cidCurrent[1] - value).toFixed(2);
      }
    }
  }

  // check if there's any cash left in the drawer to set status
  // output.status = cid.some(([, val]) => val > 0) ? 'OPEN' : 'CLOSED';
  if (cidCopy.some(([, val]) => val > 0)) {
    output.status = 'OPEN';
  } else {
    output.status = 'CLOSED';
    output.change = cid;
  }

  if (owed > 0) {
    output.status = 'INSUFFICIENT_FUNDS';
    output.change = [];
  }

  return output;
}

// const temp = checkCashRegister(19.5, 20, [
//   ['PENNY', 1.01],
//   ['NICKEL', 2.05],
//   ['DIME', 3.1],
//   ['QUARTER', 4.25],
//   ['ONE', 90],
// ]);
// console.log(temp);

console.log(
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
); // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// ); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 1],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// ); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ])
); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

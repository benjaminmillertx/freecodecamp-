// Benjamin Millers Soultion
function checkCashRegister(price, cash, cid) {
  const currencyUnit = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  let changeDue = cash - price;
  let totalCid = cid.reduce((sum, [_, amount]) => sum + amount, 0);
  totalCid = Math.round(totalCid * 100) / 100; // Fix potential floating-point issues

  if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCid === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  let change = [];
  for (let i = currencyUnit.length - 1; i >= 0; i--) {
    const [unit, value] = currencyUnit[i];
    let amountAvailable = cid[i][1];
    let amountToReturn = 0;

    while (changeDue >= value && amountAvailable > 0) {
      changeDue = Math.round((changeDue - value) * 100) / 100;
      amountAvailable = Math.round((amountAvailable - value) * 100) / 100;
      amountToReturn += value;
    }

    if (amountToReturn > 0) {
      change.push([unit, amountToReturn]);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change };
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);

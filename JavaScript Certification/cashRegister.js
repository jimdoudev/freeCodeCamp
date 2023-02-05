const currency = {
    "PENNY":0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }
  
  function sortAndFilter(register) {
    let registerCopy = JSON.parse(JSON.stringify(register));
    return registerCopy.sort((a, b) => currency[a[0]] - currency[b[0]]).filter(e => e[1] > 0).reverse();
  }
  
  function giveChange(availableChange, remChangeDue) {
    let initialAmount = availableChange[1];
    while(availableChange[1] > 0 && remChangeDue > 0) {
        availableChange[1] = (availableChange[1] -currency[availableChange[0]]).toFixed(2);
        remChangeDue = (remChangeDue - currency[availableChange[0]]).toFixed(2);
        if(remChangeDue < currency[availableChange[0]]) {
            break
        }
    }
    let changeGiven = (initialAmount - availableChange[1]).toFixed(2);
    return [availableChange, remChangeDue, changeGiven]
  }
  
  function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let response = {status:"", change:[]}
    let sortedCid = sortAndFilter(cid);
    sortedCid.forEach(e => {
      if(Math.floor(change / currency[e[0]]) >= 1) {
        let result = giveChange(e, change);
        response.change.push([e[0], parseFloat(result[2])]);
        e[1] = result[0][1];
        change = result[1];
      }
    })
    if(change > 0) {
        response.status = "INSUFFICIENT_FUNDS";
        response.change = []
    } else {
        let sum = 0;
        sortedCid.forEach(e => sum += parseFloat(e[1]));
        if(sum > 0) {
            response.status = "OPEN";
        } else {
            response.status = "CLOSED";
            response.change = cid;
        }
    }
    
    return response;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
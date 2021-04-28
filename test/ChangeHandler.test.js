const ChangeHandler = require("../src/js/ChangeHandler");

describe("ChangeHandler", function() {
  test("class is defined", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
  });

  // TODO: Add additional tests below...

  test("amountDue is set based on an argument", function() {
    // Remember, you can arrange, act, and assert...start small
    const change = new ChangeHandler(5);
    expect(change.amountDue).toBe(5);
  });


  test("cashTendered is set to zero", function() {
    const change = new ChangeHandler(5);
    expect(change.cashTendered).toBe(0);
  });




  test("Inserting a quarter adds 25", function() {
    const change = new ChangeHandler(25);
    change.insertCoin("quarter");
    expect(change.cashTendered).toBe(25);
  });


  test("Inserting a dime adds 10 ", function() {
    const change = new ChangeHandler(10);
    change.insertCoin("dime");
    expect(change.cashTendered).toBe(10);
  });


  test("Inserting a nickel adds 5", function() {
    const change = new ChangeHandler(5);
    change.insertCoin("nickel");
    expect(change.cashTendered).toBe(5);
  });


  test("Inserting a penny adds 1", function() {
    const change = new ChangeHandler(1);
    change.insertCoin("penny");
    expect(change.cashTendered).toBe(1);
  });



  // e.
  // test("Calling function multiple times continues to add on to the amount", function() {
  //   const change = new ChangeHandler(1);
  //   change.insertCoin("penny");
  //   change.insertCoin("penny");
  //   change.insertCoin("penny");
  //   change.insertCoin("penny");
  //   expect(change.cashTendered).toBe(1);
  // });

  
  
  test("Returns true if cashTendered more than amountDue", function() {
    const change = new ChangeHandler(50);
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("nickel");
    expect(change.isPaymentSufficient()).toEqual(true);
  });


  test("Returns false if cashTendered less than amountDue", function() {
    const change = new ChangeHandler(100);
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("nickel");
    expect(change.isPaymentSufficient()).toEqual(false); 
  });


  test("Returns true if cashTendered equal to amountDue", function() {
    const change = new ChangeHandler(50);
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("nickel");
    expect(change.isPaymentSufficient()).toEqual(true);
  });



  test("32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2", function() {
    const change = new ChangeHandler(100);
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("nickel");
    change.insertCoin("penny");
    change.insertCoin("penny");
    expect(change.giveChange()).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2
    })
  });





});
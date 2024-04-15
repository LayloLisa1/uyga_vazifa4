function checkout(items) {
    let subtotal = 0;
    let taxRate = 0.06;
    let total = 0;
  
    for (let item of items) {
      subtotal += item.prc * item.qty;
      if (item.taxable) {
        total += (item.prc * item.qty) * (1 + taxRate);
      } else {
        total += item.prc * item.qty;
      }
    }
  
    return total.toFixed(2); 
  }
  let items = [
    { desc: "kartoshka chiplari", prc: 2, qty: 2, taxable: false },
    { desc: "gazlangan suv", prc: 3, qty: 2, taxable: false },
    { desc: "qog'oz idishlar", prc: 5, qty: 1, taxable: true }
  ];
  
  console.log(checkout(items));
  
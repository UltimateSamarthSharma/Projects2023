const user = {
  name: "Samarth Sharma",
  balance: 1000
};
function check_balance() {
  document.write(`Hi, ${user.name}! Your updated Paytm Payments Bank balance is Rs.${user.balance}/-.<br><br>`);
}
function add_money(amount) {
  user.balance += amount;
  document.write(`Added Rs.${amount}/- to your Paytm Payments Bank Account. Your updated Paytm Payments Bank balance is Rs.${user.balance}/-.<br><br>`);
}
function withdraw_money(amount) {
  if (amount > user.balance) {
    document.write(`Insufficient balance. Withdrawal failed.<br><br>`);
  } else {
    user.balance -= amount;
    document.write(`Withdrew Rs.${amount}/- from your Paytm Payments Bank Account. Your updated Paytm Payments Bank balance is Rs.${user.balance}/-.<br><br>`);
  }
}
check_balance();
add_money(500);
withdraw_money(750);
add_money(250);
withdraw_money(1250);
add_money(1000);
check_balance();
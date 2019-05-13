//Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//Calculate results
function calculateResults(e){
  console.log('calculating...');
  //UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
     
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12
  const calculatedPayments = parseFloat(years.value) * 12;


  e.preventDefault();
}
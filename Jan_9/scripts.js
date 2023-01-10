const money= document.querySelector('money');
const months= document.querySelector('months');
const interest= document.querySelector('interest');

const initialAmount= document.querySelector('initialAmount');
const withInterest= document.querySelector('withInterest');
const interestBar= document.querySelector('.interestBar');

const initialDeposit = parseFloat(money.value);
const monthsValue = parseFloat(mnths.value) / 12;
const interestValue = parseFloat(interest.value) * 0.01;



const loanAmount = document.querySelector('.loan-amount')
const interestRate = document.querySelector('.interest-rate')
const years = document.querySelector('.year')
const calculateBtn = document.querySelector('.calculate-btn')
const loading = document.querySelector('.loading-img')
const monthlyPayment = document.querySelector('.monthly-payment')
const totalPayment = document.querySelector('.total-payment')
const totalInterest = document.querySelector('.total-interest')
const resultSection = document.querySelector('.result-section')
const error = document.querySelector('.error-page')
const errorLoanAmount = document.querySelector('#error-loan-amount')
const errorInterestRate = document.querySelector('#error-interest-rate')
const errorYear = document.querySelector('#error-year')


//A = P (r (1+r)^n) / ( (1+r)^n -1 )

// A = Payment amount per period

// P = Initial principal or loan amount (in this example, $10,000)

// r = Interest rate per period (in our example, that's 7.5% divided by 12 months)

// n = Total number of payments or periods

// Remove the error when typing
loanAmount.onkeyup = () => {
    error.style.display = 'none'
    resultSection.style.display = 'none'
    console.log('this')
}


// Calculate function
const calculate = () => {

    let loanAmountValue = loanAmount.value;
    let interestRateValue = interestRate.value;
    let yearsValue = years.value;

    
    let interestRateInHundreds = (interestRateValue / 100) / 12
    let onePlusR = 1 + interestRateInHundreds
    let mathPower = Math.pow(onePlusR, yearsValue*12)

    let monthlyCalculation = loanAmountValue * (interestRateInHundreds * mathPower) / (mathPower - 1);
    let totalPaymentCalculation = monthlyCalculation*(yearsValue*12)

    let totalInterestCalculation = totalPaymentCalculation - loanAmountValue

    // Display the output here
    if (isNaN(monthlyCalculation.toFixed(2))) {
        loading.style.display = 'block'
        
        setTimeout(() => {
            loading.style.display = 'none'
            error.style.display = 'block'
        }, 2000)

        // error.style.display = ''
        resultSection.style.display = 'none'
        
    } else {
        loading.style.display = 'block'
        error.style.display = 'none'
      
        setTimeout(() => {
            loading.style.display = 'none'
            resultSection.style.display = 'block'
            monthlyPayment.value = monthlyCalculation.toFixed(2)
            totalPayment.value = totalPaymentCalculation.toFixed(2)
            totalInterest.value = totalInterestCalculation.toFixed(2)
        }, 2000)

    }

}

// Calculate Button
calculateBtn.addEventListener('click', calculate)
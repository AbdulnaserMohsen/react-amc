
/**
 * Loan calculator module
 */

/**
 * Initialize the loan calculator
 */
export function initLoanCalculator() {
  const steps = document.querySelectorAll('.calculator-steps .step');
  const contents = document.querySelectorAll('.calculator-content');
  const nextButtons = document.querySelectorAll('.next-step');
  const prevButtons = document.querySelectorAll('.prev-step');
  const loanTypeButtons = document.querySelectorAll('.loan-type-tab');
  const termPresets = document.querySelectorAll('.term-preset');
  
  // Loan parameters
  let currentStep = 1;
  let loanType = 'individual';
  let loanAmount = 5000;
  let loanTerm = 24;
  const interestRates = {
    individual: 0.12, // 12% annual interest rate
    mses: 0.09, // 9% annual interest rate
  };
  
  // Initialize calculator
  updateStepUI();
  updateCalculation();
  
  // Step navigation
  nextButtons.forEach(button => {
    button.addEventListener('click', () => {
      if(currentStep < 3) {
        currentStep++;
        updateStepUI();
      }
    });
  });
  
  prevButtons.forEach(button => {
    button.addEventListener('click', () => {
      if(currentStep > 1) {
        currentStep--;
        updateStepUI();
      }
    });
  });
  
  // Loan type selection
  loanTypeButtons.forEach(button => {
    button.addEventListener('click', () => {
      loanTypeButtons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      loanType = button.getAttribute('data-type');
      
      // Update the loan info display
      const typeDisplay = document.querySelector('.loan-type-info h4');
      const typeDescription = document.querySelector('.loan-type-info p');
      const rateDisplay = document.querySelector('.loan-type-info .mt-3');
      
      if(typeDisplay && typeDescription && rateDisplay) {
        typeDisplay.textContent = loanType === 'individual' ? 'Individual Loan' : 'MSE Loan';
        typeDescription.textContent = loanType === 'individual' 
          ? 'Personal loans with competitive rates designed to meet your individual needs.'
          : 'Business loans specifically tailored for Micro and Small Enterprises.';
        rateDisplay.innerHTML = `<span class="font-medium">Interest rate:</span> ${(interestRates[loanType] * 100).toFixed(2)}%`;
      }
      
      // Update rate in summary
      const summaryRate = document.getElementById('summaryRate');
      if (summaryRate) {
        summaryRate.textContent = `${(interestRates[loanType] * 100).toFixed(2)}%`;
      }
      
      updateCalculation();
    });
  });
  
  // Amount slider
  const amountSlider = document.getElementById('amountSlider');
  const amountInput = document.getElementById('loanAmount');
  
  if(amountSlider && amountInput) {
    amountSlider.addEventListener('input', () => {
      loanAmount = parseInt(amountSlider.value);
      amountInput.value = loanAmount;
      updateCalculation();
    });
    
    amountInput.addEventListener('input', () => {
      const value = parseInt(amountInput.value);
      if(!isNaN(value) && value >= 200 && value <= 50000) {
        loanAmount = value;
        amountSlider.value = value;
        updateCalculation();
      }
    });
  }
  
  // Term slider
  const termSlider = document.getElementById('termSlider');
  const termValue = document.getElementById('termValue');
  
  if(termSlider && termValue) {
    termSlider.addEventListener('input', () => {
      loanTerm = parseInt(termSlider.value);
      termValue.textContent = `${loanTerm} months`;
      updateCalculation();
    });
  }
  
  // Term presets
  termPresets.forEach(preset => {
    preset.addEventListener('click', () => {
      termPresets.forEach(p => p.classList.remove('active'));
      preset.classList.add('active');
      loanTerm = parseInt(preset.getAttribute('data-term'));
      
      if(termSlider && termValue) {
        termSlider.value = loanTerm;
        termValue.textContent = `${loanTerm} months`;
      }
      
      updateCalculation();
    });
  });
  
  function updateStepUI() {
    steps.forEach((step, index) => {
      if(index + 1 <= currentStep) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });
    
    contents.forEach((content, index) => {
      if(index + 1 === currentStep) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    });
  }
  
  function updateCalculation() {
    const rate = interestRates[loanType] / 12; // Monthly interest rate
    const terms = loanTerm; // Months
    
    // Monthly payment formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const monthlyPayment = (loanAmount * rate * Math.pow(1 + rate, terms)) / (Math.pow(1 + rate, terms) - 1);
    
    const totalPayment = monthlyPayment * terms;
    const totalInterest = totalPayment - loanAmount;
    
    // Update the UI with proper formatting
    const monthlyPaymentElement = document.getElementById('monthlyPayment');
    const totalPaymentElement = document.getElementById('totalPayment');
    const totalInterestElement = document.getElementById('totalInterest');
    const summaryAmountElement = document.getElementById('summaryAmount');
    const summaryTermElement = document.getElementById('summaryTerm');
    
    if (monthlyPaymentElement) {
      monthlyPaymentElement.textContent = `${monthlyPayment.toFixed(2)} JOD`;
    }
    
    if (totalPaymentElement) {
      totalPaymentElement.textContent = `${totalPayment.toFixed(2)} JOD`;
    }
    
    if (totalInterestElement) {
      totalInterestElement.textContent = `${totalInterest.toFixed(2)} JOD`;
    }
    
    if (summaryAmountElement) {
      summaryAmountElement.textContent = `${loanAmount.toLocaleString()} JOD`;
    }
    
    if (summaryTermElement) {
      summaryTermElement.textContent = `${loanTerm} Months`;
    }
  }
}

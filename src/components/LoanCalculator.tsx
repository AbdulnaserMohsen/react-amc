import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { initLoanCalculator } from '../scripts/index.js';

const LoanCalculator = () => {
  useEffect(() => {
    // Initialize the loan calculator when the component mounts
    initLoanCalculator();
    
    // Clean up function if needed
    return () => {
      // Any cleanup code if necessary
    };
  }, []);

  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanTenure, setLoanTenure] = useState(12);
  const [interestRate, setInterestRate] = useState(5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    // Calculate monthly payment
    const calculateMonthlyPayment = () => {
      const principal = loanAmount;
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTenure;

      const payment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
      setMonthlyPayment(payment > 0 ? payment : 0);
    };

    calculateMonthlyPayment();
  }, [loanAmount, loanTenure, interestRate]);

  return (
    <section className="bg-gray-50 py-12">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Loan Calculator</h2>
          <p className="text-gray-600">Calculate your estimated monthly payment</p>
        </div>
        <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Loan Amount */}
            <div>
              <Label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
                Loan Amount (JOD)
              </Label>
              <Input
                type="number"
                id="loanAmount"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-amc-turquoise focus:ring-amc-turquoise text-base"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
            </div>

            {/* Loan Tenure */}
            <div>
              <Label htmlFor="loanTenure" className="block text-sm font-medium text-gray-700">
                Loan Tenure (Months)
              </Label>
              <Input
                type="number"
                id="loanTenure"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-amc-turquoise focus:ring-amc-turquoise text-base"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Interest Rate Slider */}
          <div className="mt-6">
            <Label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">
              Interest Rate (%)
            </Label>
            <Slider
              id="interestRate"
              className="mt-2"
              defaultValue={[interestRate]}
              max={20}
              step={0.5}
              onValueChange={(value) => setInterestRate(value[0])}
            />
            <p className="text-sm text-gray-500 mt-1">Selected Rate: {interestRate}%</p>
          </div>

          {/* Monthly Payment Output */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800">Estimated Monthly Payment</h3>
            <p className="text-2xl font-bold text-amc-turquoise">JOD {monthlyPayment.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;

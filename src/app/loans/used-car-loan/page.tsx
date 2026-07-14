"use client";

import React from "react";
import LoanPageTemplate, { ProductConfig } from "@/components/loans/LoanPageTemplate";

const usedCarLoanConfig: ProductConfig = {
  loanType: "Used Car Loan",
  heroDescription: "Reduce your monthly financial commitments by refinancing your existing car loan at competitive interest rates. Save on EMIs and access additional liquidity for your personal needs, all while keeping your car.",
  interestRateText: "12.00% p.a.",
  maxRepaymentTenure: "5 Years",
  heroFeatures: [
    "Competitive rates starting at 12% p.a.",
    "Finance up to 90% of car market value (up to 100% with select lenders)",
    "Flexible repayment tenure up to 5 years",
    "Processing fees from 0.5% - 2% onwards"
  ],
  whyChooseUsFeatures: [
    {
      title: "Quick Approval",
      desc: "Get initial sanction checks from our partner banking portals within hours of file submission."
    },
    {
      title: "Lowest Interest Rates",
      desc: "Rate packages beginning at competitive pricing slabs customized on your credit reports."
    },
    {
      title: "Digital Process",
      desc: "Secure online documents upload with minimal physical interaction needed."
    },
    {
      title: "Expert Guidance",
      desc: "Dedicated financial advisors guide you through product comparisons and validation cycles."
    },
    {
      title: "Secure Application",
      desc: "Your data privacy is strictly protected with global bank-grade secure server encryptions."
    },
    {
      title: "Multiple Bank Options",
      desc: "Compare credit packages from over 25+ top public, private, and housing finance firms side-by-side."
    }
  ],
  keyFeaturesList: [
    "Interest Rates : 12.00% p.a. onwards",
    "Loan Amounts : 80% to 90% of car’s on-road price (some lenders may offer up to 100%)",
    "Tenure : up to 5 years (some lenders offer repayment period till 7 years)",
    "Processing Fees : 0.5% onwards of loan amount (may vary across lenders)"
  ],
  illustrationImage: "/assets/loans/used-car-loan-feature.png",
  eligibilityList: [
    {
      label: "Age Requirement",
      value: "21 to 60 Years",
      note: "Applicant must not exceed 60 years at loan maturity"
    },
    {
      label: "Minimum Income",
      value: "Salaried: ₹25,000 / month | Self-Employed: ₹3 Lakh / annum",
      note: "Income criteria may vary by lender"
    },
    {
      label: "Credit Score",
      value: "750 & above",
      note: "Higher scores improve approval chances & rates"
    },
    {
      label: "Work Experience",
      value: "2 Years",
      note: "At least 1 year with your current employer"
    }
  ],
  documentsSalaried: [
    "Individual KYC (Photo, Pan Card, Aadhar Card)",
    "Current Residence Address Proof (Utility Bill)",
    "Latest 3 month’s Salary Slip",
    "6 month bank statement (Reflecting the salary credited)",
    "Company ID Card / Offer Letter / Visiting Card",
    "Car Quotation provided by the dealer / Existing loan statement"
  ],
  documentsSelfEmployed: [
    "Individual KYC (Photo, Pan Card, Aadhar Card)",
    "Current Residence Address Proof (Utility Bill)",
    "Business KYC (Udyam Certificate, Gumasta Certificate, GST Certificate)",
    "2 Years ITR",
    "1 Year bank statement",
    "Car Quotation provided by the dealer / Existing loan statement"
  ],
  timelineSteps: [
    { title: "Apply Online", desc: "Submit basic personal and income parameters on our secure loan refinancing portal." },
    { title: "Document Verification", desc: "Upload clear digital copies of your KYC, existing loan statement, and bank statements." },
    { title: "Eligibility Check", desc: "Our banking matching algorithms compare rates from 25+ lenders." },
    { title: "Loan Approval", desc: "Receive the formal sanction letter containing approved terms from your chosen bank." },
    { title: "Disbursement", desc: "The loan amount is direct-credited to settle the old loan." }
  ],
  calcMinAmount: 100000,
  calcMaxAmount: 5000000,
  calcDefaultAmount: 600000,
  calcMinTenure: 1,
  calcMaxTenure: 5,
  calcDefaultTenure: 3,
  calcDefaultRate: 12,
  benefitsGrid: [
    { title: "No Hidden Charges", desc: "Total clarity across validation processes, administrative fees, and loan metrics." },
    { title: "Flexible Repayments", desc: "Structured repayment slabs designed comfortably over 1 to 5 years." },
    { title: "Balance Transfer", desc: "Switch high-interest rate existing auto loans to low-rate lenders with zero hassle." }
  ],
  testimonials: [
    {
      name: "Aarav Sharma",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      review: "EAZYKREDIT made my car refinancing experience so simple! They found me a private bank offering 12.00% interest rate."
    }
  ],
  faqs: [
    {
      q: "What's the purpose of refinancing a car loan?",
      a: "Refinancing replaces your existing high-interest car loan with a new loan from another lender offering lower interest rates, reducing your monthly EMIs and overall borrowing costs."
    },
    {
      q: "What's the waiting period for car loan refinancing?",
      a: "Lenders typically require you to make regular repayments on your original car loan for at least 6 to 12 months before considering a refinancing transfer request."
    },
    {
      q: "Is there a limit to the number of times car loans can be refinanced?",
      a: "While there is no legal limit, frequent refinancing might incur prepayment fees from old lenders and processing charges from new lenders. It is recommended to refinance only when rate differentials are significant."
    },
    {
      q: "Can I approach my existing lender to refinance my car loan?",
      a: "Yes. You can request your current lender to renegotiate terms or lower your rate, but transferring the loan balance to another lender often yields the most competitive market interest rates."
    },
    {
      q: "Does my credit score impact the terms of my refinanced loan?",
      a: "Absolutely. A credit score of 750 or above demonstrates high creditworthiness, allowing you to qualify for the lowest rates and best repayment terms."
    },
    {
      q: "If I've already refinanced my home loan, can I still refinance my car loan?",
      a: "Yes. Refinancing your home loan does not restrict you from refinancing your car loan, provided your monthly debt service ratios (FOIR) remain healthy."
    },
    {
      q: "Will the refinanced loan feature a fixed or variable interest rate?",
      a: "Refinanced car loans typically feature a fixed interest rate, ensuring your monthly EMI payments remain predictable and constant throughout the tenure."
    },
    {
      q: "Does the age of the car influence refinancing feasibility?",
      a: "Yes. Lenders generally prefer cars that are less than 8 to 10 years old at the end of the refinanced loan tenure. Physical vehicle inspections are conducted to verify market valuation."
    }
  ],
  relatedProducts: [
    { title: "Home Loan", desc: "Rates starting from 7.15% p.a.", link: "/loans/home-loan" },
    { title: "Personal Loan", desc: "Rates starting from 10.49% p.a.", link: "/loans/personal-loan" }
  ],
  blogs: [],
  overviewTitle: "Used Car Loan",
  overviewHeading: "Fulfill Your Used Car Loan Dream",
  overviewParagraphs: [
    {
      text: "A Used Car Loan / Car Refinancing Loan allows you to transfer your existing car loan to another lender offering better interest rates and improved repayment terms. If you feel your current EMI is high or the loan terms are not suitable anymore, refinancing can help reduce your financial burden and improve cash flow."
    },
    {
      text: "At EAZYKREDIT, we help you refinance your car loan with competitive options from leading banks and NBFCs. Whether your goal is to lower your EMI, reduce interest rates, or adjust your tenure, we make the refinancing process simple and hassle-free."
    },
    {
      heading: "Why Choose EAZYKREDIT for the Used Car Loan?",
      text: "At EAZYKREDIT, we carefully analyze your existing car loan and compare multiple lender offers to ensure you receive the most beneficial refinancing option. Our focus is on reducing your financial burden by securing lower interest rates and better repayment terms tailored to your profile."
    },
    {
      text: "Our experienced team manages the complete process — from eligibility check and documentation to loan closure and transfer. With transparent guidance, faster coordination with lenders, and dedicated support, EAZYKREDIT ensures a smooth and stress-free refinancing experience."
    }
  ],
  serviceBenefits: [
    {
      title: "Transparent Terms and Conditions",
      desc: "We believe in maintaining transparency in our services. Our process comes with clear terms and conditions, ensuring that you have a comprehensive understanding of the loan details."
    },
    {
      title: "Minimal Documentation",
      desc: "EAZYKREDIT keeps the documentation process hassle-free. We require minimal paperwork, ensuring a smooth and efficient loan approval process."
    },
    {
      title: "Expert Assistance",
      desc: "Our team of experts is available to assist you throughout the Loan Against Car process. They will guide you through the application, answering any questions you may have and ensuring a seamless borrowing experience."
    },
    {
      title: "Flexible Repayment Options",
      desc: "We understand that each borrower has unique financial needs. With EAZYKREDIT, you can choose from flexible repayment options that suit your capabilities and make loan repayment more manageable."
    }
  ],
  interestRatesTable: [
    { name: "Punjab National Bank", rate: "9.8% onwards" },
    { name: "State Bank of India", rate: "11.3 - 14.8%" },
    { name: "Axis Bank", rate: "12.95 - 14.55%" },
    { name: "Tata Capital", isNbfc: true, rate: "12.99% onwards" },
    { name: "HDFC Bank", rate: "13.74 - 13.75%" }
  ]
};

export default function UsedCarLoan() {
  return <LoanPageTemplate config={usedCarLoanConfig} />;
}

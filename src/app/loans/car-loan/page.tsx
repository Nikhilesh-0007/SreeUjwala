"use client";

import React from "react";
import LoanPageTemplate, { ProductConfig } from "@/components/loans/LoanPageTemplate";

const carLoanConfig: ProductConfig = {
  loanType: "Car Loan",
  heroDescription: "Drive home your dream vehicle with EAZYKREDIT's instant car loan options. Enjoy up to 100% funding coverage, competitive interest rates, and flexible repayment tenures for new and pre-owned automobiles.",
  interestRateText: "8.65% p.a.",
  maxRepaymentTenure: "7 Years",
  heroFeatures: [
    "Competitive rates starting at 8.65% p.a.",
    "Finance up to 90% of car market value (up to 100% with select lenders)",
    "Flexible repayment tenure up to 7 years",
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
    "Interest Rates : 8.65% p.a. onwards",
    "Loan Amounts : 80% to 90% of car’s market value (some lenders may offer up to 100%)",
    "Tenure : up to 7 years",
    "Processing Fees : 0.5% - 2% onwards of loan amount (may vary across lenders)"
  ],
  illustrationImage: "/assets/loans/car-loan-feature.png",
  eligibilityList: [
    {
      label: "Age Requirement",
      value: "21 to 60 Years",
      note: "Applicant must not exceed 60 years at loan maturity"
    },
    {
      label: "Minimum Income",
      value: "Salaried: ₹30,000 / month | Self-Employed: ₹20 Lakhs / annum",
      note: "Income criteria may vary by lender"
    },
    {
      label: "Credit Score",
      value: "750 & above",
      note: "Higher scores improve approval chances & rates"
    },
    {
      label: "Work Experience",
      value: "2+ Years",
      note: "With at least 1 year with your current employer"
    }
  ],
  documentsSalaried: [
    "Individual KYC (Photo, Pan Card, Aadhar Card)",
    "Current Residence Address Proof (Utility Bill)",
    "Latest 3 months’ Salary Slip",
    "6 month bank statement (Reflecting the salary credited)",
    "Company ID Card / Offer Letter / Visiting Card",
    "Car Quotation provided by the dealer"
  ],
  documentsSelfEmployed: [
    "Individual KYC (Photo, Pan Card, Aadhar Card)",
    "Current Residence Address Proof (Utility Bill)",
    "Business KYC (Udyam Certificate, Gumasta Certificate, GST Certificate)",
    "2 Years ITR",
    "1 Year bank statement",
    "Car Quotation provided by the dealer"
  ],
  timelineSteps: [
    { title: "Apply Online", desc: "Submit basic personal and income parameters on our secure loan advisor portal." },
    { title: "Document Verification", desc: "Upload clear digital copies of your KYC, salary slips, and car quotation." },
    { title: "Eligibility Check", desc: "Our banking matching algorithms compare rates from 25+ lenders." },
    { title: "Loan Approval", desc: "Receive the formal sanction letter containing approved terms from your chosen bank." },
    { title: "Disbursement", desc: "The loan amount is direct-credited to the car dealership." }
  ],
  calcMinAmount: 100000,
  calcMaxAmount: 10000000,
  calcDefaultAmount: 800000,
  calcMinTenure: 1,
  calcMaxTenure: 7,
  calcDefaultTenure: 5,
  calcDefaultRate: 8.65,
  benefitsGrid: [
    { title: "No Hidden Charges", desc: "Total clarity across validation processes, administrative fees, and loan metrics." },
    { title: "Flexible Repayments", desc: "Structured repayment slabs designed comfortably over 1 to 7 years." },
    { title: "Balance Transfer", desc: "Switch high-interest rate existing auto loans to low-rate lenders with zero hassle." }
  ],
  testimonials: [
    {
      name: "Aarav Sharma",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      review: "EAZYKREDIT made my car loan experience so simple! They found me a private bank offering 8.65% interest rate."
    }
  ],
  faqs: [
    {
      q: "Who is eligible for a Car Loan?",
      a: "Salaried individuals, self-employed professionals, sole proprietors, and partnership firms with a stable source of monthly income are eligible to apply."
    },
    {
      q: "Is there a minimum salary requirement to apply for a Car Loan?",
      a: "Yes. Lenders generally require a minimum monthly net income of ₹30,000 for salaried applicants and an annual business income of ₹20 Lakhs for self-employed individuals."
    },
    {
      q: "What is the maximum amount I can avail in a Car Loan?",
      a: "You can secure up to 90% to 100% of the vehicle's on-road or ex-showroom price, depending on the lender's evaluation and your personal credit history."
    },
    {
      q: "What is the maximum tenure for a Car Loan?",
      a: "Car loans offer flexible repayment tenures extending up to 7 years."
    },
    {
      q: "What will be the EMI cycle for the Car Loan?",
      a: "The EMI cycle is calculated monthly and is typically auto-debited from your bank account on a fixed date (such as the 1st or 5th of every month) via NACH/ECS."
    },
    {
      q: "Can I opt for multiple Car Loans?",
      a: "Yes. You can apply for and hold multiple car loans simultaneously, provided your debt-to-income ratio (FOIR) permits the additional monthly EMI liabilities."
    },
    {
      q: "What other collaterals are required for a Car Loan?",
      a: "No additional collateral is needed. The car itself serves as primary security and is hypothecated in favor of the lender bank until the loan is fully repaid."
    },
    {
      q: "What documents are required to avail a Car Loan?",
      a: "Basic paperwork includes your KYC (PAN, Aadhaar), income proofs (salary slips, bank statements, or audited ITRs), current address proofs, and the official proforma invoice or quotation from the car dealership."
    },
    {
      q: "Can I get a loan for used cars?",
      a: "Yes. EAZYKREDIT offers specialized used car loan programs with competitive interest rates and funding options covering up to 85% of the pre-owned vehicle's certified valuation."
    }
  ],
  relatedProducts: [
    { title: "Home Loan", desc: "Rates starting from 7.15% p.a.", link: "/loans/home-loan" },
    { title: "Personal Loan", desc: "Rates starting from 10.49% p.a.", link: "/loans/personal-loan" }
  ],
  blogs: [],
  overviewTitle: "Car Loan",
  overviewHeading: "Fulfill Your Automobile Dream",
  overviewParagraphs: [
    {
      text: "Buying your dream car is a major milestone, and choosing the right car loan is just as important as choosing the car itself. While many borrowers look for the lowest interest rate, the best car loan should also offer flexible tenure, quick approvals, and transparent terms. A well-structured car loan ensures that your EMIs remain affordable while helping you drive home your vehicle without financial stress."
    },
    {
      text: "At EAZYKREDIT, we help you find the most suitable car loan based on your income profile, credit score, and repayment capacity. Whether you are buying a new car or a pre-owned vehicle, we make the financing process simple, fast, and hassle-free."
    },
    {
      heading: "Why Choose EAZYKREDIT for the Car Loan?",
      text: "At EAZYKREDIT, we don’t just offer a loan — we offer the right loan tailored to your needs. We compare multiple lenders to ensure you get the most suitable interest rate, tenure, and EMI option. Our goal is to match you with the best available car loan solution based on your financial profile and preferences."
    },
    {
      text: "Our dedicated relationship managers guide you through every step, from eligibility check to final disbursal. With transparent processes, faster approvals, and complete support, EAZYKREDIT ensures a seamless car loan journey so you can focus on enjoying your new vehicle without financial worries."
    }
  ],
  serviceBenefits: [
    {
      title: "Streamlined Loan Processing",
      desc: "Our car loan application process is designed to be efficient and hassle-free. We strive to make the loan processing experience smooth and straightforward, saving you time and effort."
    },
    {
      title: "Flexible Tenure Policy",
      desc: "We offer flexible loan tenure options, allowing you to choose a repayment period of up to 7 years. This flexibility ensures that you can comfortably manage your loan payments while enjoying your new car."
    },
    {
      title: "Attractive Interest Rates",
      desc: "Our goal is to provide you with competitive interest rates on your car loan. We understand the importance of affordability, and we work with multiple banks and NBFCs to secure the best interest rates available for you."
    },
    {
      title: "Multiple Payment Options",
      desc: "We offer various payment options to suit your convenience. Whether you prefer monthly installments or a customized repayment schedule, we can accommodate your preferences, ensuring a seamless payment experience."
    },
    {
      title: "Collateral-Free Car Loan",
      desc: "Our car loans are collateral-free, meaning you don’t need to pledge any assets or provide additional security. This simplifies the loan process and allows you to focus on driving your new car with peace of mind."
    },
    {
      title: "Up to 100% Funding for New Cars",
      desc: "We understand that purchasing a new car can require a substantial investment. That’s why we offer up to 100% funding options for new cars, allowing you to finance the entire cost of your dream vehicle."
    },
    {
      title: "Up to 85% Funding for Used Cars",
      desc: "If you’re considering a used car, we provide up to 85% funding options. This allows you to secure a significant portion of the car’s value, making it easier for you to own your desired pre-owned vehicle."
    },
    {
      title: "Minimal Documentation",
      desc: "We believe in keeping the documentation process hassle-free. Our car loan application requires minimal documentation, ensuring a smooth and efficient loan approval process."
    }
  ],
  interestRatesTable: [
    { name: "Bajaj Finance", isNbfc: true, rate: "9.50% - 14.50%" },
    { name: "Bank of Baroda", rate: "8.40% - 9.50%" },
    { name: "Punjab National Bank", rate: "7.60% - 8.75%" },
    { name: "State Bank of India", rate: "8.70% - 9.85%" },
    { name: "ICICI Bank", rate: "8.45% - 9.50%" },
    { name: "Tata Capital", isNbfc: true, rate: "9.00% - 12.00%" },
    { name: "HDFC Bank", rate: "8.16% - 9.00%" },
    { name: "IDFC FIRST Bank", rate: "8.50% - 10.25%" },
    { name: "Axis Bank", rate: "8.50% - 10.00%" },
    { name: "Canara Bank", rate: "7.45% - 14.00%" },
    { name: "LIC HFL", isNbfc: true, rate: "8.75% onwards" }
  ]
};

export default function CarLoan() {
  return <LoanPageTemplate config={carLoanConfig} />;
}

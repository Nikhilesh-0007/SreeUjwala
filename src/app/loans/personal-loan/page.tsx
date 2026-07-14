"use client";

import React from "react";
import LoanPageTemplate, { ProductConfig } from "@/components/loans/LoanPageTemplate";

const personalLoanConfig: ProductConfig = {
  loanType: "Personal Loan",
  heroDescription: "Fulfill your urgent financial needs with our instant personal loans. Whether it's a medical emergency, dream vacation, or home renovation, get funds up to ₹75 Lakhs with zero collateral and paperless approval in minutes.",
  interestRateText: "10.25% p.a.",
  maxRepaymentTenure: "5 Years",
  heroFeatures: [
    "Competitive rates starting 10.25% p.a.",
    "Loan amount up to ₹75 Lakhs (higher based on income)",
    "Flexible tenure up to 5 years",
    "Nominal processing fees 0.5% to 4%"
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
    "Interest Rates : 10.25% p.a. onwards",
    "Loan Amounts : up to Rs 75 lakh depending on your income; some lenders may offer higher loan amounts",
    "Tenure : up to 5 years (some lenders offer repayment period till 8 years)",
    "Processing Fees : 0.5% to 4% of loan amount (may vary across lenders)"
  ],
  illustrationImage: "/assets/loans/personal-loan-feature.png",
  eligibilityList: [
    {
      label: "Age Requirement",
      value: "21 – 60 Years",
      note: "Applicant must not exceed 60 years at loan maturity"
    },
    {
      label: "Minimum Income",
      value: "Salaried: ₹30,000 / month",
      note: "Income criteria may vary by lender"
    },
    {
      label: "Credit Score",
      value: "750 & above",
      note: "Higher scores improve approval chances & rates"
    },
    {
      label: "Work Experience",
      value: "1+ Years",
      note: "With at least 1+ year of work experience"
    }
  ],
  documentsList: [
    "Passport Size Photo",
    "Pan Card",
    "Digital Aadhar Card",
    "Latest 3 months salary slip",
    "6 months Bank Statement (reflecting the salary credited)",
    "Current Residence Address Proof (Utility Bill / Maintenance Bill / Rent Agreement & Light Bill with the owner’s name)",
    "Form 16",
    "Company ID Card / Offer Letter / Visiting Card",
    "Registered Sale Deed, Allotment Letter or Stamped Agreement of Sale with the Builder (original document)",
    "Receipts of the advance payments made towards the purchase of flat (original document)",
    "Occupancy Certificate & Completion Certificate"
  ],
  timelineSteps: [
    { title: "Apply Online", desc: "Submit basic personal and income parameters on our secure loan advisor portal." },
    { title: "Document Verification", desc: "Upload clear digital copies of your KYC, salary slips, and bank statements." },
    { title: "Eligibility Check", desc: "Our banking matching algorithms compare rates from 25+ lenders." },
    { title: "Loan Approval", desc: "Receive the formal sanction letter containing approved terms from your chosen bank." },
    { title: "Disbursement", desc: "The loan amount is direct-credited to your bank account." }
  ],
  calcMinAmount: 50000,
  calcMaxAmount: 7500000,
  calcDefaultAmount: 500000,
  calcMinTenure: 1,
  calcMaxTenure: 5,
  calcDefaultTenure: 3,
  calcDefaultRate: 10.25,
  benefitsGrid: [
    { title: "No Hidden Charges", desc: "Total clarity across validation processes, administrative fees, and loan metrics." },
    { title: "Flexible Repayments", desc: "Structured repayment slabs designed comfortably over 1 to 5 years." },
    { title: "Balance Transfer", desc: "Switch high-interest rate existing personal loans to low-rate lenders with zero hassle." }
  ],
  testimonials: [
    {
      name: "Aarav Sharma",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      review: "EAZYKREDIT made my personal loan experience so simple! They found me a private bank offering 10.25% interest rate."
    }
  ],
  faqs: [
    {
      q: "What credit score do I need to qualify for a personal loan?",
      a: "A CIBIL score of 750 or above is recommended. While some lenders consider lower scores, a score of 750+ ensures immediate approvals and the lowest interest rates."
    },
    {
      q: "What is the minimum salary required for obtaining a personal loan?",
      a: "The minimum salary threshold is ₹30,000 per month. However, this may vary depending on the lender and your city of residence."
    },
    {
      q: "If I have a pension account with a leading bank in India, can I apply for a personal loan as a pensioner?",
      a: "Yes. Many leading banks offer specialized personal loan schemes for pensioners who draw their regular monthly pensions through their accounts."
    },
    {
      q: "Are students eligible to apply for a personal loan?",
      a: "Unsecured personal loans require a stable source of monthly income. Students without salary slips generally cannot qualify unless they have an earning co-applicant (like a parent) to co-sign."
    },
    {
      q: "Can I secure a personal loan with a monthly salary of ₹12,000?",
      a: "Standard prime lenders require a minimum salary of ₹25,000 to ₹30,000. For an income of ₹12,000, you might need to check with specialized microfinance lenders or local NBFCs."
    },
    {
      q: "Must I offer collateral or security for a personal loan application?",
      a: "No. EAZYKREDIT Personal Loans are entirely unsecured, meaning you do not need to pledge any gold, property, or assets as collateral."
    },
    {
      q: "Can I utilize a personal loan for funding a wedding?",
      a: "Yes. A personal loan has zero end-use restrictions. You can use it to cover wedding venues, catering, shopping, travel, or any other personal expenses."
    },
    {
      q: "What is the maximum loan amount achievable through a personal loan?",
      a: "You can secure a personal loan up to ₹75 Lakhs, depending on your income profile, repayment capacity, and credit score."
    },
    {
      q: "Is it feasible to secure a personal loan without a salary slip?",
      a: "Yes, if you are self-employed or run a registered business, you can qualify by providing your audited ITRs and bank statements instead of salary slips."
    },
    {
      q: "How can I calculate the EMI for a personal loan?",
      a: "You can easily calculate your monthly EMI using our online planning tool by entering your loan amount, interest rate, and preferred tenure."
    },
    {
      q: "Are there any fees for prepaying my personal loan?",
      a: "For floating-rate personal loans, RBI mandates zero prepayment charges. For fixed-rate personal loans, lenders may charge a prepayment fee of 2% to 4% of the outstanding principal."
    },
    {
      q: "Is it possible to cancel a personal loan after the loan amount has been disbursed?",
      a: "Once the loan amount is credited, it cannot be canceled. However, you can prepay the entire outstanding amount subject to the lender's foreclosure terms."
    },
    {
      q: "Can I obtain a personal loan while already having a home loan?",
      a: "Yes, provided you have sufficient repayment capacity and your overall Fixed Obligation to Income Ratio (FOIR) is within the lender's permissible limits."
    },
    {
      q: "Can I take personal loans from two different banks concurrently?",
      a: "Yes, you can apply to and secure loans from two different lenders concurrently, provided your monthly net income comfortably covers both EMI repayments."
    }
  ],
  relatedProducts: [
    { title: "Home Loan", desc: "Rates starting from 7.15% p.a.", link: "/loans/home-loan" },
    { title: "Business Loan", desc: "Rates starting from 15.00% p.a.", link: "/loans/business-loan" }
  ],
  blogs: [],
  overviewTitle: "Personal Loan",
  overviewHeading: "Fulfill Your Urgent Cash Requirements",
  overviewParagraphs: [
    {
      text: "Get an instant personal loan online with EAZYKREDIT to access funds quickly and conveniently. Whether you're planning a trip to your dream destination, renovating your home with modern furnishings, organising your dream wedding, or facing a medical emergency, an online Personal Loan from EAZYKREDIT will always be there to help you fulfill your requirements with competitive interest rates."
    },
    {
      heading: "Why Choose EAZYKREDIT for the Personal Loan?",
      text: "We connect you with India's premier lending partners, ensuring you receive the most suitable credit options. Simply compare and select the best personal loan in India based on your specific requirements. By choosing EAZYKREDIT, you experience a completely transparent, digital borrowing process with quick approvals, flexible structures, and dedicated advisor support."
    }
  ],
  serviceBenefits: [
    {
      title: "Quick and Convenient Process",
      desc: "Applying for an instant personal loan with EAZYKREDIT is a seamless and hassle-free experience. Our online platform allows you to complete the application conveniently from the comfort of your home."
    },
    {
      title: "Competitive Interest Rates",
      desc: "EAZYKREDIT offers personal loans with highly competitive interest rates, ensuring affordable monthly repayments."
    },
    {
      title: "Flexible Loan Amounts",
      desc: "Gain the flexibility to choose the personal loan amount that suits your requirements, whether a small cash injection or a larger sum."
    },
    {
      title: "Quick Approval and Disbursement",
      desc: "We value your time. Once your application is approved, the funds are disbursed directly to your account quickly, allowing you to address your financial needs without delay."
    }
  ],
  interestRatesTable: [
    { name: "Bajaj Finance", isNbfc: true, rate: "10.00% - 30.00%" },
    { name: "Bank of Baroda", rate: "10.90% - 18.25%" },
    { name: "Punjab National Bank", rate: "10.40% - 17.95%" },
    { name: "State Bank of India", rate: "11.00% - 15.00%" },
    { name: "ICICI Bank", rate: "9.99% - 17.00%" },
    { name: "Tata Capital", isNbfc: true, rate: "10.99% - 16.00%" },
    { name: "HDFC Bank", rate: "9.99% - 22.00%" },
    { name: "IDFC FIRST Bank", rate: "9.99% - 24.00%" },
    { name: "Axis Bank", rate: "9.99% - 22.00%" },
    { name: "Canara Bank", rate: "10.95% - 16.15%" },
    { name: "LIC HFL", isNbfc: true, rate: "10.50% - 15.00%" }
  ]
};

export default function PersonalLoan() {
  return <LoanPageTemplate config={personalLoanConfig} />;
}

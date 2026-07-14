"use client";

import React from "react";
import LoanPageTemplate, { ProductConfig } from "@/components/loans/LoanPageTemplate";

const lapConfig: ProductConfig = {
  loanType: "Loan Against Property",
  heroDescription: "Unlock the value of your property with our high-value loan against property solutions. Get funding up to ₹25+ Crores for business expansion, education, or medical emergencies at attractive interest rates.",
  interestRateText: "8.00% p.a.",
  maxRepaymentTenure: "15 Years",
  heroFeatures: [
    "Interest Rates 8% p.a. onwards",
    "Loan Amount Up to 85% property value",
    "Tenure Up to 15 years",
    "Processing Fees 0.5% - 2%"
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
    "Interest Rates : 8% p.a. onwards",
    "Loan Amounts : up to 85% of the market value of your property (may vary across lenders)",
    "Tenure : up to 15 years",
    "Processing Fees : 0.5% – 2% of loan amount (may vary across lenders)"
  ],
  illustrationImage: "/assets/loans/lap-feature.png",
  eligibilityList: [
    {
      label: "Property Type",
      value: "Residential, Commercial and Industrial properties",
      note: "Subject to technical evaluation"
    },
    {
      label: "Age Requirement",
      value: "21 – 65 Years",
      note: "Applicant must not exceed 65 years at loan maturity"
    },
    {
      label: "Minimum Income",
      value: "Salaried: ₹25,000 / month | Self-Employed: ₹2 Lakh / annum",
      note: "Income criteria may vary by lender"
    },
    {
      label: "Credit Score",
      value: "750 & above",
      note: "Higher scores improve approval chances & rates"
    },
    {
      label: "Eligible Applicants",
      value: "Indian Residents, Non-Resident Indians (NRI)",
      note: "Subject to lender guidelines"
    },
    {
      label: "Work Experience",
      value: "Salaried: 2 years minimum | Self-Employed: 3 years minimum",
      note: "Active continuous vintage"
    }
  ],
  documentsSalaried: [
    "Individual KYC (Photo, Pan, Aadhar Card of all applicant & Co-applicants)",
    "Utility Bill (Electricity Bill / Gas Bill)",
    "Form 16/Bank statements (bank statements or passbook for last 6 months) or last 6 months salary slips/Income tax returns for last 3 years",
    "Current job appointment letter (if more than 2 years have been spent in the same job)/Current employment certificate/Experience certificate",
    "Property: Registered Sale Deed / Allotment Letter / Stamped Agreement of Sale with Builder / Share Certificate",
    "Property approvals: Occupancy Certificate (OC) & Completion Certificate (CC)",
    "NOC from Society / Builder"
  ],
  documentsSelfEmployed: [
    "Individual KYC (Photo, PAN, Aadhaar Card of all Applicants & Co-applicants)",
    "Utility Bill (Electricity Bill / Gas Bill)",
    "Gumasta Licence (Proprietor)",
    "Company PAN Card & Partnership Deed (Partnership Firm)",
    "Company PAN Card, MOA, AOA, Certificate of Incorporation, List of Directors & Shareholding Pattern (Pvt. Ltd.)",
    "Udyam Certificate",
    "1 Year GST Return",
    "Last 2 Years ITR of Company & Individual (CA Attested) – Acknowledgement, Computation of Income, Balance Sheet & Profit & Loss Account with Schedules",
    "Last 12 Months Current Account Bank Statement",
    "Last 6 Months Saving Account Bank Statement",
    "Property: Registered Sale Deed / Allotment Letter / Stamped Agreement of Sale with Builder / Share Certificate",
    "Property approvals: Occupancy Certificate (OC) & Completion Certificate (CC)",
    "NOC from Society / Builder"
  ],
  timelineSteps: [
    { title: "Apply Online", desc: "Submit basic personal and income parameters on our secure loan advisor portal." },
    { title: "Document Verification", desc: "Upload clear digital copies of your KYC, property papers, and bank statements." },
    { title: "Eligibility Check", desc: "Our banking matching algorithms compare rates from 25+ lenders." },
    { title: "Loan Approval", desc: "Receive the formal sanction letter containing approved terms from your chosen bank." },
    { title: "Disbursement", desc: "The loan amount is direct-credited to your bank account." }
  ],
  calcMinAmount: 500000,
  calcMaxAmount: 50000000,
  calcDefaultAmount: 2500000,
  calcMinTenure: 1,
  calcMaxTenure: 15,
  calcDefaultTenure: 10,
  calcDefaultRate: 8,
  benefitsGrid: [
    { title: "No Hidden Charges", desc: "Total clarity across validation processes, administrative fees, and loan metrics." },
    { title: "Flexible Repayments", desc: "Structured repayment slabs designed comfortably over 1 to 15 years." },
    { title: "Balance Transfer", desc: "Switch high-interest rate existing property loans to low-rate lenders with zero hassle." }
  ],
  testimonials: [
    {
      name: "Aarav Sharma",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      review: "EAZYKREDIT made my Loan Against Property experience so simple! They found me a private bank offering 8.00% interest rate."
    }
  ],
  faqs: [
    {
      q: "What is a loan against property?",
      a: "A loan against property (LAP) is a secured loan where you pledge your residential, commercial, or industrial real estate asset as collateral to secure high-value funding."
    },
    {
      q: "What property can be considered as collateral for LAP?",
      a: "Residential houses, apartments, self-occupied or rented commercial premises, vacant plots, and industrial buildings can be placed as collateral, subject to clear title deeds and property valuations."
    },
    {
      q: "If a property is jointly owned by me or an individual and his/her relative, can we take a loan against this property?",
      a: "Yes. If a property is jointly owned, all co-owners must be co-applicants on the loan. This combines your income profiles and makes it easier to qualify."
    },
    {
      q: "I am an NRI. Can I get a Loan Against Property?",
      a: "Yes. Non-Resident Indians (NRIs) are eligible to apply for a Loan Against Property in India against property assets they own here, subject to RBI regulations."
    },
    {
      q: "What is the maximum loan I can get against my property?",
      a: "You can borrow up to ₹25+ Crores, generally representing 50% to 85% of the property's current market valuation, depending on the property type and your income documents."
    },
    {
      q: "What are the loan tenure options?",
      a: "Repayment tenures for a Loan Against Property are flexible and can extend up to 15 years, with some lenders offering up to 20 years."
    },
    {
      q: "Can I get tax benefit on loan against property?",
      a: "Yes, under Section 24(b) or Section 37(1), you can claim tax deductions if the loan proceeds are utilized for business expansion, buying a second home, or other qualifying investments."
    },
    {
      q: "Is it important to have my account in the same bank that is disbursing my loan against property?",
      a: "No. You do not need an existing account with the lender. You can set up standing instructions or ECS mandates on your active savings/current account with any bank."
    },
    {
      q: "In how much time will the loan get disbursed?",
      a: "Once property verification, technical valuation, and legal title checks are completed successfully, disbursement takes around 7 to 10 working days."
    },
    {
      q: "How is a loan disbursed for an under-construction property?",
      a: "For under-construction properties, the loan is disbursed in phases (tranches) linked to construction milestones certified by the project engineer."
    },
    {
      q: "What is the difference between a home loan and a loan against property?",
      a: "A Home Loan is specifically taken to purchase a new residential property. A Loan Against Property is taken by pledging an existing property you own, and the funds can be used for any personal or business purpose."
    },
    {
      q: "Why should I choose LAP from EAZYKREDIT?",
      a: "EAZYKREDIT compares offers from 25+ top lenders side-by-side. Our dedicated relationship managers assist you with property valuation, legal validation, and document processing, securing the lowest rates with total transparency."
    }
  ],
  relatedProducts: [
    { title: "Home Loan", desc: "Rates starting from 7.15% p.a.", link: "/loans/home-loan" },
    { title: "Personal Loan", desc: "Rates starting from 10.49% p.a.", link: "/loans/personal-loan" }
  ],
  blogs: [],
  overviewTitle: "Loan Against Property",
  overviewHeading: "Unlock the Hidden Value of Your Assets",
  overviewParagraphs: [
    {
      text: "Your property is more than just a valuable asset — it represents years of hard work, stability, and security. With a Loan Against Property from EAZYKREDIT, you can unlock the hidden potential of your property and use its value to fulfill your financial goals. Whether you need funds for business expansion, higher education, medical emergencies, or personal commitments, LAP provides you with substantial loan amounts at competitive interest rates."
    },
    {
      text: "At EAZYKREDIT, we understand the importance of financial flexibility. That’s why we offer Loan Against Property solutions with attractive interest rates, flexible repayment options, and a smooth approval process. Turn your property into a powerful financial resource and move one step closer to achieving your dreams with confidence."
    },
    {
      heading: "Why Choose EAZYKREDIT for the Loan Against Property?",
      text: "EAZYKREDIT helps you unlock the true value of your property with a smooth, transparent, and customer-friendly loan process. We partner with leading banks and NBFCs to ensure you get the best interest rates, higher eligibility, and flexible repayment options tailored to your financial goals. Our team understands that every borrower’s requirement is different, and we work closely with you to structure the right solution. With dedicated relationship managers, quick approvals, and complete assistance from application to disbursal, EAZYKREDIT ensures a hassle-free experience. From property evaluation to documentation and final loan sanction, we manage everything efficiently so you can focus on your business or personal financial needs without stress."
    }
  ],
  serviceBenefits: [
    {
      title: "Competitive Interest Rates",
      desc: "Since LAP is a secured loan, lenders offer comparatively lower interest rates than personal loans or credit facilities. This helps reduce your overall borrowing cost and makes repayment more affordable over the long term."
    },
    {
      title: "High Loan Amount",
      desc: "Loan Against Property allows you to avail a higher loan amount compared to unsecured loans because it is backed by your residential or commercial property. Depending on the property value and eligibility, you can secure substantial funding to meet business expansion, education, medical, or personal financial requirements."
    },
    {
      title: "Flexible Repayment Tenure",
      desc: "One of the biggest advantages of LAP is the long repayment tenure, which can go up to 15–20 years. A longer tenure ensures smaller EMIs, making it easier to manage your monthly cash flow without financial pressure."
    },
    {
      title: "Quick Processing & Approval",
      desc: "With proper documentation and property papers, Loan Against Property can be processed efficiently. At EAZYKREDIT, we coordinate with lenders to ensure faster verification, smooth legal checks, and quicker sanction of your loan."
    },
    {
      title: "Multipurpose Usage",
      desc: "The loan amount received through LAP can be used for various purposes such as business expansion, working capital, education, wedding expenses, medical emergencies, or debt consolidation. There are generally no strict end-use restrictions, giving you financial flexibility."
    }
  ],
  interestRatesTable: [
    { name: "Bajaj Finance", isNbfc: true, rate: "8.00% - 18.00%" },
    { name: "Bank of Baroda", rate: "9.00% - 9.75%" },
    { name: "Punjab National Bank", rate: "8.75% - 13.00%" },
    { name: "State Bank of India", rate: "9.20% - 10.00%" },
    { name: "ICICI Bank", rate: "8.35% - 10.50%" },
    { name: "Tata Capital", isNbfc: true, rate: "9.00% - 13.00%" },
    { name: "HDFC Bank", rate: "8.50% - 10.50%" },
    { name: "IDFC FIRST Bank", rate: "9.50% - 11.00%" },
    { name: "Axis Bank", rate: "9.25% - 9.75%" },
    { name: "Canara Bank", rate: "8.50% - 11.00%" },
    { name: "LIC HFL", isNbfc: true, rate: "9.25% - 11.50%" }
  ]
};

export default function LoanAgainstProperty() {
  return <LoanPageTemplate config={lapConfig} />;
}

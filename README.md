
# 🧾 POS System – AWS Integrated Point of Sale App

A React + Vite-based POS system integrated with AWS services for robust cloud-based operations, monitoring, and secure deployment.

## 📦 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend (Planned)**: AWS Lambda, API Gateway, Node.js
- **Cloud Infrastructure**: AWS S3, SQS, CloudWatch, IAM, VPC
- **Monitoring**: AWS CloudWatch with alarms
- **Security**: IAM Roles, KMS Encryption, Secure APIs

## 🔧 Features

- Product Inventory Management
- Add/Edit/Delete Items
- React Component Architecture
- SQS Monitoring
- Basic Alarm Setup (Planned)

## 🚀 AWS Setup Overview

To review AWS setup:
- Login via provided AWS IAM read-only credentials
- Navigate to:
  - SQS for Queue Metrics
  - CloudWatch for Monitoring Dashboards
  - IAM for Role Permissions
  - VPC for Subnet/Security Groups

> 🔒 IAM access restricted to read-only  
> 💵 All paid services temporarily disabled

## 📊 Metrics & Monitoring (CloudWatch)

**Business Metrics:**
- Orders processed
- Items added/edited

**System Metrics (via SQS):**
- `NumberOfMessagesSent`
- `NumberOfMessagesReceived`
- `ApproximateAgeOfOldestMessage`

**Alarms Configured:**
- Trigger if `ApproximateAgeOfOldestMessage` > 300 seconds
- Email notification via SNS (simulated if SNS disabled)

## 🔐 Security Considerations

- IAM roles scoped with least privilege
- VPC subnets with restricted ingress/egress
- Server-side encryption (S3, KMS)
- API keys masked via environment variables

## 🧪 Setup & Run Locally

```bash
git clone <this-repo>
cd my-pos-app
npm install
npm run dev
```

> Vite will serve the app at `localhost:5173`

## 📅 Availability

This project will remain deployed and accessible on **April 19-20** for AWS Console Review.

---

## 👤 Author

Prepared by: `Your Name`  
Email: `your@email.com`

🗓 Date: April 19, 2025

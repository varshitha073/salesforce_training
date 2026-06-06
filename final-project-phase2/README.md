<div align="center">

# ✨ Leave Management App – Salesforce Phase 2 (Enterprise Upgrade) ✨

![Salesforce](https://img.shields.io/badge/Salesforce-CRM-blue?style=for-the-badge)
![Apex](https://img.shields.io/badge/Apex-Backend-red?style=for-the-badge)
![LWC](https://img.shields.io/badge/LWC-Frontend-green?style=for-the-badge)
![Flow](https://img.shields.io/badge/Flow-Automation-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/Project-Enterprise_Level-brightgreen?style=for-the-badge)

</div>

---

# 🏗 Final Architecture

```text
Frontend (LWC Components)
        ↓
Backend (Apex Classes & Triggers)
        ↓
Automation (Flows & Validation Rules)
        ↓
Approval System (Salesforce Approval Process)
        ↓
Data Layer (Objects: Employee, Leave Request, Department)
        ↓
Reporting Layer (Reports & Dashboards)
```
---

# 🔄 System Workflow Explanation

1. Employee submits leave request via LWC form  
2. Validation Rules ensure correct date and balance  
3. Apex logic prevents duplicate leave entries  
4. Record stored in Leave_Request__c  
5. Flow triggers email notification  
6. Approval Process routes request to manager  
7. Manager approves/rejects request  
8. Status updated in real-time  
9. Dashboard reflects updated data  

---

# 🧾 Approval Workflow

Employee → Submit Request  
↓  
System Validation (Rules + Apex)  
↓  
Flow Trigger (Notification)  
↓  
Manager Approval  
↓  
Approved / Rejected Status  
↓  
Approval History Stored  

---

# 📊 Reporting & Dashboard Ideas

## 1. Leave Status Dashboard
- Pending vs Approved vs Rejected leaves
- Helps HR track workload

## 2. Department-wise Leave Report
- Which department takes most leaves
- Useful for resource planning

## 3. Monthly Leave Trend
- Seasonal leave patterns
- Helps forecasting staffing needs

## 4. Employee Leave Balance Report
- Remaining leaves per employee
- Avoids over-utilization

## 5. Approval Pending Report
- Pending approvals list
- Helps managers act faster

---

# ⚠️ Failure Handling Ideas

## ❌ Notification Failure
- Retry mechanism in Flow
- Email logs in debug mode

## ❌ Duplicate Record Creation
- Apex validation prevents overlap
- SOQL check before insert

## ❌ Approval Stuck
- Auto-escalation rule after timeout
- Reassignment to backup manager

## ❌ Automation Loop
- Entry criteria in Flow prevents recursion
- Status-based execution control

---

# 📈 Scalability Discussion

- Modular LWC components for reuse  
- Apex services separated from UI logic  
- Scalable object model (Employee–Leave relationship)  
- Flow-based automation reduces hardcoding  
- Reports support large dataset aggregation  
- Future-ready for AI + integration APIs  

---

# 🧠 Reflection

Enterprise systems are not just about writing code.

They require:
- System thinking  
- Data modeling  
- Workflow understanding  
- Failure handling  
- Scalability planning  

The biggest difference between learning coding and building enterprise systems is:

👉 Coding focuses on logic  
👉 Enterprise design focuses on **end-to-end system behavior**

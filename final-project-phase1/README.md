<div align="center">

# ✨ Leave Management App – Salesforce Phase 1 Enterprise Project ✨

![Salesforce](https://img.shields.io/badge/Salesforce-CRM-blue?style=for-the-badge)
![Apex](https://img.shields.io/badge/Apex-Backend-red?style=for-the-badge)
![LWC](https://img.shields.io/badge/LWC-Frontend-green?style=for-the-badge)
![Flow](https://img.shields.io/badge/Flow-Automation-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/Project-Completed-brightgreen?style=for-the-badge)

</div>

---

# 🧠 SYSTEM OVERVIEW
The Leave Management App is a Salesforce CRM-based enterprise system that automates employee leave lifecycle management. It allows employees to submit leave requests and ensures the entire process is handled through validation rules, formula fields, flows, Apex logic, triggers, approval processes, and LWC components in a structured and scalable way.

---

# 🏗 ARCHITECTURE DIAGRAM
LWC UI (Employee Form)  
↓  
Leave Request Object  
↓  
Validation Rules + Formula Fields  
↓  
Flow Automation (Email Notification)  
↓  
Apex Logic (Duplicate Check)  
↓  
Trigger Execution  
↓  
Approval Process  
↓  
Reports & Dashboard  

---

# 🧩 OBJECTS & RELATIONSHIPS
Employee__c (Lookup with Department__c)  
Department__c (Parent Object)  
Leave_Request__c (Master-Detail with Employee__c)  
Approval_History__c (Master-Detail with Leave_Request__c)  

---

# 🧮 VALIDATION RULES

End Date cannot be before Start Date  
End_Date__c < Start_Date__c  

Leave balance must not exceed available leaves  
Total_Leave_Days__c > Employee__r.Remaining_Leaves__c  

---

# 🧮 FORMULA FIELD

Total_Leave_Days__c = End_Date__c - Start_Date__c + 1  

End_Date__c < Start_Date__c  

Total_Leave_Days__c > Employee__r.Remaining_Leaves__c   

---

# 🔄 FLOW EXPLANATION
A Record-Triggered Flow is used on Leave_Request__c. When a record is created, the system automatically sends an email notification to the manager or employee to ensure instant communication and workflow automation.

---

# ⚙️ APEX LOGIC

public class LeaveValidationService {

    public static Boolean checkDuplicateLeave(Date startDate, Date endDate, Id employeeId){

        List<Leave_Request__c> existingLeaves = [
            SELECT Id
            FROM Leave_Request__c
            WHERE Employee__c = :employeeId
            AND Start_Date__c <= :endDate
            AND End_Date__c >= :startDate
        ];

        return existingLeaves.size() > 0;
    }
}

---

# ⚡ TRIGGER LOGIC

trigger LeaveRequestTrigger on Leave_Request__c (before insert) {

    for(Leave_Request__c lr : Trigger.new){

        if(LeaveValidationService.checkDuplicateLeave(
            lr.Start_Date__c,
            lr.End_Date__c,
            lr.Employee__c
        )){
            lr.addError('Duplicate leave request exists.');
        }
    }
}

---

# 🎨 LWC SCREENS
Leave Request Form (Parent Component)  

<img width="1912" height="848" alt="Screenshot 2026-06-06 164607" src="https://github.com/user-attachments/assets/60f52786-384a-4ad7-b48b-ff1401f94b9a" />

Dashboard Page

<img width="1908" height="911" alt="Screenshot 2026-06-06 164613" src="https://github.com/user-attachments/assets/80cb851a-6ad5-48af-b933-f07885da19c8" />

Manager Approval Page

<img width="1915" height="912" alt="Screenshot 2026-06-06 164622" src="https://github.com/user-attachments/assets/80b7b675-0897-4da7-9972-ddeac54ada37" />


---

# 🔁 WORKFLOW EXPLANATION
Employee submits leave request  
↓  
Validation Rules execute  
↓  
Formula calculates total leave days  
↓  
Flow sends email notification  
↓  
Apex checks duplicate leave  
↓  
Trigger validates record  
↓  
Approval process starts  
↓  
Manager approves or rejects  
↓  
Status updated  
↓  
Reports generated  

---

# 📊 SCALING CONSIDERATIONS
Bulk-safe Apex design  
Optimized SOQL queries  
Trigger recursion prevention  
Efficient Flow usage  
Scalable LWC architecture  
Proper indexing strategy  
Governor limit handling  

---

# 🚀 FINAL OUTPUT
This Phase 1 Salesforce project demonstrates a complete enterprise HR leave management system integrating frontend (LWC), backend (Apex), automation (Flows), approval processes, validation rules, and reporting into a scalable CRM architecture.

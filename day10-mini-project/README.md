# College Management Mini Project-Salesforce

## 1. System Overview

This project is a Salesforce-based College Management System developed using CRM concepts, Data Modeling, Validation Rules, Flows, Apex, Triggers, SOQL, and Lightning Web Components (LWC).

The system manages:
- Students
- Faculty
- Courses
- Departments
- Registrations
- Attendance monitoring

The project demonstrates enterprise application architecture by integrating frontend UI, backend logic, database operations, automation, and event-driven behavior.

---

# 2. CRM Concepts

## Student
Stores student details:
- Name
- Email
- Attendance
- Department
<img width="1905" height="898" alt="Screenshot 2026-05-25 163016" src="https://github.com/user-attachments/assets/220b27ac-2cf4-4d2e-b91b-7bafff6d279e" />

## Faculty
Stores faculty details:
- Faculty Name
- Email
- Department
- <img width="1901" height="858" alt="image" src="https://github.com/user-attachments/assets/25c6b5e5-e75a-444d-9271-5dd258db945d" />


## Course
Stores course details:
- Course Name
- Total Seats
- Filled Seats
- Remaining Seats
- <img width="1913" height="863" alt="image" src="https://github.com/user-attachments/assets/83ac9333-a8c3-4e3f-97a7-c6410c5b43c5" />


## Department
Represents academic departments connected with students and faculty.
<img width="1911" height="855" alt="image" src="https://github.com/user-attachments/assets/0a14d7a2-9a6f-4c77-b369-96f7173e03db" />

---

# 3. Data Model

## Student__c

| Field Name | Field Type |
|---|---|
| Name | Text |
| Email__c | Email |
| Attendance_Percentage__c | Percentage |
| Eligible__c | Checkbox |
| Department__c | Lookup |

## Faculty__c

| Field Name | Field Type |
|---|---|
| Name | Text |
| Email__c | Email |
| Department__c | Lookup |

## Department__c

| Field Name | Field Type |
|---|---|
| Department_Name__c | Text |
| HOD__c | Text |

## Course__c

| Field Name | Field Type |
|---|---|
| Course_Name__c | Text |
| Total_Seats__c | Number |
| Filled_Seats__c | Number |
| Remaining_Seats__c | Formula |
| Faculty__c | Lookup |

## Registration__c

| Field Name | Field Type |
|---|---|
| Student__c | Lookup |
| Course__c | Lookup |
| Status__c | Picklist |

---

# Relationships

## Student → Department

Relationship Type:
- Lookup Relationship

---

## Faculty → Department

Relationship Type:
- Lookup Relationship

---

## Course → Faculty

Relationship Type:
- Lookup Relationship

---

## Student → Registration

Relationship Type:
- Lookup Relationship

---

## Course → Registration

Relationship Type:
- Lookup Relationship

---

# 4. Validation Rules

## Email Mandatory Validation

Formula:

```text
ISBLANK(Email__c)
```

Error Message:

```text
Email is required
```
<img width="1919" height="906" alt="Screenshot 2026-05-25 162600" src="https://github.com/user-attachments/assets/137a56e2-46f9-48c9-9ac6-ad600674e5b7" />

<img width="1193" height="600" alt="Screenshot 2026-05-25 162516" src="https://github.com/user-attachments/assets/0c767312-a4df-403e-8f47-b114191c764a" />


---

## Seats Cannot Exceed Limit

Formula:

```text
Filled_Seats__c > Total_Seats__c
```

Error Message:

```text
Filled seats cannot exceed total seats
```
<img width="1908" height="853" alt="Screenshot 2026-05-25 162632" src="https://github.com/user-attachments/assets/22e45a60-12f3-431f-9c12-220aae64e953" />

<img width="1167" height="600" alt="Screenshot 2026-05-25 162732" src="https://github.com/user-attachments/assets/1ff815ee-a2b4-4d11-b88b-0c9801d22739" />


---

# 5. Flows

## Attendance Warning Flow

Purpose:
- Automatically sends warning email if attendance falls below 75%.

Flow:
- Record Triggered Flow
- Object: Student__c
- Condition: Attendance < 75%


## Student Attendance Warning Flow

Purpose:
- Sends attendance alert notification to students with low attendance.

Flow:
- Record Triggered Flow
- Object: Student__c
- Condition: Attendance < 75%


## Student Registration Flow

Purpose:
- Automatically confirms student course registration.

Flow:
- Record Triggered Flow
- Object: Registration__c
- Trigger: Record Created

---

# 6. Apex Logic

## Eligibility Calculation

Checks whether a student is eligible based on attendance percentage.

```java
public class StudentEligibilityService {

    public static void updateEligibility(List<Student__c> students){

        for(Student__c s : students){

            if(s.Attendance_Percentage__c >= 75){
                s.Eligible__c = true;
            }
            else{
                s.Eligible__c = false;
            }
        }

        update students;
    }
}
```
<img width="1902" height="577" alt="Screenshot 2026-05-25 150005" src="https://github.com/user-attachments/assets/49c97148-ce78-492e-bac5-e13fed1d2fd5" />

<img width="1910" height="509" alt="Screenshot 2026-05-25 150020" src="https://github.com/user-attachments/assets/1ab2aca8-6bad-43c3-bb85-1a7cea351d92" />


---


# 7. UI Screens

studentDashboard-UI
<img width="1912" height="920" alt="Screenshot 2026-05-25 195503" src="https://github.com/user-attachments/assets/7efb967b-3766-4d62-8a24-0ae3069196f1" />

student registration flow-UI
<img width="1912" height="920" alt="Screenshot 2026-05-25 195503" src="https://github.com/user-attachments/assets/9c7dafc1-0400-4e79-ae2c-f33095c20bbc" />

student attendance warning flow-UI
<img width="1894" height="913" alt="Screenshot 2026-05-25 195307" src="https://github.com/user-attachments/assets/7d10c034-5651-48d7-8c8b-ad82ea5a0514" />

attendance warning flow-UI
<img width="1903" height="920" alt="Screenshot 2026-05-25 195240" src="https://github.com/user-attachments/assets/58f5d28b-1b90-4a6f-a2c9-7df71ce8e034" />

---

# 8. Complete Data Flow

```text
Student clicks Register
        ↓
LWC Registration Screen
        ↓
Apex Controller
        ↓
Validation Rules
        ↓
Flow Automation
        ↓
Trigger Execution
        ↓
Database Update
        ↓
Notification Sent
        ↓
Dashboard Refresh
```

---

# 9. Reflection

After developing this project, I realized that enterprise software systems require multiple layers working together, including frontend UI, backend logic, database management, automation, validations, and event-driven architecture.

Salesforce simplifies enterprise development by integrating CRM, automation, security, Apex programming, and modern UI frameworks like LWC into a single platform.

This project helped in understanding:
- Real enterprise architecture
- CRM system design
- Automation workflows
- Event-driven processing
- UI and backend integration
- Scalable application development

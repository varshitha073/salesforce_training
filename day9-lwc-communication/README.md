# 🌟 Day 9 — LWC Communication & Architecture

---

# 1.🔗 Component Communication

## 📡 Parent → Child Communication

Used when a parent component sends data to a child component.

### Example
Parent Dashboard sends:
- Student Name
- Course Details
- Attendance Data

### Method Used
@api Decorator

### Benefits
✔ Easy Data Sharing  
✔ Reusable Components  
✔ Clean Architecture  

--------------------------------------------------

## 📡 Child → Parent Communication

Used when child component sends information back to parent.

### Example
Attendance component informs:
"Attendance Updated Successfully"

### Method Used
Custom Events

### Benefits
✔ Event-Based Communication  
✔ Dynamic UI Updates  
✔ Better User Interaction  

--------------------------------------------------

## 📡 Unrelated Component Communication

Used when components are not directly connected.

### Methods
- Lightning Message Service (LMS)
- Pub/Sub Model

### Example
Notification component updates:
- Student Dashboard
- Faculty Dashboard
- Admin Dashboard

### Benefits
✔ Real-Time Updates  
✔ Cross Component Messaging  
✔ Enterprise-Level Communication  

---

# 2.🏗️ Dashboard Design

## 👨‍🎓 Student Dashboard

### Features
- View Courses
- Check Attendance
- Submit Assignments
- View Results
- Receive Notifications

### Components
```bash
studentDashboard
 ┣ studentProfile
 ┣ courseViewer
 ┣ attendanceTracker
 ┣ assignmentPanel
 ┗ notificationCenter
```

--------------------------------------------------

## 👨‍🏫 Faculty Dashboard

### Features
- Mark Attendance
- Upload Study Materials
- Update Marks
- Manage Assignments

### Components
```bash
facultyDashboard
 ┣ facultyProfile
 ┣ attendanceManager
 ┣ marksUpdater
 ┣ materialUploader
 ┗ assignmentManager
```

--------------------------------------------------

## 👨‍💼 Admin Dashboard

### Features
- User Management
- Course Allocation
- System Monitoring
- Reports & Analytics

### Components
```bash
adminDashboard
 ┣ userManagement
 ┣ courseAllocation
 ┣ analyticsPanel
 ┗ systemSettings
```

--------------------------------------------------

## 🎯 Dashboard Goals

✔ Easy Navigation  
✔ Modular Components  
✔ Fast Performance  
✔ Real-Time Updates  
✔ Better User Experience  

---

# 3.🔥 Data Flow Explanation

## 📌 Selected Process:
Student Registration

--------------------------------------------------

# 🌐 Complete Flow

```bash
UI
 ↓
Validation
 ↓
Flow
 ↓
Apex
 ↓
Database
 ↓
Notification
```

--------------------------------------------------

## 1️⃣ UI Layer

Student enters:
- Name
- Email
- Course
- Password

LWC component collects the data.

--------------------------------------------------

## 2️⃣ Validation Layer

System validates:
✔ Empty Fields  
✔ Valid Email  
✔ Password Strength  
✔ Duplicate Records  

If validation fails:
Error message displayed.

--------------------------------------------------

## 3️⃣ Flow Layer

Salesforce Flow automates:
- Student Creation
- Course Assignment
- Approval Process

--------------------------------------------------

## 4️⃣ Apex Layer

Apex performs backend processing:
- Business Logic
- Secure Operations
- Record Insertion

### Example
```apex
insert studentRecord;
```

--------------------------------------------------

## 5️⃣ Database Layer

Data stored inside:
- Student Object
- Enrollment Object
- Course Object

Database performs:
✔ Create  
✔ Read  
✔ Update  
✔ Delete  

--------------------------------------------------

## 6️⃣ Notification Layer

After successful registration:
✔ Success Message  
✔ Welcome Email  
✔ Dashboard Notification  

### Example
```bash
"Registration Successful"
```

---

# 4.⚡ Aura vs LWC Comparison

| Feature | Aura Components | Lightning Web Components (LWC) |
|----------|-----------------|-------------------------------|
| Performance | Slower | Faster |
| Framework | Proprietary Framework | Web Standards Based |
| JavaScript | Older Model | Modern ES6+ |
| Component Size | Heavy | Lightweight |
| Debugging | Difficult | Easier |
| Security | Locker Service | Lightning Web Security |
| Reusability | Moderate | High |
| Maintainability | Harder | Easier |

# 5.🌟 Reflection

Enterprise applications need modular architecture because it helps divide the system into smaller reusable modules. This improves scalability, maintainability, and development speed.

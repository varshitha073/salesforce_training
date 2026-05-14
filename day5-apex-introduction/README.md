# ✨ Introduction to Apex

---

## ✨ 1. What is Apex?

Apex is a strongly typed, object-oriented programming language used in Salesforce to perform **complex business logic**, **data processing**, and **automation** that cannot be handled by declarative tools alone. It runs on the Salesforce platform and follows multitenant governor limits.

---

## ✨ 2. Differences

### 🔹 Flow vs Apex

| Feature | Flow | Apex |
|--------|------|------|
| Type | Declarative (No code) | Programmatic (Code-based) |
| Ease | Easy for admins | Requires developers |
| Flexibility | Limited logic | Highly complex logic |
| Performance | Medium | High for complex operations |
| Use Case | Simple automation | Advanced business logic |

---

### 🔹 Configuration vs Coding

| Feature | Configuration | Coding |
|--------|--------------|--------|
| Approach | Point & Click | Write code |
| Tools | Flow, Process Builder, Validation Rules | Apex, LWC |
| Speed | Faster development | More control |
| Flexibility | Limited | Very high |
| Maintenance | Easy | Requires developer skill |

---

## ✨ 3. Real Examples Where Apex Is Needed

### 🔹 Example 1: Bulk Data Processing
When importing 50,000 student records, Apex handles bulk insertion with proper governor limit management.

### 🔹 Example 2: Complex Business Rules
Calculating scholarship eligibility based on multiple conditions like attendance, marks, and income.

### 🔹 Example 3: External System Integration
Connecting Salesforce with university ERP system using REST API to sync student data.

---

## ✨ 4. Integrated System Design – College Management System

### 🔹 CRM Layer
Salesforce acts as a CRM to manage:
- Students
- Faculty
- Courses
- Admissions

---

### 🔹 Objects Structure

- **Student__c**
- **Course__c**
- **Enrollment__c**
- **Faculty__c**
- **Attendance__c**

---

### 🔹 Relationships

- Student ↔ Enrollment (Lookup / Master-Detail)
- Course ↔ Enrollment (Lookup)
- Faculty ↔ Course (Lookup)

---

### 🔹 Validation Rules

- Student age must be ≥ 17
- Attendance cannot exceed 100%
- Marks must be between 0–100

---

### 🔹 Flow Automation

- Auto-create Enrollment when Student registers
- Send email notification on admission approval
- Update attendance status daily

---

### 🔹 Apex Logic Usage

- Fee calculation engine
- Bulk attendance updates
- Scholarship eligibility computation
- Integration with external systems

---

## ✨ 5. Pseudocode Examples

public class CollegeLogicExamples {

    // 1. Scholarship Eligibility
    public static String checkScholarship(Integer marks, Integer attendance) {
        if (marks > 85 && attendance > 90) {
            return 'Eligible';
        } else {
            return 'Not Eligible';
        }
    }

    // 2. Fee Calculation Logic
    public static Integer calculateFee(Integer courseFee, Integer discount, String category) {
        Integer totalFee = courseFee - discount;

        if (category == 'SC/ST') {
            totalFee = totalFee - (totalFee * 10 / 100);
        }

        return totalFee;
    }

    // 3. Bulk Attendance Update Logic (Simulation)
    public static List<String> updateAttendance(List<Integer> attendanceList) {
        List<String> statusList = new List<String>();

        for (Integer att : attendanceList) {
            if (att >= 75) {
                statusList.add('Good Standing');
            } else {
                statusList.add('Warning');
            }
        }

        return statusList;
    }
}

## ✨6. Reflection – Why Enterprise Systems Need Programming

Enterprise systems start with declarative tools like Flow and validation rules because they are simple, fast, and easy to maintain. But as business requirements grow, these tools become limited in handling complex logic and large-scale data operations.

Programming is needed because it provides more control, flexibility, and scalability. It allows developers to implement complex business rules, process bulk data efficiently, and integrate Salesforce with external systems using APIs.

In short, when business complexity increases beyond what configuration tools can handle, programming becomes essential for building reliable and scalable enterprise solutions.

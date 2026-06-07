
# 📁 admin-day1-user-management/

# ⚡ What is a Salesforce Administrator?

A Salesforce Administrator is responsible for managing and maintaining the Salesforce platform in an organization. They handle user management, security, permissions, automation, and data access to ensure the system runs smoothly and securely.

---

# ⚡ Difference Between User • Role • Profile • Permission Set

| Feature | User | Role | Profile | Permission Set |
|---|---|---|---|---|
| Definition | Individual login account in Salesforce | Controls record visibility through hierarchy | Base level permissions for a user | Extra permissions added on top of profile |
| Purpose | Access Salesforce system | Manage data access structure | Define default permissions | Extend user permissions without changing profile |
| Level | Identity level | Record level | Object & system level | Feature level |
| Assignment | One per user | One per user | One per user | Multiple per user |
| Example | Student login | HOD hierarchy | Standard User profile | Edit attendance permission |

---

# ⚡ College Security Design

In a college Salesforce system, different users are assigned different levels of access based on their roles.

Users include Student, Faculty, Placement Officer, HOD, Principal, and Administrator.

Each role is given access based on responsibility:

- Students can view their own records  
- Faculty can manage academic and attendance data  
- Placement officers handle placement-related records  
- HODs have department-level control  
- Principal has full institutional access  
- Admin manages the entire system  

---

# ⚡ Administrator Access Risks

- Unauthorized access to sensitive student and faculty data  
- Deletion of important academic and placement records  
- Security misconfiguration affecting the entire system  
- Exposure of confidential organizational information  
- Modification of user roles, profiles, and permissions  
- System-wide disruption due to incorrect changes  
- Loss of data integrity and control over records  

---

# ⚡ Reflection

Enterprise systems handle large amounts of sensitive and critical data. Proper access control ensures that only the right users can view or modify the right information, which helps maintain security, accuracy, and trust in the system.

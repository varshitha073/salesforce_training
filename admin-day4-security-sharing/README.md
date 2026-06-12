# Salesforce Security & Sharing Model – Day 4

## What is OWD (Organization-Wide Defaults)?
OWD defines the baseline level of record access for users in Salesforce when no other sharing is applied.

- Sets default visibility of records
- Applied at object level
- Common settings:
  - Private
  - Public Read Only
  - Public Read/Write

---

## What is Role Hierarchy?
Role Hierarchy controls record access based on organizational structure.

- Higher roles automatically access records of lower roles
- Represents reporting structure
- Example:
  Principal → HOD → Faculty → Student

---

## What are Sharing Rules?
Sharing Rules are used to extend record access beyond OWD restrictions.

- Used when OWD is Private or Restricted
- Types:
  - Owner-based sharing rules
  - Criteria-based sharing rules
- Shares records with roles, groups, or territories

---

## Difference Between Profile, Permission Set, and Role

| Feature | Profile | Permission Set | Role |
|--------|--------|----------------|------|
| Purpose | Base permissions for user | Extra permissions | Record visibility control |
| Level | Object + field access | Additional permissions | Record-level access |
| Assignment | One per user | Multiple per user | One per user |
| Controls | App access, CRUD, FLS | Add-on privileges | Data visibility via hierarchy |
| Mandatory | Yes | No | Optional but important |

---

## College Security Design (Scenario)

### Role Structure
- Principal
- HOD
- Faculty
- Placement Officer
- Student
- Salesforce Administrator

### OWD Settings
- Student Records → Private
- Faculty Records → Private
- Placement Records → Private

### Sharing Rules
- Faculty A → CSE students only
- Faculty B → ECE students only
- HOD → All department students
- Principal → Full access via role hierarchy

### Permission Sets
- Faculty → Attendance edit access
- Placement Officer → Placement data access
- Admin → Full system access

---

## Faculty Access Scenario

| Role | Record Access |
|------|--------------|
| Faculty A | Only CSE students |
| Faculty B | Only ECE students |
| HOD | All department students |
| Principal | Entire org |

---

## Reflection

Why record-level security is important:

- Protects sensitive data
- Prevents unauthorized access
- Ensures data privacy
- Avoids accidental modifications
- Maintains organizational structure control
- Reduces data leakage risk
- Enables role-based access control
- Improves governance
- Supports scalability
- Ensures accountability

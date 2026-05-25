# ✨ Salesforce Data Modeling ✨

Salesforce Data Modeling is the process of organizing and managing data using Apps, Objects, Records, and Fields. These components help store, manage, and access business information efficiently.

---

# 1. 📊 Difference Between App, Object, Record, and Field

| Feature | App | Object | Record | Field |
|----------|-----|--------|--------|-------|
| **Definition** | Collection of tools and features for a specific purpose | Database table that stores related data | Single row of data inside an object | Single column that stores specific information |
| **Purpose** | Provides a complete working environment | Stores multiple records | Represents one entry of data | Stores one type of data |
| **Acts Like** | Workspace/Application | Table | Row | Column |
| **Contains** | Objects, dashboards, reports, tabs | Fields and records | Field values | Data values |
| **Example** | Sales App | Student Object | One student’s details | Name, Email |
| **Scope** | Highest level | Middle level | Individual data entry | Smallest data unit |
| **Used For** | Managing complete business processes | Organizing data | Storing one item’s information | Defining data attributes |

---

# 2. ✨ Standard Objects vs Custom Objects ✨

| Feature | Standard Objects | Custom Objects |
|----------|------------------|----------------|
| **Definition** | Pre-built objects provided by Salesforce | User-created objects based on business needs |
| **Creation** | Created automatically by Salesforce | Created manually by users or developers |
| **Customization Level** | Limited customization | Highly customizable |
| **Purpose** | Used for common business processes | Used for specific or unique business requirements |

---

# 3.✨ College Data Model ✨

This data model is created to manage student and course information in Salesforce using objects and relationships.

# 📘 Objects Created

## 1. Student Object
The Student object is used to store details related to students.
<img width="1895" height="907" alt="Image" src="https://github.com/user-attachments/assets/64bb78c0-a92a-4e9a-ba42-b8ff752c1b7e" />

## 2. Course Object
The Course object is used to store course-related information.
<img width="1890" height="867" alt="Image" src="https://github.com/user-attachments/assets/a33128cb-2577-4b6b-94f5-e1d5da3d0adb" />

# 🔗 Relationship Between Objects

A relationship is created between the **Student Object** and the **Course Object**.

- Each student is connected to a course.
- The relationship helps in linking student details with course details.
- A lookup relationship field named **Course** is created inside the Student object.
- While creating the relationship, the **Field Label** and **Field Name** are entered as **Course**.
  <img width="1908" height="857" alt="Image" src="https://github.com/user-attachments/assets/0abd6773-4438-4450-bed1-4d2c705be607" />
  <img width="1886" height="847" alt="Image" src="https://github.com/user-attachments/assets/16a83504-a878-451e-8bbc-00456189ef6a" />

---
# 4. Formula Fields

Formula Fields in :contentReference[oaicite:0]{index=0} automatically calculate values using other fields. They help reduce manual work and keep data updated automatically.

# Formula Field 1 — Days Remaining

## Object
Contract

## Formula

```salesforce
EndDate - TODAY()
```

## Explanation

Calculates the number of days left before the contract expires.


# Formula Field 2 — Potential Value

## Object
Account

## Type
Roll-Up Summary Field

## Configuration

```text
Summarized Object : Opportunities
Roll-Up Type      : SUM
Field             : Expected Revenue
```

## Explanation

Calculates the total expected revenue from all related opportunities.

# Benefits of Formula Fields

- Reduces manual calculations
- Improves accuracy
- Saves time
- Updates automatically

---

# 5. Validation Rules

Validation Rules in :contentReference[oaicite:0]{index=0} are used to prevent users from entering incorrect data. They help maintain data accuracy and consistency.


# Validation Rule 1 — Contact ZIP Code Validation

## Object
Contact

## Rule Name

```text
Contact_must_be_in_Account_ZIP_Code
```

## Formula

```salesforce
AND(
    NOT(ISBLANK(AccountId)),
    MailingPostalCode <> Account.ShippingPostalCode
)
```

## Explanation

- Checks whether the Contact is linked to an Account.
- Compares the Contact ZIP Code with the Account Shipping ZIP Code.
- Displays an error if both ZIP codes are different.

## Error Message

```text
Contact mailing ZIP code must match the Account shipping ZIP code.
```


# Validation Rule 2 — Contract End Date Validation

## Object
Contract

## Rule Name

```text
Contract_End_Date_Check
```

## Formula

```salesforce
EndDate < TODAY()
```

## Explanation

- Checks whether the contract end date is earlier than today.
- Prevents saving expired contract dates.

## Error Message

```text
Contract end date cannot be earlier than today's date.
```


# Benefits of Validation Rules

- Improves data accuracy
- Prevents invalid entries
- Maintains consistency
- Automates data checking

---

# 6. Reflection

Structured enterprise data is very important in :contentReference[oaicite:0]{index=0} because it helps organizations manage information in a clear and organized way. When data is properly structured using objects, fields, relationships, formula fields, and validation rules, it becomes easier to store, access, and analyze business records.

In Salesforce, structured data improves accuracy and reduces manual errors. It also helps different departments work together using the same reliable information. Features like reports, dashboards, automation, and workflows depend on clean and connected data.

For example, linking Students with Courses or Contacts with Accounts makes it easier to track related information quickly. Validation rules ensure correct data entry, while formula fields automate calculations without manual work.

Overall, structured enterprise data helps businesses save time, improve decision-making, increase productivity, and maintain better customer and organizational management.

---

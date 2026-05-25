# ✨ Salesforce SOQL & Apex Trigger Concepts ✨

---

# 🚀 1. What is SOQL?

SOQL (Salesforce Object Query Language) is a query language used in Salesforce to retrieve data from Salesforce objects such as Account, Contact, Opportunity, Lead, and custom objects.

It is similar to SQL but designed specifically for Salesforce data.

---

# ⚡ 2. What is an Apex Trigger?

An Apex Trigger is code that automatically executes before or after events occur on Salesforce records, such as insert, update, delete, or undelete.

Triggers help automate business processes inside Salesforce.

### 💡 Example
```apex
trigger AccountTrigger on Account (before insert) {

    for(Account acc : Trigger.New) {
        acc.Description = 'New Account Created';
    }
}
```
---

# 🔥 3. Difference Between Concepts

## 🌊 Flow vs Trigger

| Flow | Trigger |
|------|----------|
| Low-code automation tool | Code-based automation |
| Created using Flow Builder | Written using Apex |
| Easier for admins | Requires programming knowledge |
| Best for simple automation | Best for complex logic |
| No coding required | Coding required |

---

## ⚔️ Before Trigger vs After Trigger

| Before Trigger | After Trigger |
|----------------|----------------|
| Executes before data is saved | Executes after data is saved |
| Used to validate or modify data | Used for related record operations |
| Faster because no extra save needed | Used when record ID is required |
| Example: Updating field values | Example: Creating tasks or cases |

---

# 🌟 4. Trigger Use Cases (Examples)

## ✅ 1. Auto Create Task
When an order is shipped, automatically create a follow-up task.

## ✅ 2. Send Notification
Notify support teams when urgent platform events are received.

## ✅ 3. Data Validation
Prevent users from saving invalid records.

## ✅ 4. Update Related Records
Automatically update Opportunity status when a related record changes.

## ✅ 5. Audit Tracking
Store logs whenever important business data changes.

---

# 💎 5. Query Examples (English Query Ideas)

## 🔹 Example 1
Get all Accounts from Salesforce.

```apex
SELECT Id, Name FROM Account
```

---

## 🔹 Example 2
Find all Contacts related to a specific Account.

```apex
SELECT Id, Name FROM Contact WHERE AccountId != null
```

---

## 🔹 Example 3
Get Opportunities with Closed Won stage.

```apex
SELECT Id, Name FROM Opportunity WHERE StageName = 'Closed Won'
```

---

## 🔹 Example 4
Retrieve Leads created today.

```apex
SELECT Id, Name FROM Lead WHERE CreatedDate = TODAY
```

---

## 🔹 Example 5
Find Tasks with High priority.

```apex
SELECT Id, Subject FROM Task WHERE Priority = 'High'
```

---

# 🎯 6. Reflection

Enterprise systems react automatically to data changes to improve efficiency, accuracy, and real-time business operations.

Using tools like SOQL, Apex Triggers, Flows, and Platform Events, Salesforce can automate tasks, send notifications, validate records, and connect different systems without manual work.

This automation helps companies reduce errors, save time, and improve customer experience.

---

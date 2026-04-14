# Certification and Troubleshooting Guide

This guide covers the procedures for manual certification, decertification, and the logic governing automated workflows in the Account Reconciliation (AR) module.

## Manual Certification Workflow
Certifying an account indicates that the reconciliation is complete and accurate according to company policy.

1. **Access:** Navigate to **Products > Accounts > View reconciliations**.
2. **Review:** Open the reconciliation and verify that the **Unidentified Difference** is within the allowed threshold.
3. **Evidence:** Attach supporting documents and enter required comments.
4. **Action:** Complete the certification statement and select **Certify**.

> [!NOTE] 
> Certification captures a timestamp and user ID. Once certified, the record is locked from further edits unless decertified.

---

## Auto-Certification Logic
Auto-certification rules allow the system to certify reconciliations without manual intervention. This process is governed by specific system-level and account-level parameters.

### Success Criteria
For a reconciliation to auto-certify, the following must be true:
* **Threshold Match:** The balance must be within the **Auto-Certification Threshold Amount** set in System Settings.
* **Zero Variance:** For calculated balance templates, the balance must equal zero.
* **Account Status:** The individual account or Account Group must not be excluded from auto-certification rules.

### Troubleshooting Failures
If an account fails to auto-certify, check the **System Decertified** status in the reconciliations view. Common root causes include:
* **Balance Changes:** Changes in the imported General Ledger balance after the rule was triggered.
* **Activity Flags:** New activity detected in a previously "No Activity" account.

---

## Decertification Procedures
Decertification reverts a reconciliation to an "Incomplete" status for remediation.

### User-Initiated Decertification
* **Role:** Approver or Reviewer.
* **Time Limit:** Users may decertify an account until midnight of the same day it was certified.
* **Process:** Click **Request Decertification** and provide a mandatory comment for the audit trail.

### Administrator Decertification
* **Role:** Administrator.
* **Use Case:** Required if the same-day time limit has passed or for system-wide adjustments.
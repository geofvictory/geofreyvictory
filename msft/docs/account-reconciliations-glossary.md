# Terminology Reference: Account Reconciliations

This document defines core terminology and system concepts for the Account Reconciliation (AR) module. Standardizing these terms ensures consistency across user documentation, UI strings, and AI agent responses.

## Core System Concepts

| Term | Definition | Rationale/Context |
|------|-----------|-------------------|
| Account Reconciliation | The automated and standardized process of verifying the correctness and appropriateness of balance sheets. | Use this full term in headers; "AR" is acceptable for internal dev notes. |
| Preparer | The user role responsible for initiating the reconciliation process, attaching supporting documentation, and certifying results. | This is the primary actor in the workflow. |
| Certification | The formal act of a user (Preparer, Approver, or Reviewer) electronically signing off on a reconciliation. Once complete, the date and name are captured in history and cannot be changed. | |
| Unidentified Difference | The remaining variance between the General Ledger (GL) balance and the subtotal of supporting items. | High unidentified differences may prevent certification based on defined thresholds. |

## Configuration & Governance

| Term | Definition | Rationale/Context |
|------|-----------|-------------------|
| Template | A predefined configuration and workflow that automates and enforces standardization across the reconciliation process. | Templates minimize the need for manual spreadsheets. |
| Account Group | A collection of similar accounts grouped together for efficient processing and shared supporting documentation. | Accounts in a group must use the same template. |
| Management Review Group | A specialized grouping created to provide a higher level of review for Managers and Auditors. | Used for governance rather than standard preparation. |
| Template Control | Specific fields or actions (e.g., "General Ledger Items") added to a template to define what a Preparer sees on the face of a reconciliation. | If a control is missing for an added item, a "Template Control Error" occurs. |

## Automation & Workflow

| Term | Definition | Rationale/Context |
|------|-----------|-------------------|
| Auto-Certification | An automated process where the system certifies an account if it meets specific rules defined by an administrator. | Designed to eliminate repetitive tasks for low-risk or perfectly balanced accounts. |
| Threshold | A set limit (amount or percentage) that determines if an account can be certified or auto-certified. | If a difference exceeds this threshold, manual intervention is required. |
| Item Class | The classification assigned to a reconciling item (e.g., Timing Item, Required Adjustment). | Determines which table or control the item appears in on the reconciliation page. |
| Decertify | The action of removing a certification status, typically performed when a reconciliation does not meet checklist requirements. | Usually requires a comment explaining the reason for the reversal. |

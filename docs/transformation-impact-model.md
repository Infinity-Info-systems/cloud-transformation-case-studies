# Transformation Impact Model

## Purpose

The impact model connects transformation actions to measurable outcomes so case studies can show value beyond activity.
It should help writers choose metrics that are understandable to executives and still useful for proof.

## Impact Areas

- cost
- reliability
- resilience
- governance
- architecture
- delivery speed
- compliance

## Model Structure

| Action Area | Output | Outcome | Evidence |
| --- | --- | --- | --- |
| Governance | Policy and control changes | Fewer gaps and exceptions | Review notes |
| Reliability | SLO and incident improvements | Lower incident burden | Incident metrics |
| FinOps | Rightsizing and allocation changes | Better spend control | Cost reports |
| DR | Recovery improvements | Higher confidence in recovery | Test results |

## Impact Flow

```mermaid
flowchart LR
  A[Action] --> B[Operational Change]
  B --> C[Business Outcome]
  C --> D[Evidence]
  D --> E[Published Case Study]
```

## How To Use

- connect every action to a measurable result
- describe the business effect, not only the technical action
- include trend data when possible
- identify whether the outcome is realized or projected
- keep the same metric family across related case studies when possible

## Impact Rule

Every action should connect to a measurable result that matters to the business.

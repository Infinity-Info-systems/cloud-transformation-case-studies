export type CaseTheme = 'SRE Reliability' | 'Multi-Cloud Governance' | 'Enterprise Architecture' | 'Disaster Recovery' | 'FinOps';

export type CaseStatus = 'Draft' | 'Published' | 'Validated';

export interface TransformationCase {
  name: string;
  theme: CaseTheme;
  impact: string;
  metricFocus: string;
  evidence: string;
  status: CaseStatus;
}

export interface CaseRegistry {
  repository: string;
  purpose: string;
  themes: CaseTheme[];
  cases: TransformationCase[];
  storyLayers: string[];
  decisionRule: string;
  publicationQuestions: string[];
}

export const caseRegistry: CaseRegistry = {
  repository: 'Cloud Transformation Case Studies',
  purpose:
    'Organize anonymized transformation stories, metrics, and evidence into a reusable public case-study library.',
  themes: [
    'SRE Reliability',
    'Multi-Cloud Governance',
    'Enterprise Architecture',
    'Disaster Recovery',
    'FinOps',
  ],
  cases: [
    {
      name: 'Multi-Cloud Governance Standardization',
      theme: 'Multi-Cloud Governance',
      impact: 'Reduced policy gaps',
      metricFocus: 'Control coverage and exceptions',
      evidence: 'Governance review notes',
      status: 'Validated',
    },
    {
      name: 'DR Readiness Uplift',
      theme: 'Disaster Recovery',
      impact: 'Improved recovery confidence',
      metricFocus: 'Recovery test success and cadence',
      evidence: 'Recovery test results',
      status: 'Validated',
    },
    {
      name: 'FinOps Cost Optimization',
      theme: 'FinOps',
      impact: 'Better cost visibility',
      metricFocus: 'Allocation quality and spend trend',
      evidence: 'Cost reports',
      status: 'Published',
    },
    {
      name: 'Reliability Program Review',
      theme: 'SRE Reliability',
      impact: 'Lower incident burden',
      metricFocus: 'Incidents and MTTR',
      evidence: 'Incident metrics',
      status: 'Draft',
    },
  ],
  storyLayers: ['Narrative', 'Evidence', 'Metrics', 'Executive', 'Publication'],
  publicationQuestions: [
    'What changed?',
    'How do we know?',
    'What improved?',
    'Why did it matter?',
    'How is it shared?',
  ],
  decisionRule:
    'A case should not be published unless the story, the evidence, and the metric trail can be shown together.',
};

export function getCaseOverview() {
  return {
    repository: caseRegistry.repository,
    purpose: caseRegistry.purpose,
    caseCount: caseRegistry.cases.length,
    validatedCases: caseRegistry.cases.filter((entry) => entry.status === 'Validated').length,
    publishedCases: caseRegistry.cases.filter((entry) => entry.status === 'Published').length,
  };
}

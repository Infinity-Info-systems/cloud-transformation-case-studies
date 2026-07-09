import { caseRegistry } from './caseRegistry';

export interface CaseReportRow {
  caseName: string;
  theme: string;
  impact: string;
  metricFocus: string;
  status: string;
}

export function buildCaseReport() {
  const rows: CaseReportRow[] = caseRegistry.cases.map((entry) => ({
    caseName: entry.name,
    theme: entry.theme,
    impact: entry.impact,
    metricFocus: entry.metricFocus,
    status: entry.status,
  }));

  return {
    title: caseRegistry.repository,
    purpose: caseRegistry.purpose,
    themes: caseRegistry.themes,
    storyLayers: caseRegistry.storyLayers,
    publicationQuestions: caseRegistry.publicationQuestions,
    decisionRule: caseRegistry.decisionRule,
    reportRows: rows,
  };
}

export function buildCaseSummary() {
  return {
    totalCases: caseRegistry.cases.length,
    validatedCases: caseRegistry.cases.filter((entry) => entry.status === 'Validated').length,
    publishedCases: caseRegistry.cases.filter((entry) => entry.status === 'Published').length,
    draftCases: caseRegistry.cases.filter((entry) => entry.status === 'Draft').length,
  };
}

function getVal(elt){
	if (elt){return Number(elt)} 
    else {return Number(0);}
}
//Commitment
function getCommitmentAssessment(){
    var haveCharter = getVal($('input[type=radio][name=have-charter]:checked').val());
    var haveListCoreJob = getVal($('input[type=radio][name=have-list-core-job]:checked').val());
    var isCoreJobFilled = getVal($('input[type=radio][name=is-core-job-filled]:checked').val());
    var haveStrategicPlan = getVal($('input[type=radio][name=have-strategic-plan]:checked').val());
    var haveWrittenApproachCG = getVal($('input[type=radio][name=have-written-approach-CG]:checked').val());
    var haveDesignatedIndividualResponsible = getVal($('input[type=radio][name=have-designated-individual-responsible]:checked').val());
    var haveSecretary = getVal($('input[type=radio][name=have-secretary]:checked').val());
    var isReadyForStockExchange = getVal($('input[type=radio][name=is-ready-for-stock-exchange]:checked').val());
    var haveRegularReportToBoard = getVal($('input[type=radio][name=have-regular-report-to-board]:checked').val());
	
    var commitment=haveCharter+haveListCoreJob+isCoreJobFilled+haveStrategicPlan+haveWrittenApproachCG+haveDesignatedIndividualResponsible+haveSecretary+isReadyForStockExchange+haveRegularReportToBoard;
    return commitment;
}
//Your Board
function getBoardAssessment(){

    var haveFoundersConsultedForDecision = getVal($('input[type=radio][name=have-founders-consulted-for-decision]:checked').val());
    var haveEngagedExternalAdvisers = getVal($('input[type=radio][name=have-engaged-external-advisers]:checked').val());
    var haveStrategicInput = getVal($('input[type=radio][name=have-strategic-input]:checked').val());
    var haveFormalizedDelegatedSigningAuthority = getVal($('input[type=radio][name=have-formalized-delegated-signing-authority]:checked').val());
    var haveBusinessContinuityPlan = getVal($('input[type=radio][name=have-business-continuity-plan]:checked').val());
    var haveEngagedWithOtherExecutives = getVal($('input[type=radio][have-engaged-with-other-executives]:checked').val());
    var haveSuccessionPlan = getVal($('input[type=radio][name=have-succession-plan]:checked').val());
    var haveFormalBoard = getVal($('input[type=radio][name=have-formal-board]:checked').val());
    var isBoardMemberClearOnRoles = getVal($('input[type=radio][name=is-board-member-clear-on-roles]:checked').val());
    var haveScheduledMeetings = getVal($('input[type=radio][name=have-scheduled-meetings]:checked').val());
    var haveIndependentMemberInBoard = getVal($('input[type=radio][name=have-independent-member-in-board]:checked').val());
    var isBoardMeetingRegularly = getVal($('input[type=radio][name=is-board-meeting-regularly]:checked').val());
    var isBoardTrainingRegularly = getVal($('input[type=radio][name=is-board-training-regularly]:checked').val());
    var haveBoardUndergoneAnnualPerformance = getVal($('input[type=radio][name=have-board-undergone-annual-performance]:checked').val());
    var haveBoardApprovedSuccessionPlanning = getVal($('input[type=radio][name=have-board-approved-succession-planning]:checked').val());
    
    var board = haveFoundersConsultedForDecision+haveEngagedExternalAdvisers+haveStrategicInput+haveFormalizedDelegatedSigningAuthority+haveBusinessContinuityPlan+haveEngagedWithOtherExecutives+haveSuccessionPlan+haveFormalBoard+isBoardMemberClearOnRoles+haveScheduledMeetings+haveIndependentMemberInBoard+isBoardMeetingRegularly+isBoardTrainingRegularly+haveBoardUndergoneAnnualPerformance+haveBoardApprovedSuccessionPlanning;
    return board;
}
//Control environment
function getControlEnvironmentAssessment(){
    
    var isCashFlowManagementCommunicated = getVal($('input[type=radio][name=is-cash-flow-management-communicated]:checked').val());
    var isFounderCashBankAcctsSeparated = getVal($('input[type=radio][name=s-founder-cash-bank-accts-separated]:checked').val());
    var haveEstablishedPolicy = getVal($('input[type=radio][name=have-established-policy]:checked').val());
    var isPrincipleBusinessCommunicated = getVal($('input[type=radio][name=is-principle-business-communicated]:checked').val());
    var haveAccountingPoliciesEstablished = getVal($('input[type=radio][name=have-accounting-policies-established]:checked').val());
    var isControlCashManagementEstablished = getVal($('input[type=radio][name=is-control-cash-management-established]:checked').val());
    var haveOutsourcedInternalAudit = getVal($('input[type=radio][name=have-outsourced-internal-audit]:checked').val());
    var isStrategyDocumented = getVal($('input[type=radio][name=is-strategy-documented]:checked').val());
    var haveCFO = getVal($('input[type=radio][name=have-CFO]:checked').val());
    var isBusinessUnitReporting = getVal($('input[type=radio][name=is-business-unit-reporting]:checked').val());
    var haveInternalAuditFunction = getVal($('input[type=radio][name=have-internal-audit-function]:checked').val());
    var isExternalAuditorReportingToBoard = getVal($('input[type=radio][name=is-external-auditor-reporting-to-board').val());
    var haveEstablishedSystemForRecordingSales = getVal($('input[type=radio][name=have-established-system-for-recording-sales]:checked').val());
    var isInvestorAwareOfRiskManagement = getVal($('input[type=radio][name=is-investor-aware-of-risk-management]:checked').val());
    var haveFrameworkForEnvironmentalRisk = getVal($('input[type=radio][name=have-framework-for-environmental-risk ]:checked').val());
    var isBoardMonitoringControlEnvironment = getVal($('input[type=radio][name=is-board-monitoring-control-environment]:checked').val());
    var isBoardMonitoringRiskManagement = getVal($('input[type=radio][name=is-board-monitoring-risk-management]:checked').val());
    var haveAuditorsProvidedWrittenLetter = getVal($('input[type=radio][name=have-auditors-provided-written-letter]:checked').val());
    
    var control_environment = isCashFlowManagementCommunicated+isFounderCashBankAcctsSeparated+haveEstablishedPolicy+isPrincipleBusinessCommunicated+haveAccountingPoliciesEstablished+isControlCashManagementEstablished+haveOutsourcedInternalAudit+isStrategyDocumented+haveCFO+isBusinessUnitReporting+haveInternalAuditFunction+isExternalAuditorReportingToBoard+haveEstablishedSystemForRecordingSales+isInvestorAwareOfRiskManagement+haveFrameworkForEnvironmentalRisk+isBoardMonitoringControlEnvironment+isBoardMonitoringRiskManagement+haveAuditorsProvidedWrittenLetter;
    return control_environment;
} 
//Transparency and Disclosure
function getTransparencyAndDisclosureAssessment(){
   
    var isFinancialAccountReconciled = getVal($('input[type=radio][name=is-financial-account-reconciled]:checked').val());
    var isFounderAwareOfBankAcctReconciliation = getVal($('input[type=radio][name=is-founder-aware-of-bank-acct-reconciliation]:checked').val());
    var haveFounderReceivedConsistentFinancialInformation = getVal($('input[type=radio][name=have-founder-received-consistent-financial-information]:checked').val());
    var isPrincipleOfBusinessCommunicated = getVal($('input[type=radio][name=is-principle-of-business-communicated]:checked').val());
    var isKeyDecisionReportedToStaff = getVal($('input[type=radio][name=is-key-decision-reported-to-staff]:checked').val());
    var isFinancialStatementAudited = getVal($('input[type=radio][name=is-financial-statement-audited]:checked').val());
    var isGovernanceInformationCommunicated = getVal($('input[type=radio][name=is-governance-information-communicated]:checked').val());
    var isAdvisorAwareOfPerformance = getVal($('input[type=radio][name=is-advisor-aware-of-performance]:checked').val());
    var isFinancialStatementAuditedByAuditingFirm = getVal($('input[type=radio][name=is-financial-statement-audited-by-auditing-firm]:checked').val());
    var isFinancialStatementStandardized = getVal($('input[type=radio][name=is-financial-statement-standardized]:checked').val());
    var isAnnualReportEnvironmentalProduced = getVal($('input[type=radio][name=is-annual-report-environmental-produced]:checked').val());
    var isFinancialStatementApprovedByShareholder = getVal($('input[type=radio][name=is-financial-statement-approved-by-shareholder]:checked').val());
    var isNoFinancialInformationDisclosed = getVal($('input[type=radio][name=is-non-financial-information-disclosed]:checked').val());
    var haveDisclosureIncludedRegulatedPartyTransactions = getVal($('input[type=radio][name=have-disclosure-included-regulated-party-transactions]:checked').val());
    
    var transparency_disclosure = isFinancialAccountReconciled+isFounderAwareOfBankAcctReconciliation+haveFounderReceivedConsistentFinancialInformation+isPrincipleOfBusinessCommunicated+isKeyDecisionReportedToStaff+isFinancialStatementAudited+isGovernanceInformationCommunicated+isAdvisorAwareOfPerformance+isFinancialStatementAuditedByAuditingFirm+isFinancialStatementStandardized+isAnnualReportEnvironmentalProduced+isFinancialStatementApprovedByShareholder+isNoFinancialInformationDisclosed+haveDisclosureIncludedRegulatedPartyTransactions;
    return transparency_disclosure;
}
//Ownership
function getOwnershipAssessment(){
    
    var haveShareholderAgreement = getVal($('input[type=radio][name=have-charter]:checked').val());
    var isFounderRoleEstablished = getVal($('input[type=radio][name=have-charter]:checked').val());
    var isBeneficialOwnershipDisclosed = getVal($('input[type=radio][name=have-charter]:checked').val());
    var isAGMHeld = getVal($('input[type=radio][name=have-charter]:checked').val());
    var haveDividendPolicies = getVal($('input[type=radio][name=have-charter]:checked').val());
    var hasEquitableTreatmentAllShareholders = getVal($('input[type=radio][name=have-charter]:checked').val());
    var haveClearCommunicationWithShareholders = getVal($('input[type=radio][name=have-charter]:checked').val());
    var haveDistinctionRolesFounderFamilyManager = getVal($('input[type=radio][name=have-charter]:checked').val());
    var isFamiltySuccessionInPlace = getVal($('input[type=radio][name=have-charter]:checked').val());
    var haveKeyDecisionInAnnualShareholderMeeting = getVal($('input[type=radio][name=have-charter]:checked').val());
    var isRightOfPartnerEstablished = getVal($('input[type=radio][name=have-charter]:checked').val());
    var havePolicyToRegulateFamilyBenefit = getVal($('input[type=radio][name=have-charter]:checked').val());
    var isShareholderUpdatedOnResults = getVal($('input[type=radio][name=have-charter]:checked').val());
    var haveMechanismForResolvingDisputes = getVal($('input[type=radio][name=have-charter]:checked').val());
    var havePolicyForMinorityShareholder = getVal($('input[type=radio][name=have-charter]:checked').val());
    var isShareholderUnderstandingPolicy = getVal($('input[type=radio][name=have-charter]:checked').val());
    var isBoardMonitorRiskManagement = getVal($('input[type=radio][name=have-charter]:checked').val());
    var haveMechanismForAddressingIssues = getVal($('input[type=radio][name=have-charter]:checked').val());
    
    var ownership = haveShareholderAgreement+isFounderRoleEstablished+isBeneficialOwnershipDisclosed+isAGMHeld+haveDividendPolicies+hasEquitableTreatmentAllShareholders+haveClearCommunicationWithShareholders+haveDistinctionRolesFounderFamilyManager+isFamiltySuccessionInPlace+haveKeyDecisionInAnnualShareholderMeeting+isRightOfPartnerEstablished+havePolicyToRegulateFamilyBenefit+isShareholderUpdatedOnResults+haveMechanismForResolvingDisputes+havePolicyForMinorityShareholder+isShareholderUnderstandingPolicy+isBoardMonitorRiskManagement+haveMechanismForAddressingIssues;
    return ownership;
 
}
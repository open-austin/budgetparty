export function changeDepartmentPercentChange(departmentId, percentChange) {
  return {
    type: 'CHANGE_DEPARTMENT_PERCENT_CHANGE',
    departmentId,
    percentChange,
  };
}

export function updateExplainResponse(departmentId, text) {
  return {
    type: 'UPDATE_EXPLAIN_RESPONSE',
    departmentId,
    text,
  }
}

export function resetDepartmentPercentChange(departmentId) {
  return {
    type: 'RESET_DEPARTMENT_PERCENT_CHANGE',
    departmentId,
  }
}

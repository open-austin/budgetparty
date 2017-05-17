export function changeDepartmentAmount(departmentId, percentChange) {
  return {
    type: 'CHANGE_DEPARTMENT_AMOUNT',
    departmentId,
    percentChange,
  };
}

export function updateExplainResponse(departmentId, text) {
  return {
    type: 'UPDATE_EXPLAIN_RESPONSE',
    departmentId,
    text
  }
}

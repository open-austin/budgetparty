export function changeDepartmentAmount(departmentId, amount) {
  return {
    type: 'CHANGE_DEPARTMENT_AMOUNT',
    departmentId,
    amount,
  };
}

export function updateExplainResponse(departmentId, text) {
  return {
    type: 'UPDATE_EXPLAIN_RESPONSE',
    departmentId,
    text
  }
}

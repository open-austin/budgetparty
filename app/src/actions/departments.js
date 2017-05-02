export function changeDepartmentAmount(departmentId, amount) {
  return {
    type: 'CHANGE_DEPARTMENT_AMOUNT',
    departmentId,
    amount,
  };
}

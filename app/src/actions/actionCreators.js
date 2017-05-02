export function loginUser(user) {
  return {
    type: 'LOGIN_USER',
    user,
  };
}

export function updateServiceSpendingAmount() {
  return {
    type: 'UPDATE_SERVICE_SPENDING_AMOUNT',
  };
}

export function resetDepartmentAmount(department) {
  return {
    type: 'RESET_DEPARTMENT_AMOUNT',
    department,
  };
}

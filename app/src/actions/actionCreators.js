export function loginUser(user) {
  return {
    type: 'LOGIN_USER',
    user,
  };
}

export function changeDepartmentAmount(department, amount) {
  return {
    type: 'CHANGE_DEPARTMENT_AMOUNT',
    department,
    amount,
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

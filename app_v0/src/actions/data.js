import {
  CHANGE_DEPARTMENT_AMOUNT,
  UPDATE_SERVICE_SPENDING_AMOUNT,
  RESET_DEPARTMENT_AMOUNT,
} from 'constants/ActionTypes';

export function changeDepartmentAmount(department, amount) {
  return {
    type: CHANGE_DEPARTMENT_AMOUNT,
    department,
    amount,
  };
}

export function updateServiceSpendingAmount() {
  return {
    type: UPDATE_SERVICE_SPENDING_AMOUNT,
  };
}

export function resetDepartmentAmount(department) {
  return {
    type: RESET_DEPARTMENT_AMOUNT,
    department,
  };
}

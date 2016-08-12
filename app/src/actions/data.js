import {
  CHANGE_DEPARTMENT_AMOUNT,
  UPDATE_SERVICE_SPENDING_AMOUNT
} from 'constants/ActionTypes';

export function changeDepartmentAmount(department, amount) {
  return {
    type: CHANGE_DEPARTMENT_AMOUNT,
    department,
    amount,
  };
}

export function updateServiceSpendingAmount(amount) {
  return {
    type: UPDATE_SERVICE_SPENDING_AMOUNT,
    amount,
  };
}

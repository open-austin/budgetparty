import {
  CHANGE_DEPARTMENT_AMOUNT,
} from 'constants/ActionTypes';

export function changeDepartmentAmount(department, amount) {
  return {
    type: CHANGE_DEPARTMENT_AMOUNT,
    department,
    amount,
  };
}

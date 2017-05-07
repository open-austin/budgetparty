export function updateServiceStatus(serviceIndex, status) {
  return {
    type: 'UPDATE_SERVICE_STATUS',
    serviceIndex,
    status,
  };
}

export function recalculateServiceAmount(serviceIndex, departments) {
  return {
    type: 'RECALCULATE_SERVICE_AMOUNT',
    serviceIndex,
    departments,
  };
}

export function updateCompletedDepartments(serviceIndex, departments) {
  return {
    type: 'UPDATE_COMPLETED_DEPARTMENTS',
    serviceIndex,
    departments
  }
}

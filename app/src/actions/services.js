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

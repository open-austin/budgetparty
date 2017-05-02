export function updateServiceStatus(serviceIndex, status) {
  return {
    type: 'UPDATE_SERVICE_STATUS',
    serviceIndex,
    status,
  };
}

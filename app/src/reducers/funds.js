import InitialState from '../config/InitialState';

function funds(state = InitialState.funds, action = {}) {
  switch (action.type) {
    case 'CHANGE_REMAINING_FUNDS_AMOUNT':
      const newFunds = state
      const sumOfServiceSpending = action.services.reduce((memo, service) => {
        if (!Number(service.amount)) return memo
        return memo + Number(service.amount)
      }, 0)

      newFunds.sumOfServiceSpending = sumOfServiceSpending
      newFunds.servicesSumPercentChange =
        ((sumOfServiceSpending - state.lastYearServicesSum)
        / state.lastYearServicesSum) * 100
      newFunds.generalFundsRemaining = state.generalFund - sumOfServiceSpending

      return newFunds
    default:
      return state;

  }
}

export default funds;

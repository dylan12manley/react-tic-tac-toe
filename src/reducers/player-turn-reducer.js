export default (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_TURNS":
      console.log("state is: ", state);
      console.log("action is: ", action);
      let squares = [null, null, null, null, null, null, null, null, null];
      const { history, stepNumber, xIsNext, selectedSquareId } = action;
      let newStepNumber = stepNumber + 1;
      console.log("newStepNumber is: ", newStepNumber);
      let newState = Object.assign({}, state, {
        [selectedSquareId]: {
          // This is where we stopped wednesday
          history: history.concat([
            {
              squares: squares
            }
          ]),
          stepNumber: newStepNumber,
          xIsNext: newStepNumber % 2 === 0,
          selectedSquareId: selectedSquareId
        }
      });
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

// history: [
//   {
//     squares: [null, null, null, null, null, null, null, null, null]
//   }
// ],
// stepNumber: 0,
// xIsNext: true,
// selectedSquareId: 0

import playerTurnReducer from "./../../reducers/player-turn-reducer";

describe("playerTurnReducer", () => {
  let action;
  const sampleTurnData = {
    history: [
      {
        squares: [null, null, null, null, null, null, null, null, null]
      }
    ],
    stepNumber: 0,
    xIsNext: true,
    selectedSquareId: 0
  };

  const newTurnData = {
    history: [
      {
        squares: [null, null, "X", null, null, null, null, null, null]
      }
    ],
    stepNumber: 1,
    xIsNext: false,
    selectedSquareId: 3
  };

  test("Should switch turns", () => {
    const { history, stepNumber, xIsNext, selectedSquareId } = sampleTurnData;
    action = {
      type: "CHANGE_TURNS",
      history: history,
      stepNumber: stepNumber,
      xIsNext: stepNumber,
      selectedSquareId: selectedSquareId
    };
    expect(playerTurnReducer(sampleTurnData, action)).toEqual({});
  });

  test("Should return default state if no action type is recognized", () => {
    expect(playerTurnReducer({}, { type: null })).toEqual({});
  });
});

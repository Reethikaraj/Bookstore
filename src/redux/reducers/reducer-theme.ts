import { AllActions, ThemeState } from "../../Types";

const initialState: ThemeState = {
  theme: "light",
};

const themeReducer = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case "SWITCH_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export default themeReducer;

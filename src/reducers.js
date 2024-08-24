
import { ADD_WIDGET, REMOVE_WIDGET } from "./actions";
import dashboardConfig from "./data/dashboardConfig";

const initialState = dashboardConfig;

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widgetData],
              }
            : category
        ),
      };
    case REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  (widget) => widget.id !== action.payload.widgetId
                ),
              }
            : category
        ),
      };
    default:
      return state;
  }
}

export default rootReducer;
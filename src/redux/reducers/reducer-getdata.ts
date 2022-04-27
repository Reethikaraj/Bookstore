import { AllActions, InitialState } from "../../Types";

const initialState: InitialState = {
  books: [],
  keyword: "",
  filteredBooks: [],
  name: true,
  page: true,
};

export default function DataReducer(
  state = initialState,
  action: AllActions
): InitialState {
  switch (action.type) {
    case "GET_DATA": {
      return {
        ...state,
        books: action.payload,
      };
    }
    case "SEARCH_KEYWORD":
      const keyword = action.payload;
      let books = state.books.filter(
        (book) =>
          book.volumeInfo.title.toLowerCase().search(keyword.toLowerCase()) !==
          -1
      );
      return {
        ...state,
        filteredBooks: books,
        keyword: keyword,
      };

    case "SORT_BY_NAME":
      return {
        ...state,
        books: action.payload
          ? [...state.books].sort((a, b) =>
              a.volumeInfo.title > b.volumeInfo.title ? 1 : -1
            )
          : [...state.books]?.sort((a, b) =>
              a.volumeInfo.title < b.volumeInfo.title ? 1 : -1
            ),
        name: !state.name,
      };

    case "SORT_BY_PAGE":
      return {
        ...state,
        books: action.payload
          ? [...state.books].sort((a, b) =>
              a.volumeInfo.pageCount > b.volumeInfo.pageCount ? 1 : -1
            )
          : [...state.books]?.sort((a, b) =>
              a.volumeInfo.pageCount < b.volumeInfo.pageCount ? 1 : -1
            ),
        page: !state.name,
      };

    default:
      return state;
  }
}

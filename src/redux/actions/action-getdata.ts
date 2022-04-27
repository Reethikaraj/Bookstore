import { Dispatch } from "redux";
import {
  Book,
  GetData,
  SearchKeyword,
  SortByName,
  SortByPage,
} from "../../Types";

export function getData(books: Book[]): GetData {
  console.log(books);
  return {
    type: "GET_DATA",
    payload: books,
  };
}

export function fetchData() {
  return (dispatch: Dispatch) => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=children&key=AIzaSyBrH_L1Fuexk_glhh7VFAcLOQ2IWzt4C7k&maxResults=40&lang=en"
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(getData(data.items));
      });
    // .catch('Data not found');
  };
}

export function searchKeyword(keyword: string): SearchKeyword {
  return {
    type: "SEARCH_KEYWORD",
    payload: keyword,
  };
}

export function sortByName(name: boolean): SortByName {
  return {
    type: "SORT_BY_NAME",
    payload: name,
  };
}

export function sortByPage(page: boolean): SortByPage {
  return {
    type: "SORT_BY_PAGE",
    payload: page,
  };
}

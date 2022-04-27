export type InitialState = {
    books : Book[],
    filteredBooks: Book[],
    keyword: string,
    name: boolean,
    page: boolean,
}
export type CartState = {
    cart: Book[],
}
export type ThemeState = {
    theme: string
}
export type Book = {   
volumeInfo : {
    title : string,
    pageCount: number,
    subtitle: string,
    infoLink: string,
    description: string,
    imageLinks:{
        thumbnail:string
    }
  }
}

export type GetData = {
    type: "GET_DATA",
    payload: Book[],
}

export type SearchKeyword = {
    type: "SEARCH_KEYWORD",
    payload: string,
}

export type SortByName = {
    type: "SORT_BY_NAME",
    payload: boolean,
}

export type SortByPage = {
    type: "SORT_BY_PAGE",
    payload: boolean,
}

export type AddToCart = {
    type: "ADD_TO_CART",
    payload: {book:Book},
}

export type RemoveFromCart = {
    type: "REMOVE_FROM_CART",
    payload: {item:Book},
}

export type clearCart = {
    type: "CLEAR_CART"
}

export type SwitchTheme = {
    type: "SWITCH_THEME"
}

export type AllActions = GetData | SearchKeyword | SortByName | SortByPage | AddToCart | RemoveFromCart | clearCart | SwitchTheme



// import {
//   CATEGORIES_REQUEST,
//   CATEGORIES_FETCH,
//   CATEGORIES_ERROR,
//   CATEGORIES_GET_ID,
// } from '../actions/categoriesActions';
//
// const initialState = {
//   categories: [],
//   posts: [],
//   activeCategoryId: '',
//   activePostId: '',
// };
//
// export function mainPageReducer(state = initialState, action) {
//   switch (action.type) {
//
//     case CATEGORIES_REQUEST:
//       return {...state};
//
//     case CATEGORIES_FETCH:
//       return {...state, categories: action.payload.allCategories};
//
//     case CATEGORIES_ERROR:
//       return {...state};
//
//     case CATEGORIES_GET_ID:
//       return {...state, activeCategoryId: action.payload.id};
//
//     default:
//       return state;
//   }
// }
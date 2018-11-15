// import {
//   POST_GET_BY_ID_REQUEST,
//   POST_GET_BY_ID_FETCH,
//   POST_GET_BY_ID_ERROR,
//   POST_REQUEST,
//   POST_FETCH,
//   POST_ERROR,
//   POST_GET_ID,
// } from '../actions/postsActions';
//
// const initialState = {
//   currentPost: {},
// };
//
// export function postsReducer(state = initialState, action) {
//   switch (action.type) {
//     case POST_GET_BY_ID_REQUEST:
//       return { ...state };
//
//     case POST_GET_BY_ID_FETCH:
//       return { ...state, currentPost: action.payload.currentPost };
//
//     case POST_GET_BY_ID_ERROR:
//       return { ...state };
//
//     default:
//       return state;
//   }
// }
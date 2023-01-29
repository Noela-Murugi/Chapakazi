// export const addlogin = (login, navigate) => {
//   return async function (dispatch) {
//     dispatch({
//       type: "handyman/loading",
//     });
//     const response = await fetch("https://chapakazi-server-production.up.railway.app/handyman/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(login),
//     });

//     const data = await response.json();
//     console.log(data)

//     if (response.ok) {
//       dispatch({
//         type: "add/login",
//         payload: data.handyman,
//       });
//       localStorage.setItem("handyman", data.token);
//       localStorage.setItem("profileId", data.handyman.id)
//       navigate("/jobs");
//     } else {
//       dispatch({
//         type: "error/handyman",
//         payload: data,
//       });
//     }
//   };
// };

// const initialState = {
//   loading: false,
//   errors: ["hello"],
//   handyman: {},
// };
// export default function loginReducer(state = initialState, action) {
//   switch (action.type) {
//     case "add/login": {
//       return {
//         ...state,
//         handyman: action.payload,
//         errors:[]
//       };
//     }
//     case "handyman/loading": {
//       return {
//         ...state,
//         loading: true,
//       };
//     }

//     case "error/handyman": {
//       return {
//         ...state,
//         errors: action.payload.message,
//       };
//     }
//     default:
//       return state;
//   }
// }

export const fetchProfiles = (token) => {
  return async function (dispatch) {
    dispatch({
      type: "profiles/loading",
    });

    const response = await fetch("https://chapakazi-server-production.up.railway.app/handymen", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const profiles = await response.json();
    

    if (response.ok) {
      dispatch({
        type: "profiles",
        payload: profiles,
      });
    } else {
      dispatch({
        type: "profiles/error",
        payload: profiles.errors,
      });
    }
  };
};

const initialState = {
  errors: [],
  profiles: [],
  status: "idle",
};

export default function profilesReducer(state = initialState, action) {
  switch (action.type) {
    case "profiles/loading":
      return {
        ...state,
        status: "loading",
      };

    case "profiles":
      return {
        ...state,
        status: "idle",
        profiles: action.payload,
      };

    case "profiles/error":
      return {
        ...state,
        status: "idle",
        errors: action.payload,
      };

    default:
      return state;
  }
}

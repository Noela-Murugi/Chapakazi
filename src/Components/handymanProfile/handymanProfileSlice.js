export function fetchHandyman(profileId, token) {
  return async function (dispatch) {
    dispatch({ type: "handyman/loading" });
    const response = await fetch(
      `https://chapakazi-server-production.up.railway.app/handymen/${profileId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: "handyman/loaded",
        payload: data,
      });
    } else {
      dispatch({
        type: "handyman/error",
        payload: data.errors,
      });
    }
  };
}

export function updateImage(profileId, token, image, setTrigger) {
  return async function (dispatch) {
    dispatch({ type: "handyman/loading" });
    const response = await fetch(
      `https://chapakazi-server-production.up.railway.app/handymen/${profileId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(image),
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "handymanImage/update", payload: data });
      setTrigger(false);
    } else {
      dispatch({ type: "handyman/error", payload: data.errors });
    }
  };
}
export function updateUserName(profileId, token, username, setTriggerName) {
  return async function (dispatch) {
    dispatch({ type: "handyman/loading" });
    const response = await fetch(
      `https://chapakazi-server-production.up.railway.app/handymen/${profileId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(username),
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      dispatch({ type: "handymanUsername/update", payload: data });
      setTriggerName(false);
    } else {
      dispatch({ type: "handyman/error", payload: data.errors });
    }
  };
}
export function updateLocation(profileId, token, location, setTriggerLocation) {
  return async function (dispatch) {
    const response = await fetch(
      `https://chapakazi-server-production.up.railway.app/handymen/${profileId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(location),
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      dispatch({ type: "handymanLocation/update", payload: data });
      setTriggerLocation(false);
    } else {
      dispatch({ type: "handyman/error", payload: data.errors });
    }
  };
}
export function updateSpeciality(
  profileId,
  token,
  speciality,
  setTriggerSpeciality
) {
  return async function (dispatch) {
    const response = await fetch(
      `https://chapakazi-server-production.up.railway.app/handymen/${profileId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(speciality),
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "handymanSpeciality/update", payload: data });
      setTriggerSpeciality(false);
    } else {
      dispatch({ type: "handyman/error", payload: data.errors });
    }
  };
}

export function updateRating(profileId, token, rating, setTriggerRating) {
  return async function (dispatch) {
    const response = await fetch(
      `https://chapakazi-server-production.up.railway.app/handymen/${profileId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(rating),
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      dispatch({ type: "handymanRating/update", payload: data });
      setTriggerRating(false);
    } else {
      dispatch({ type: "handyman/error", payload: data.errors });
    }
  };
}

export function updateDescription(
  profileId,
  token,
  description,
  setTriggerDescription
) {
  return async function (dispatch) {
    const response = await fetch(
      `https://chapakazi-server-production.up.railway.app/handymen/${profileId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(description),
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "handymanDescription/update", payload: data });
      setTriggerDescription(false);
    } else {
      dispatch({ type: "handyman/error", payload: data.errors });
    }
  };
}

const initialState = {
  handyman: {},
  errors: [],
  status: "idle",
};

export default function handymanProfileReducer(state = initialState, action) {
  switch (action.type) {
    case "handyman/loading": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "handyman/loaded":
      return {
        ...state,
        handyman: action.payload,
        status: "idle",
      };

    case "handymanImage/update":
      return {
        ...state,
        handyman: { ...state.handyman, image: action.payload.image },
        status: "loading",
      };

    case "handymanUsername/update":
      return {
        ...state,
        handyman: { ...state.handyman, username: action.payload.username },
        status: "loading",
        errors: [],
      };

    case "handymanLocation/update":
      return {
        ...state,
        handyman: { ...state.handyman, location: action.payload.location },
      };

    case "handymanSpeciality/update":
      return {
        ...state,
        handyman: { ...state.handyman, speciality: action.payload.speciality },
      };

    case "handymanDescription/update":
      return {
        ...state,
        handyman: {
          ...state.handyman,
          description: action.payload.description,
        },
      };

    case "handymanRating/update":
      return {
        ...state,
        handyman: { ...state.handyman, rating: action.payload.rating },
        status: "idle",
      };

    case "handyman/error":
      return {
        ...state,
        errors: action.payload,
        status: "idle",
      };

    default:
      return state;
  }
}

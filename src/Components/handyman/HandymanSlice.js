export const addhandyman = (handyman, navigate) => {
  return async function (dispatch) {
    dispatch({
      type: "handyman/loading"
    })
    const response = await fetch("https://chapakazi-server-production.up.railway.app/handymen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        handyman
      )
    })

    const data = await response.json()

    if (response.ok) {
      dispatch({
        type: "add/handyman",
        payload: data
      })
      localStorage.setItem("handyman", data.jwt)
      navigate('/handyman/alert');
    } else {
      dispatch({
        type: "error/handyman",
        payload: data
      })
    }
  }
}

export const addlogin = (login, navigate) => {
  return async function (dispatch) {
    dispatch({
      type: "handyman/loading",
    });
    const response = await fetch("https://chapakazi-server-production.up.railway.app/handyman/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });

    const data = await response.json();
    console.log(data)

    if (response.ok) {
      dispatch({
        type: "add/login",
        payload: data.handyman,
      });
      localStorage.setItem("handyman", data.token);
      localStorage.setItem("profileId", data.handyman.id)
      navigate("/jobs");
    } else {
      dispatch({
        type: "error/handyman",
        payload: data,
      });
    }
  };
};




const initialState = {
  status: "idle",
  errors: [],
  handyman: {}
}
export default function handymanReducer(state = initialState, action) {

  switch (action.type) {
    case "add/handyman": {
      return {
        ...state,
        handyman: action.payload,
        errors: [],
        status: "idle"
      }
    }
    case "handyman/loading": {
      return {
        ...state,
        status: "loading",
      }
    }
    case "add/login": {
      return {
        ...state,
        handyman: action.payload,
        errors: [],
        status: "idle"
      };
    }

    case "error/handyman": {
      return {
        ...state,
        errors: action.payload.errors,
        status: "idle"
      }

    }
    default:
      return state;
  }

}
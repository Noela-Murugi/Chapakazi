export const addReview = (review, token, setTrigger, setReviewCount) => {
  return async function (dispatch) {
    dispatch({
      type: "review/loading",
    });
    const response = await fetch(
      "https://chapakazi-server-production.up.railway.app/reviews",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(review),
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: "review/add",
        payload: data,
      });
      setReviewCount((prev) => prev = prev + 1);

      setTrigger((prev) => !prev);
    } else {
      dispatch({
        type: "reviews/error",
        payload: data.errors,
      });
    }
  };
};

export const removeReview = (id, token) => {
  return async function (dispatch) {
    const response = await fetch(
      `https://chapakazi-server-production.up.railway.app/reviews/${id}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (response.ok) {
      dispatch({
        type: "reviews/remove",
        payload: id,
      });
    }
  };
};

export const downVoteReview = (id, token, votes) => {
  return async function (dispatch) {
    const response = await fetch(
      `https://chapakazi-server-production.up.railway.app/reviews/${id}/dislike`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    if (response.ok) {
      //   console.log(data);
      dispatch({
        type: "reviews/downvote",
        payload: data,
      });
    }
  };
};

export const upVoteReview = (id, token, votes) => {
  console.log(id);
  return async function (dispatch) {
    const response = await fetch(
      `https://chapakazi-server-production.up.railway.app/reviews/${id}/like`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    // console.log(data);
    if (response.ok) {
      console.log(data);
      dispatch({
        type: "reviews/upvote",
        payload: data,
      });
    }
  };
};

export const fetchReviews = (token) => {
  return async function (dispatch) {
    dispatch({
      type: "reviews/loading",
    });

    const response = await fetch(
      "https://chapakazi-server-production.up.railway.app/reviews",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: "reviews/loaded",
        payload: data,
      });
    } else {
      dispatch({
        type: "reviews/error",
        payload: data.errors,
      });
    }
  };
};

const initialState = {
  reviews: [],
  status: "idle",
  errors: [],
};

export default function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case "reviews/loading":
      return {
        ...state,
        status: "loading",
      };

    case "review/add":
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        status: "idle",
      };

    case "reviews/loaded":
      return {
        ...state,
        reviews: action.payload,
        status: "idle",
      };

    case "reviews/downvote":
      return {
        ...state,
        reviews: state.reviews.map((review) => {
          if (review.id === action.payload.id) {
            return {
              ...review,
              votes: review.votes ? action.payload.votes : 0,
            };
          } else {
            return review;
          }
        }),
      };

    case "reviews/upvote":
      return {
        ...state,
        reviews: state.reviews.map((review) => {
          if (review.id === action.payload.id) {
            return {
              ...review,
              votes: review.votes ? action.payload.votes : 1,
            };
          } else {
            return review;
          }
        }),
      };

    case "reviews/remove":
      return {
        ...state,
        reviews: state.reviews.filter((review) => review.id !== action.payload),
      };

    case "reviews/error":
      return {
        ...state,
        errors: action.payload,
        status: "idle",
      };

    default:
      return state;
  }
}

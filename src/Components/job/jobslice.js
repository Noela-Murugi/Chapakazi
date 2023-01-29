export const addJob = (job, token, navigate) => {
  return async function (dispatch) {
    dispatch({
      type: "job/loading",
    });
    const response = await fetch(
      "https://chapakazi-server-production.up.railway.app/jobs",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(job),
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: "jobs/add",
        payload: data,
      });

      navigate("/myjobs");
    } else {
      dispatch({
        type: "jobs/errors",
        payload: data.errors,
      });
    }
  };
};

export const removeJobs = (jobId, token) => {
  return async function (dispatch) {
    const response = await fetch(
      `https://chapakazi-server-production.up.railway.app/jobs/${jobId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      dispatch({
        type: "jobs/remove",
        payload: jobId,
      });
    }
  };
};

export const fetchJobs = (token) => {
  return async function (dispatch) {
    dispatch({
      type: "job/loading",
    });

    const response = await fetch(
      "https://chapakazi-server-production.up.railway.app/jobs",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const jobs = await response.json();

    if (response.ok) {
      dispatch({
        type: "jobs",
        payload: jobs,
      });
    } else {
      dispatch({
        type: "jobs/error",
        payload: jobs.errors,
      });
    }
  };
};

export const fetchJob = (jobId, token, navigate) => {
  return async function (dispatch) {
    dispatch({
      type: "job/loading",
    });

    const response = await fetch(
      `https://chapakazi-server-production.up.railway.app/jobs/${jobId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "job", payload: data });
      console.log(data);
      JSON.stringify(localStorage.setItem("job", JSON.stringify(data)));
      navigate(`/jobs/jobprofile/${jobId}`);
    } else {
      dispatch({ type: "jobs/error", payload: data.errors });
    }
  };
};

const initialState = {
  jobs: [],
  job: {},
  errors: [],
  status: "idle",
};

export default function jobReducer(state = initialState, action) {
  switch (action.type) {
    case "jobs":
      return {
        ...state,
        jobs: action.payload,
        status: "idle",
        error: [],
      };

    case "job":
      return {
        ...state,
        job: action.payload,
        jobs: [],
        status: "idle",
      };
    case "job/loading":
      return {
        ...state,
        status: "loading",
      };

    case "jobs/add":
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };

    case "jobs/remove":
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
      };

    case "jobs/errors":
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
}

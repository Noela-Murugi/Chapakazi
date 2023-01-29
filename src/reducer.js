import { combineReducers } from "redux";
import customerReducer from "./Components/customer/customerSlice";
import profilesReducer from "./Components/handyman/handymanProfiles/profilesSlice";
import handymanReducer from "./Components/handyman/HandymanSlice";
import handymanProfileReducer from "./Components/handymanProfile/handymanProfileSlice";
import jobReducer from "./Components/job/jobslice";
import reviewReducer from "./Components/review/ReviewSlice";

export default combineReducers({
  customers: customerReducer,
  handyman: handymanReducer,
  reviews: reviewReducer,
  jobs: jobReducer,
  profiles: profilesReducer,
  handymanProfile: handymanProfileReducer,
});

import React from "react";
import CustomerForm from "./Components/customer/CustomerForm";
import LandingPage from "./Components/landingPage/LandingPage";
import HandymanForm from "./Components/handyman/HandymanForm";
import CustomerLogin from "./Components/customer/CustomerLogin";
import { Route, Routes } from "react-router-dom";
import JobForm from "./Components/job/JobForm";
import HandymanContainer from "./Components/handyman/handymanProfiles/HandymanContainer";
import JobContainer from "./Components/job/JobContainer";
import Myjobs from "./Components/myJobs/MyJob";
import JobPage from "./Components/jobPage/JobPage";
import LoginForm from "./Components/login/LoginForm";
import HandymanPage from "./Components/handymanPage/HandymanPage";
import ResetPassword from "./Components/resetPassword/ResetPassword";
import HandymanProfile from "./Components/handymanProfile/HandymanProfile";
import RegistrationCard from "./Components/landingPage/registrationContainer/RegistrationCard";
import Alert from "./Components/Alert/Alert";
import Footer from "./Components/Footer/Footer";
import MyReview from "./Components/myReviews/MyReview";
import AppliedJob from "./Components/jobPage/AppliedJobs/AppliedJob";
import MessageContainer from "./Components/message/MessageContainer";
import MessageForm from "./Components/message/MessageForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/handymanSignup" element={<HandymanForm />} />
        <Route path="/customerSignup" element={<CustomerForm />} />
        <Route path="/jobform" element={<JobForm />} />
        <Route path="/jobs" element={<JobContainer />} />
        <Route path="/myjobs" element={<Myjobs />} />
        <Route path="myreviews" element={<MyReview />} />
        <Route path="/passwordReset/form" element={<ResetPassword />} />
        <Route path="/handymanLogin" element={<LoginForm />} />
        <Route path="/customerLogin" element={<CustomerLogin />} />
        <Route path="/handymanProfiles" element={<HandymanContainer />} />
        <Route path="/profilepage" element={<HandymanPage />} />
        <Route path="/jobs/:page" component={<JobContainer />} />
        <Route path="/jobs/jobprofile/:page" element={<JobPage />} />
        <Route path="/handymanProfile" element={<HandymanProfile />} />
        <Route path="/registration/form/page" element={<RegistrationCard />} />
        <Route path="/handyman/alert" element={<Alert />} />
        <Route path="/applied/jobs" element={<AppliedJob />} />
        <Route path="/messages" element={<MessageContainer/>} />
        <Route path="/messages/:id" element={<MessageForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

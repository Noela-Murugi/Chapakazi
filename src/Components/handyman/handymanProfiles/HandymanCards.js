import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfilePagination from "../../pagination/ProfilePagination";
import HandymanCard from "./HandymanCard";
import { fetchProfiles } from "./profilesSlice";

function HandymanCards({ handymanSearch }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("customer");
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(3);

  useEffect(() => {
    dispatch(fetchProfiles(token));
  }, [dispatch, token]);

  const profilesInfo = useSelector((state) => state.profiles.profiles);
  const profiles = profilesInfo.filter((profile) =>
    profile.description.includes(handymanSearch)
  );

  const indexOfLastPost = currentPage * profilesPerPage;
  const indexOfFirstPost = indexOfLastPost - profilesPerPage;
  const currentprofiles = profiles.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const profilesList = currentprofiles.map((profile) => (
    <HandymanCard key={profile.id} profile={profile} />
  ));
  return (
    <div className="main-container">
      {profilesList}
      <ProfilePagination
        paginate={paginate}
        totalprofiles={profiles.length}
        profilesPerPage={profilesPerPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default HandymanCards;

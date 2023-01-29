import React from "react";
import SearchForm from "../../search/SearchForm";

function HandymanTop({handleChange, handymanSearch}) {
  return (
    <div className="top-div">
      <h1 className="header1"> Who are you looking for ? </h1>
      <div className="page-top">
        <div>
          <h2 className="top-header"> PLUMBER </h2>
          <img
            className="top-image"
            src="https://images.unsplash.com/photo-1521207418485-99c705420785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGx1bWJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="plumber"
          />
        </div>
        <div>
          <h2 className="top-header"> ELECTRICIAN </h2>
          <img
            className="top-image"
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3RyaWNpYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="electrician"
          />
        </div>
        <div>
          <h2 className="top-header"> CARPENTER </h2>
          <img
            className="top-image"
            src="https://images.unsplash.com/photo-1611021061218-761c355ed331?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FycGVudGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="carpenter"
          />
        </div>
        <div>
          <h2 className="top-header"> GARDENER </h2>
          <img
            className="top-image"
            src="https://images.unsplash.com/photo-1593296402439-e1a270dd253d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhcmRlbmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="gardener"
          />
        </div>
      </div>
      <SearchForm handleChange={handleChange} handymanSearch={handymanSearch} />
    </div>
  );
}

export default HandymanTop;

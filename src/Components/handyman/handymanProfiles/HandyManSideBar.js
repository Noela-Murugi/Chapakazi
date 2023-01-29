import React from "react";

function HandyManSideBar(){
    return(
        <div>
            <div className="option-div">
                <h3>Category</h3>
                <select className="filter" name="category" >
                    <option value="All">Filter by category</option>
                    <option value="Carpenter">CARPENTER</option>
                    <option value="Plumber">PLUMBER</option>
                    <option value="Gardener">GARDENER</option>
                </select>
            </div>
            <div className="option-div">
                <h3>Location</h3>
                <select className="filter" name="location" >
                    <option value="All">Filter by location</option>
                    <option value="Carpenter">CARPENTER</option>
                    <option value="Plumber">PLUMBER</option>
                    <option value="Gardener">GARDENER</option>
                </select>
            </div>
            <div className="option-div">
                <h3>Ratings</h3>
                <select className="filter" name="ratings" >
                    <option value="All">Filter by ratings</option>
                    <option value="Carpenter">CARPENTER</option>
                    <option value="Plumber">PLUMBER</option>
                    <option value="Gardener">GARDENER</option>
                </select>
            </div>
        </div>
    )
}

export default HandyManSideBar
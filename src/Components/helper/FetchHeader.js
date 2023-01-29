import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomerHeader from "../CustomerHeader/CustomerHeader";
import Header from "../header/Header";
import LandingHeader from "../LandingTopHeader/LandingHeader";

export default function useDisplayHeader() {
  const profileId = JSON.parse(localStorage.getItem("profileId"));
  const token = localStorage.getItem("handyman");
  const [handyman, setHandyman] = useState({});
  useEffect(() => {
    const displayHandyman = async () => {
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
        setHandyman(data);
      } else {
        console.log(data.errors);
      }
    };
    displayHandyman();
  }, [profileId, token]);

  const handymanLength = Object.keys(handyman).length;
  const customer = useSelector((state) => state.customers.customer);
  const customerLength = Object.keys(customer).length;

  const displayHeader = () => {
    if (customerLength > 0) {
      return <CustomerHeader />;
    } else if (handymanLength > 0) {
      return <Header />;
    } else {
      return <LandingHeader />;
    }
  };
  return displayHeader();
}

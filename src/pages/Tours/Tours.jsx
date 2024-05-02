import React, { useState, useEffect } from "react";
import "./Tours.css";
import axios from "axios";
import { useAuth } from "../../hocs/AuthProvider";
import { axiosInstance } from "../../services/axios";
import { toast } from "react-toastify";

const Tours = () => {
  const { getToken, getUser } = useAuth();
  const [tours, setTours] = useState([]);
  const getTours = async () => {
    try {
      const res = await axios.get(
        "https://tourismapp-lice.onrender.com/tours/getAll",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: getToken(),
          },
        }
      );
      setTours(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCard = async (id) => {
    try {
      const res = await axiosInstance.post(
        "card/addToCard",
        {
          userId: getUser(),
          tourIds: [id],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: getToken(),
          },
        }
      );
      toast(res.data.message);
    } catch (error) {
      console.log("Error while booking", error);
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  return (
    <div className="tours">
      {tours &&
        tours?.map((tour) => (
          <div key={tour._id} className="card">
            <div className="image">
              <img src={tour?.imageCover} alt="tour1" />
            </div>
            <div className="details">
              <div className="country">{tour?.locationName}</div>
              <div className="dates">{tour?.duration} days</div>
            </div>
            <div className="features">
              {tour?.description}
              {/* <li>Private beach</li>
            <li>5 meals a day</li>
            <li>Sightseeing</li> */}
            </div>
            <div className="booking">
              <div className="price">
                {tour?.price}
                {tour?.currency}
              </div>
              <div className="Book_button">
                <button onClick={() => handleAddToCard(tour._id)}>Book</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Tours;

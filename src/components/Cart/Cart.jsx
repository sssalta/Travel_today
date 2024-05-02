import React, { useState, useEffect } from "react";
import "./Cart.css";
import { axiosInstance } from "../../services/axios";
import { useAuth } from "../../hocs/AuthProvider";
import Card from "../Card/Card";
import { toast } from "react-toastify";

const Cart = ({ openRef }) => {
  const [data, setData] = useState(null);
  const { getToken, getUser } = useAuth();
  const getTours = async () => {
    try {
      const res = await axiosInstance.get(`card/getInfo/${getUser()}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
      });
      setData(res.data.data.tours);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCard = async (id) => {
    try {
      const res = await axiosInstance.patch(
        "card/deleteOneTour/",
        {
          userId: getUser(),
          tourId: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: getToken(),
          },
        }
      );
      toast(res?.data?.message);
      getTours();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTours();
  }, []);
  console.log(data);
  return (
    <div ref={openRef} className="cartBackground">
      <div className="cart">
        <h2>Cart</h2>
        {data &&
          data?.map((tour) => (
            <Card
              key={tour._id}
              tour={tour}
              handleDeleteCard={() => handleDeleteCard(tour?._id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Cart;

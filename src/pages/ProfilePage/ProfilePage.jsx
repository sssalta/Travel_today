import { useState, useEffect } from "react";
import { useAuth } from "../../hocs/AuthProvider";
import "./ProfilePage.css";
import axios from "axios";
import { axiosInstance } from "../../services/axios";

const ProfilePage = () => {
  const { getToken, getUser: getUserID } = useAuth();
  const [user, setUser] = useState([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getUser = async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get(`user/getInfo/${getUserID()}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
      });
      setUser(res.data);
      setIsLoading(false);
    } catch (e) {
      setErr(e?.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      {isLoading ? (
        "Loading..."
      ) : err ? (
        err
      ) : (
        <div className="user-details">
          <p>
            <strong>Name:</strong> {user?.username}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          <p>
            <strong>Country:</strong> Kazahstan
          </p>
          <p>
            <strong>tours:</strong> пусто
          </p>
        </div>
      )}

      <button>Edit Profile</button>
    </div>
  );
};

export default ProfilePage;

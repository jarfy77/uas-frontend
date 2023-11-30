import React from "react";
import { useSelector } from "react-redux";


const Welcome = () => {
  const { user } = useSelector((state) => state.auth);

  const imageStyle = {
    height: "100vh",
    backgroundImage:
    'url(https://images.pexels.com/photos/12600616/pexels-photo-12600616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
 };
  
  return (
    <div style={imageStyle}>
      <h1 className="title has-text-white is-size-2">Dashboard</h1>
      <h2 className="subtitle has-text-white is-size-3">
        Welcome Back <strong style={{color:"yellow"}}>{user && user.name}</strong>
      </h2>
    </div>
  );
};

export default Welcome;

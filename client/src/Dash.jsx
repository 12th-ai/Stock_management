import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cookies from "js-cookies";

const Dash = (Component) => {
  const WrappedComponent = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const jwtCookie = cookies.getItem("token");
      const jwtLocalStorage = localStorage.getItem("token");

      if (!jwtCookie && !jwtLocalStorage) {
        navigate('/login');
      }
    }, [navigate]);

    return <Component {...props} />;
  };

  return WrappedComponent;
};

export default Dash;

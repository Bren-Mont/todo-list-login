import { useEffect } from "react";
import { store } from "../redux/store";
import { useNavigate } from "react-router-dom";

export const useValidateAuthUser = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const { token } = store.getState();
    if (!token) {
      navigate("/login");
    }
  }, []);
  return;
};

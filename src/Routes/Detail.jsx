import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DetailCard from "../Components/DetailCard";
import LoginContext from "../context/loginContext";
import BaseTemplate from "../templates/BaseTemplate/BaseTemplate";

const Detail = () => {
  const navigate = useNavigate();
  const {token} = useContext(LoginContext);

  useEffect(() => {
    if (!token) navigate("/login")
  }, [])
  return (
    <BaseTemplate>
      <DetailCard />
    </BaseTemplate>
  )
}

export default Detail
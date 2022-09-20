import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createDeleteUserInfoAction } from "../../redux/actions/login_action";

function Admin(props) {
  let navigate = useNavigate();
  const { user, token, islogin } = props.userInfo;

  useEffect(() => {
    if (!islogin) {
      navigate("/login");
    }
  },[]);
  console.log(props);
const logout = () => { 
    props.deleteUserInfo()
    navigate("/login");

 }
  return <div>
    admin------{props.userInfo.user.username}
    <button onClick={logout}>dianwo</button>
  </div>;
}

export default connect((state) => ({ userInfo: state.userInfo }),
{
    deleteUserInfo:createDeleteUserInfoAction
}
)(Admin);

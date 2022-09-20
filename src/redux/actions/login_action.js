import { SAVEUSERINFO, DELETEUSERINFO } from "../action_types";
export const createSaveUserInfoAction = (value) => {
  localStorage.setItem("user", JSON.stringify(value.user));
  localStorage.setItem("token", value.token);
  localStorage.setItem("islogin", true);
  return { type: SAVEUSERINFO, data: value };
};

export const createDeleteUserInfoAction = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem('islogin')
  return { type: DELETEUSERINFO };
};

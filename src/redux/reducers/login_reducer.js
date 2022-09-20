import { SAVEUSERINFO, DELETEUSERINFO } from "../action_types";
let user = JSON.parse(localStorage.getItem("user"));
let token = localStorage.getItem("token");

let initState = {
  user: user || "",
  token: token || "",
  islogin: user && token ? true : false,
};
export default function test(preState = initState, action) {
  const { type, data } = action;
  let newState;
  switch (type) {
    case SAVEUSERINFO:
      newState = { user: data.user, token: data.token, islogin: true };
      return newState;
    case DELETEUSERINFO:
      newState = { user: "", token: "", islogin: false };
      return newState;
    default:
      return preState;
  }
}

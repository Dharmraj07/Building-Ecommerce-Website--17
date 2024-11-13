import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../redux/auth-context";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const newEnteredPassword = newPasswordInputRef.current.value;

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBVt-RO94ccrvk80rhHacPWIS4OolR2qJc`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newEnteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(res=>{
      
    })
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="6"
          ref={newPasswordInputRef}
          required
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;

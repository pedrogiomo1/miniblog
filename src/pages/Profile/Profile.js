import styles from "./Profile.module.css";
import profile from "../../assets/profile.png";

import { NavLink } from "react-router-dom";
import { useAuthValue } from "../../contexts/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";

const Profile = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <div className={styles.profile}>
      <h1>Perfil</h1>
      <p>Aqui você pode consultar seus dados!</p>
      <img src={profile}></img>
      {user ? (
        <>
          <div className={styles.user}>
            <div className={styles.user_item}>
              <b>Nome:</b>
              {user.displayName}
            </div>
            <div className={styles.user_item}>
              <b>Email:</b>
              {user.email}
            </div>
          </div>
          <button className="btn btn-dark btn-danger" onClick={logout}>
            Sair
          </button>
        </>
      ) : (
        <NavLink to="/login" className="btn btn-dark">
          Entrar
        </NavLink>
      )}
    </div>
  );
};

export default Profile;

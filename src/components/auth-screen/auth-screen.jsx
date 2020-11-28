import React, {useRef} from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import Header from "../header/header";
import withAlertDialog from "../../hocs/with-alert-dialog/with-alert-dialog";
import {AppRoute} from "../../const";
import {getAuthorizationStatus, getCity} from "../../store/selectors";


const AuthScreen = ({isAuthorizedStatus, city, onSubmit}) => {

  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {

    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  if (isAuthorizedStatus) {
    return <Redirect to={AppRoute.MAIN} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

AuthScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isAuthorizedStatus: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorizedStatus: getAuthorizationStatus(state),
  city: getCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

export {AuthScreen};
export default connect(mapStateToProps, mapDispatchToProps)(withAlertDialog(AuthScreen));

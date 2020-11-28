import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Alert from "../../components/alert/alert";
import {closeAlertMessage} from "../../store/action";

const withAlertDialog = (WrappedComponent) => {
  const WithAlertDialog = (props) => {
    const {alertMessage, closeAlertAction} = props;

    useEffect(() => {
      return () => {
        if (alertMessage) {
          closeAlertAction();
        }
      };
    }, []);


    return (
      <React.Fragment>
        {
          alertMessage && <Alert message={alertMessage} onClose={closeAlertAction} />
        }
        <WrappedComponent {...props}/>
      </React.Fragment>
    );

  };

  WithAlertDialog.propTypes = {
    alertMessage: PropTypes.string,
    closeAlertAction: PropTypes.func.isRequired,
  };

  return WithAlertDialog;
};

const mapStateToProps = ({data}) => ({
  alertMessage: data.errorFetchMessadge
});

const mapDispatchToProps = (dispatch) => ({
  closeAlertAction() {
    dispatch(closeAlertMessage());
  },
});


export {withAlertDialog};
export default (WrappedComponent) => connect(mapStateToProps, mapDispatchToProps)(withAlertDialog(WrappedComponent));

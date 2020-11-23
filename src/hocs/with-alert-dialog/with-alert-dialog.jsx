import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Alert from "../../components/alert/alert";
import {closeAlertMessage} from "../../store/action";

const withAlertDialog = (Component) => {
  class WithAlertDialog extends PureComponent {

    componentWillUnmount() {
      const {alertMessage, closeAlertAction} = this.props;

      if (alertMessage) {
        closeAlertAction();
      }
    }

    render() {
      const {alertMessage, closeAlertAction} = this.props;
      return (
        <React.Fragment>
          {
            alertMessage && <Alert message={alertMessage} onClose={closeAlertAction} />
          }
          <Component {...this.props}/>
        </React.Fragment>
      );
    }
  }

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
export default (Component) => connect(mapStateToProps, mapDispatchToProps)(withAlertDialog(Component));

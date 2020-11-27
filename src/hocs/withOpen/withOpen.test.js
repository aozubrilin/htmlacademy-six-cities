
import React, {Fragment} from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withOpen from "./withOpen";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withOpen(MockComponent);

it(`withOpen renders correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped >
      <Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});


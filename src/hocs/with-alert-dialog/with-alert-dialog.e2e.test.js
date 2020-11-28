import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withAlertDialog} from "./with-alert-dialog";
import {Alert} from "../../components/alert/alert";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withAlertDialog(MockComponent);

it(`withAlertDialog simulate`, () => {
  const oncloseAlertAction = jest.fn();

  const wrapper = shallow(
      <MockComponentWrapped
        alertMessage={`Message`}
        closeAlertAction={oncloseAlertAction}
      />
  );

  wrapper.find(Alert).props().onClose();
  expect(oncloseAlertAction).toHaveBeenCalledTimes(1);
});


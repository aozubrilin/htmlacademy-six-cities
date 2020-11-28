import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import withAlertDialogConnected, {withAlertDialog} from "./with-alert-dialog";


const MockComponent = () => <div>Mock component</div>;
const MockComponentWrapped = withAlertDialog(MockComponent);
const MockComponentWrappedConnected = withAlertDialogConnected(MockComponent);
const testStore = configureStore();

const noop = () => {};
describe(`withAlertDialog snapshot`, () => {

  describe(`withAlertDialog not connected to store`, () => {

    it(`Not should WithAlertDialog add Alert`, () => {
      const tree = renderer.create((
        <MockComponentWrapped
          closeAlertAction={noop}/>
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`Should WithAlertDialog add Alert`, () => {
      const tree = renderer.create((
        <MockComponentWrapped
          alertMessage={`Message`}
          closeAlertAction={noop}
        />
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`withAlertDialog connected to store`, () => {

    it(`Not should withAlertDialog add Alert`, () => {
      const store = testStore({
        data: {
          errorFetchMessadge: null,
        }
      });

      const tree = renderer.create(
          <Provider store={store}>
            <MockComponentWrappedConnected/>
          </Provider>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`Should withAlertDialog add Alert`, () => {

      const store = testStore({
        data: {
          errorFetchMessadge: `Text`,
        }
      });

      const tree = renderer.create(
          <Provider store={store}>
            <MockComponentWrappedConnected/>
          </Provider>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});


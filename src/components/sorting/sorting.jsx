import React, {useState} from "react";
import PropTypes from "prop-types";
import {SortType} from "../../const";
import {setSortedType} from "../../store/action";
import {connect} from "react-redux";
import {getCurrentSortType} from "../../store/selectors";


const Sorting = ({onChangeSortedType, currentSortType}) => {
  const [isOpened, setIsOpened] = useState(false);

  const onCloseMenu = () => {
    setIsOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get"
      onClick={() => {
        setIsOpened(!isOpened);
      }}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0">
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened && `places__options--opened`}`}>
        {
          Object.values(SortType).map((type, i) => (
            <li key={`${type}-${i}`}
              className={`places__option ${currentSortType === type && `places__option--active`}`}
              onClick={() => {
                onChangeSortedType(type);
                onCloseMenu();
              }}
              tabIndex={i}>
              {type}
            </li>))
        }
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  currentSortType: PropTypes.string.isRequired,
  onChangeSortedType: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSortType: getCurrentSortType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSortedType(sortedType) {
    dispatch(setSortedType(sortedType));
  },
});

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from '../header.module.scss';
import AbstractFilter from '../../../../filter';
import Search from '../../../../search';
import Refresh from '../../../../refresh';
import arrowLeft from '../icons/arrow_to_left.svg';
import arrowRight from '../icons/arrow_to_right.svg';
import { ENDPOINT__EVENTS } from '../../../../../services_new/eventsServices';

const CustomHeaderEvent = (props) => {
  const {
    filters,
    headerSearchEnabled,
    onSearchChanged,
    headerFiltersEnabled,
    filtersSubmitHandler,
    filtersResetHandler,
    filtersCancelHandler,
    isFiltersDirty,
    tmpFilters,
    onFilterChanged,
    // eslint-disable-next-line react/prop-types
    modalFilters: ModalFilters,
    headerRefreshEnabled,
    type,

    dispatchReloadList,
    dispatchFiltersChanged,
  } = props;

  const checkActive = () => {
    if (filters.dateTo - filters.dateFrom === 86399) {
      return 'day';
    }
    if (filters.dateTo - filters.dateFrom === 604799) {
      return 'week';
    }
    if (filters.dateTo - filters.dateFrom >= 2419199
      && filters.dateTo - filters.dateFrom <= 2678399) {
      return 'month';
    }
    return 'year';
  };
  const [activeButton, setActiveButton] = useState(checkActive);
  const buttonsArr = {
    day: {
      title: 'День',
      key: 'day',
      format: 'D MMMM YYYY',
      manipulateValue: 'd',
      onClick: () => dispatchFiltersChanged({
        dateFrom: moment.utc().startOf(buttonsArr.day.key).unix(),
        dateTo: moment.utc().endOf(buttonsArr.day.key).unix(),
      }),
    },
    week: {
      title: 'Неделя',
      key: 'week',
      format: 'D MMMM YYYY',
      manipulateValue: 'w',
      onClick: () => dispatchFiltersChanged({
        dateFrom: moment.utc().startOf(buttonsArr.week.key).unix(),
        dateTo: moment.utc().endOf(buttonsArr.week.key).unix(),
      }),
    },
    month: {
      title: 'Месяц',
      key: 'month',
      format: 'MMMM YYYY',
      manipulateValue: 'M',
      onClick: () => dispatchFiltersChanged({
        dateFrom: moment.utc().startOf(buttonsArr.month.key).unix(),
        dateTo: moment.utc().endOf(buttonsArr.month.key).unix(),
      }),
    },
    year: {
      title: 'Год',
      key: 'year',
      format: 'YYYY',
      manipulateValue: 'y',
      onClick: () => dispatchFiltersChanged({
        dateFrom: moment.utc().startOf(buttonsArr.year.key).unix(),
        dateTo: moment.utc().endOf(buttonsArr.year.key).unix(),
      }),
    },
  };
  const textCurInterval = () => {
    if (filters) {
      let text = '';
      if (activeButton === 'week') {
        text = `${moment.unix(filters.dateFrom).format(buttonsArr[activeButton].format)} - ${moment.unix(filters.dateTo).format(buttonsArr[activeButton].format)}`;
      } else {
        text = moment.unix(filters.dateFrom).format(buttonsArr[activeButton].format);
      }
      return text;
    }
    return false;
  };
  /* eslint-disable max-len */
  const setPeriodByIntervalBack = () => dispatchFiltersChanged({
    dateFrom: moment(moment.unix(filters.dateFrom).subtract(1, buttonsArr[activeButton].manipulateValue)).unix(),
    dateTo: moment(moment.unix(filters.dateTo).subtract(1, buttonsArr[activeButton].manipulateValue)).unix(),
  });
  const setPeriodByIntervalForward = () => dispatchFiltersChanged({
    dateFrom: moment(moment.unix(filters.dateFrom).add(1, buttonsArr[activeButton].manipulateValue)).unix(),
    dateTo: moment(moment.unix(filters.dateTo).add(1, buttonsArr[activeButton].manipulateValue)).unix(),
  });

  return (
    <div className={styles.container}>
      {/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <div className={styles.header__column}>
        {type === ENDPOINT__EVENTS
          ? (
            <div className={styles.header__row}>
              <p
                onClick={() => { setActiveButton('day'); buttonsArr.day.onClick(); }}
                className={activeButton === 'day' ? styles.header__active : styles.header__inactive}
              >
                {buttonsArr.day.title}
              </p>
              <p
                onClick={() => { setActiveButton('week'); buttonsArr.week.onClick(); }}
                className={activeButton === 'week' ? styles.header__active : styles.header__inactive}
              >
                {buttonsArr.week.title}
              </p>
              <p
                onClick={() => { setActiveButton('month'); buttonsArr.month.onClick(); }}
                className={activeButton === 'month' ? styles.header__active : styles.header__inactive}
              >
                {buttonsArr.month.title}
              </p>
            </div>
          )
          : (
            <div className={styles.header__row}>
              <p
                onClick={() => { setActiveButton('month'); buttonsArr.month.onClick(); }}
                className={activeButton === 'month' ? styles.header__active : styles.header__inactive}
              >
                {buttonsArr.month.title}
              </p>
              <p
                onClick={() => { setActiveButton('year'); buttonsArr.year.onClick(); }}
                className={activeButton === 'year' ? styles.header__active : styles.header__inactive}
              >
                {buttonsArr.year.title}
              </p>
            </div>
          )}
        <div className={styles.header__row}>
          <p className={styles.header__text}>{textCurInterval()}</p>
        </div>
      </div>
      <div className={styles.header__column}>
        <div className={styles.header__row}>
          <div className={styles.content}>
            {headerSearchEnabled && <Search onSearchChanged={onSearchChanged} />}
            {headerFiltersEnabled && (
            <AbstractFilter
              onSubmit={filtersSubmitHandler}
              onReset={filtersResetHandler}
              onCancel={filtersCancelHandler}
              active={isFiltersDirty}
            >
              <ModalFilters
                filters={tmpFilters}
                onFilterChanged={onFilterChanged}
              />
            </AbstractFilter>
            )}
            {headerRefreshEnabled && <Refresh onRefresh={dispatchReloadList} /> }
          </div>
        </div>
        <div className={styles.header__row}>
          <div className={styles.header__arrow_container}>
            <img src={arrowLeft} alt="left" className={styles.header__arrow_icon} onClick={setPeriodByIntervalBack} />
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <span
              className={styles.header__today}
              onClick={buttonsArr[activeButton].onClick}
            >
              Сегодня
            </span>
            <img src={arrowRight} alt="right" className={styles.header__arrow_icon} onClick={setPeriodByIntervalForward} />
          </div>
        </div>
      </div>
    </div>
  );
};
CustomHeaderEvent.defaultProps = {
  filters: {},
  headerSearchEnabled: false,
  onSearchChanged: () => { /**/ },
  headerFiltersEnabled: false,
  filtersSubmitHandler: () => { /**/ },
  filtersResetHandler: () => { /**/ },
  filtersCancelHandler: () => { /**/ },
  isFiltersDirty: false,
  tmpFilters: {},
  headerRefreshEnabled: false,
  onFilterChanged: () => { /**/ },
  type: ENDPOINT__EVENTS,
};
CustomHeaderEvent.propTypes = {
  filters: PropTypes.objectOf(PropTypes.any),
  headerSearchEnabled: PropTypes.bool,
  onSearchChanged: PropTypes.func,
  headerFiltersEnabled: PropTypes.bool,
  filtersSubmitHandler: PropTypes.func,
  filtersResetHandler: PropTypes.func,
  filtersCancelHandler: PropTypes.func,
  isFiltersDirty: PropTypes.bool,
  tmpFilters: PropTypes.objectOf(PropTypes.any),
  onFilterChanged: PropTypes.func,
  headerRefreshEnabled: PropTypes.bool,
  type: PropTypes.string,
  dispatchReloadList: PropTypes.func.isRequired,
  dispatchFiltersChanged: PropTypes.func.isRequired,
};
export default CustomHeaderEvent;

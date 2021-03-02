import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cx from 'classnames';
import styles from '../header.module.scss';
import AbstractFilter from '../../../../filter';
import Refresh from '../../../../refresh';
import Search from '../../../../search';
import arrowLeft from '../icons/arrow_to_left.svg';
import arrowRight from '../icons/arrow_to_right.svg';

const CustomHeaderNews = (props) => {
  const {
    setNewsType,
    types,
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

    dispatchReloadList,
    dispatchFiltersChanged,
  } = props;

  const textCurInterval = () => (filters.month ? `${moment(filters.month, 'M').format('MMMM')} ${moment(filters.year, 'YYYY').format('YYYY')}` : moment().format('MMMM YYYY'));
  const setPeriodByIntervalBack = () => {
    dispatchFiltersChanged({
      month: filters.month ? moment(filters.month, 'M').subtract(1, 'M').format('M') : moment().subtract(1, 'M').format('M'),
      year: filters.month ? moment(filters.month, 'M').set('Y', filters.year).subtract(1, 'M').format('YYYY') : moment().format('YYYY'),
    });
  };
  const setPeriodByIntervalForward = () => dispatchFiltersChanged({
    month: filters.month ? moment(filters.month, 'M').add(1, 'M').format('M') : (moment().add(1, 'M').format('M')),
    year: filters.month ? moment(filters.month, 'M').set('Y', filters.year).add(1, 'M').format('YYYY') : moment().format('YYYY'),
  });

  return (
    <div className={styles.container}>
      {/* eslint-disable jsx-a11y/click-events-have-key-events,
      jsx-a11y/no-noninteractive-element-interactions */}
      <div className={styles.header__column}>
        <div className={cx(styles.header__row, styles.row_wrap)}>
          {
            types.map((item) => (
              <p
                key={item.key}
                onClick={() => setNewsType(item.key)}
                className={item.isChecked ? styles.header__active : styles.header__inactive}
              >
                {item.label}
              </p>
            ))
          }
        </div>
        <div className={styles.header__row}>
          <p className={styles.header__text}>{textCurInterval()}</p>
        </div>
      </div>
      <div className={styles.header__column}>
        <div className={styles.header__row}>
          <div className={cx(styles.content, styles.row_nowrap)}>
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
                  returnFilters={{}}
                  setReturnFilters={() => { /**/ }}
                  onFilterChanged={onFilterChanged}
                />
              </AbstractFilter>
            )}
            {headerRefreshEnabled && <Refresh onRefresh={dispatchReloadList} />}
          </div>
        </div>
        <div className={styles.header__row}>
          <div className={styles.header__arrow_container}>
            <img
              src={arrowLeft}
              alt="left"
              className={styles.header__arrow_icon}
              onClick={setPeriodByIntervalBack}
            />
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <span
              className={styles.header__today}
              onClick={() => {
                dispatchFiltersChanged({
                  year: moment().format('YYYY'),
                  month: moment().format('M'),
                });
              }}
            >
              Сегодня
            </span>
            <img
              src={arrowRight}
              alt="right"
              className={styles.header__arrow_icon}
              onClick={setPeriodByIntervalForward}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
CustomHeaderNews.defaultProps = {
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
  setNewsType: () => { /**/ },
  types: [],
};
CustomHeaderNews.propTypes = {
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
  dispatchReloadList: PropTypes.func.isRequired,
  dispatchFiltersChanged: PropTypes.func.isRequired,
  setNewsType: PropTypes.func,
  types: PropTypes.arrayOf(PropTypes.any),
};
export default React.memo(CustomHeaderNews);

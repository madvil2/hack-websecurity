import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import Content from '../content';
import HeaderDefault from '../_parts/header';
import CustomHeaderEvent from '../_parts/header/customHeaders/customHeaderEvents';
import CustomHeaderNews from '../_parts/header/customHeaders/customHeaderNews';
import Body from '../_parts/body';
import Footer from '../_parts/footer';
import Table from '../../table/table';
import Button, { ButtonStylesEnum } from '../../button';
import Search from '../../search/search';
import Refresh from '../../refresh';
import AbstractFilter from '../../filter';
import { EVENT__TYPE__FLIGHT, EVENT__TYPE__MEETING } from '../../../models_new/events/eventsModel';
import { ENDPOINT__EVENTS } from '../../../services_new/eventsServices';

const List = (props) => {
  const {
    loading,
    data,
    filters,
    filtersHash,
    isFiltersDirty,
    types,
    inbound,
    loadingMore,
    dispatchReloadList,
    dispatchShowMore,
    dispatchFetchList,
    dispatchFiltersChanged,
    dispatchDeleteItem,
    dispatchResetFilters,
    dispatchTypeChanged,
    customHeaderNews,
    headerDefault,
    customHeaderEvents,
    headerTitle,
    headerSearchEnabled,
    headerFiltersEnabled,
    headerRefreshEnabled,
    // eslint-disable-next-line react/prop-types
    modalFilters: ModalFilters,
    goToItemHandler,
    hasAddItemPermission,
    tableColumns,
    addItemTitle,
    addSecondItemTitle,
    type,
    sortFieldsNames,
  } = props;

  const [tmpFilters, setTmpFilters] = useState(filters);
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => setTmpFilters(filters), [filters]);

  useEffect(() => {
    if (!loading) {
      dispatchFetchList();
    }
  }, [filtersHash]);

  const scrollHandler = useCallback(() => {
    if (loadingMore) {
      dispatchShowMore();
    }
  }, [loadingMore]);

  const onSearchChanged = (val) => {
    dispatchFiltersChanged({ search: val });
    setSearchInput(val);
  };

  useEffect(() => {
    setSearchInput(tmpFilters.search);
  }, [tmpFilters]);

  const filtersCancelHandler = () => setTmpFilters(filters);
  const onFilterChanged = (nextFilters) => setTmpFilters(nextFilters);
  const filtersSubmitHandler = () => dispatchFiltersChanged(tmpFilters);
  const filtersResetHandler = () => {
    dispatchResetFilters();
    setTmpFilters(filters);
  };
  const tableColumnsCallback = () => tableColumns({
    dispatchFiltersChanged,
    filters,
    sortFieldsNames,
    dispatchDeleteItem,
  });

  return (
    <Content>
      {headerDefault && (
        <HeaderDefault header={headerTitle}>
          {headerSearchEnabled && (
            <Search
              defaultInput={searchInput}
              onSearchChanged={onSearchChanged}
            />
          )}
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
          {headerRefreshEnabled && <Refresh onRefresh={dispatchReloadList} />}
        </HeaderDefault>
      )}
      {customHeaderEvents && (
        <CustomHeaderEvent
          filters={filters}
          headerSearchEnabled={headerSearchEnabled}
          onSearchChanged={onSearchChanged}
          headerFiltersEnabled={headerFiltersEnabled}
          filtersSubmitHandler={filtersSubmitHandler}
          filtersResetHandler={filtersResetHandler}
          filtersCancelHandler={filtersCancelHandler}
          isFiltersDirty={isFiltersDirty}
          tmpFilters={tmpFilters}
          onFilterChanged={onFilterChanged}
          modalFilters={ModalFilters}
          headerRefreshEnabled={headerRefreshEnabled}
          dispatchReloadList={dispatchReloadList}
          dispatchFiltersChanged={dispatchFiltersChanged}
          type={type}
        />
      )}
      {customHeaderNews && (
        <CustomHeaderNews
          filters={filters}
          headerSearchEnabled={headerSearchEnabled}
          onSearchChanged={onSearchChanged}
          headerFiltersEnabled={headerFiltersEnabled}
          filtersSubmitHandler={filtersSubmitHandler}
          filtersResetHandler={filtersResetHandler}
          filtersCancelHandler={filtersCancelHandler}
          isFiltersDirty={isFiltersDirty}
          tmpFilters={tmpFilters}
          onFilterChanged={onFilterChanged}
          modalFilters={ModalFilters}
          headerRefreshEnabled={headerRefreshEnabled}
          dispatchReloadList={dispatchReloadList}
          dispatchFiltersChanged={dispatchFiltersChanged}
          types={types}
          setNewsType={(val) => dispatchTypeChanged(val)}
        />
      )}
      <Body
        onScrollHandler={scrollHandler}
        loading={loading && data.length === 0}
        moreLoading={loading && data.length >= inbound.limit}
      >
        <Table
          isLoading={loading}
          columns={tableColumnsCallback}
          dataSource={data}
          onRowClickHandler={goToItemHandler}
        />
      </Body>
      {hasAddItemPermission && (
        <Footer>
          <Button
            buttonStyles={[ButtonStylesEnum.SUCCESS]}
            label={addItemTitle}
            callback={(e) => goToItemHandler(e, null, EVENT__TYPE__MEETING)}
          />
          {addSecondItemTitle && (
            <Button
              buttonStyles={[ButtonStylesEnum.SUCCESS]}
              label={addSecondItemTitle}
              callback={(e) => goToItemHandler(e, null, EVENT__TYPE__FLIGHT)}
            />
          )}
        </Footer>
      )}
    </Content>
  );
};

List.defaultProps = {
  headerTitle: 'Абстрактный список',
  headerDefault: true,
  customHeaderEvents: false,
  customHeaderNews: false,
  headerSearchEnabled: true,
  headerRefreshEnabled: true,
  headerFiltersEnabled: false,
  loading: true,
  loadingMore: false,
  filters: {},
  filtersHash: null,
  isFiltersDirty: false,
  types: [],
  inbound: { offset: 1, limit: 20 },
  tableColumns: () => { /**/ },
  data: [],
  goToItemHandler: () => { /**/ },
  hasAddItemPermission: true,
  addItemTitle: 'Добавить айтем',
  addSecondItemTitle: '',
  dispatchResetFilters: () => { /**/ },
  dispatchTypeChanged: () => { /**/ },
  dispatchFiltersChanged: () => { /**/ },
  type: ENDPOINT__EVENTS,
  sortFieldsNames: [],
};

List.propTypes = {
  headerDefault: PropTypes.bool,
  customHeaderEvents: PropTypes.bool,
  customHeaderNews: PropTypes.bool,
  headerTitle: PropTypes.arrayOf(PropTypes.any),
  headerSearchEnabled: PropTypes.bool,
  headerRefreshEnabled: PropTypes.bool,
  headerFiltersEnabled: PropTypes.bool,
  loading: PropTypes.bool,
  loadingMore: PropTypes.bool,
  filters: PropTypes.objectOf(PropTypes.any),
  filtersHash: PropTypes.string,
  isFiltersDirty: PropTypes.bool,
  types: PropTypes.arrayOf(PropTypes.any),
  inbound: PropTypes.objectOf(PropTypes.any),
  tableColumns: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.any),
  goToItemHandler: PropTypes.func,
  hasAddItemPermission: PropTypes.bool,
  addItemTitle: PropTypes.string,
  addSecondItemTitle: PropTypes.string,
  type: PropTypes.string,
  sortFieldsNames: PropTypes.arrayOf(PropTypes.any),

  dispatchReloadList: PropTypes.func.isRequired,
  dispatchDeleteItem: PropTypes.func.isRequired,
  dispatchShowMore: PropTypes.func.isRequired,
  dispatchFetchList: PropTypes.func.isRequired,
  dispatchFiltersChanged: PropTypes.func,
  dispatchResetFilters: PropTypes.func,
  dispatchTypeChanged: PropTypes.func,
};

export default React.memo(List);

import React from 'react';
import PropTypes from 'prop-types';
import { Table as AntTable, Empty } from 'antd';
import './custom.vendor.scss';
import styles from './tableStyles.module.scss';

const Table = ({
  columns, tableContent, onChange, scroll, rowSelection, rowKey, pagination,
}) => (
  <div className={styles.tableContainer}>
    <AntTable
      locale={{
        emptyText: (<Empty description="Нет данных" image={Empty.PRESENTED_IMAGE_SIMPLE} />),
      }}
      columns={columns}
      dataSource={tableContent}
      bordered
      rowKey={rowKey}
      pagination={pagination}
      onChange={onChange}
      scroll={scroll}
      rowSelection={rowSelection}
    />
  </div>
);

Table.propTypes = {
  loading: PropTypes.bool,
  scroll: PropTypes.objectOf(PropTypes.any),
  pagination: PropTypes.bool,
  columns: PropTypes.arrayOf(PropTypes.any).isRequired,
  tableContent: PropTypes.arrayOf(PropTypes.any).isRequired,
  onChange: PropTypes.func,
  rowKey: PropTypes.func,
  rowSelection: PropTypes.objectOf(PropTypes.any),
};

Table.defaultProps = {
  loading: false,
  onChange: () => {},
  rowKey: (item) => item.id,
  scroll: {},
  pagination: false,
  rowSelection: null,
};

export default Table;

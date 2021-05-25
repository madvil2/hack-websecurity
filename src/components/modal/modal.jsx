import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import style from './modal.module.scss';
import { Button } from '../button';

const DEFAULT_MODAL = {
  title: '',
  visible: false,
  disabled: false,
  setVisible: () => { /**/ },
  onOk: () => { /**/ },
  onCancel: () => { /**/ },
  cancelText: 'Сбросить',
  okText: 'Применить',
  footer: null,
  children: null,
  loading: false,
};

const FilterModal = ({
  title,
  visible,
  disabled,
  onOk,
  onCancel,
  onReset,
  children,
  setVisible,
  okText,
  loading,
}) => {
  const onCancelHandler = () => {
    onCancel();
    // setVisible(false);
  };

  return (
    <Modal
      title={(
        <p className={style.modal__title}>
          {title || DEFAULT_MODAL.title}
          {/* eslint-disable-next-line react/button-has-type */}
          {/*<button onClick={() => { onReset(); }} className={style.modal__titleReset}>*/}
          {/*  Сбросить*/}
          {/*</button>*/}
        </p>
    )}
      visible={visible}
      onOk={onOk || DEFAULT_MODAL.onOk}
      closable={false}
      style={{ top: 30 }}
      bodyStyle={{ padding: '21px 25px' }}
      onCancel={onCancelHandler}
      className={style.modal__container_search}
      footer={null}
      destroyOnClose
    >
      {children || DEFAULT_MODAL.children}
      <div className={style.modal__footer_container}>
        <Button
          isDisabled={disabled}
          loading={loading}
          onClick={onOk}
        >{okText}</Button>
      </div>
    </Modal>
  );
};
FilterModal.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
  disabled: PropTypes.bool,
  setVisible: PropTypes.func,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  onReset: PropTypes.func,
  children: PropTypes.element,
  okText: PropTypes.string,
  loading: PropTypes.bool,
};
FilterModal.defaultProps = {
  title: DEFAULT_MODAL.title,
  visible: DEFAULT_MODAL.visible,
  disabled: DEFAULT_MODAL.visible,
  setVisible: DEFAULT_MODAL.setVisible(),
  onOk: DEFAULT_MODAL.onOk(),
  okText: DEFAULT_MODAL.okText,
  onCancel: DEFAULT_MODAL.onCancel(),
  onReset: () => { /**/ },
  children: DEFAULT_MODAL.children,
  loading: DEFAULT_MODAL.loading,
};
export default React.memo(FilterModal);

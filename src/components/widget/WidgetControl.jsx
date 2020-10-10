import React from 'react';
import cx from 'classnames';
import { Switch } from 'antd';
import 'antd/dist/antd.css';
import styles from './Widget.module.scss';
import styled from 'styled-components';

export const WidgetControl = ({
  title = false,
  description = false,
  onChange,
  id,
  checked,
}) => {
  return (
    <WidgetControlContainer>
      <div className="left-side">
        {title && <div className="control-title">{title}</div>}
        {description && (
          <div className="control-description">{description}</div>
        )}
      </div>
      <div className="control">
        <Switch
          className={cx(styles.SwitchStyle, {
            [styles.SwitchStyleChecked]: checked,
          })}
          onChange={() => onChange(id)}
          checked={checked}
        />
      </div>
    </WidgetControlContainer>
  );
};

const WidgetControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  .left-side {
    display: flex;
    flex-direction: column;
    gap: 3px;

    .control-title {
      font-size: 16px;
      line-height: 19px;
      font-weight: bold;
    }

    .control-description {
      color: #6b7683;
      font-size: 16px;
      line-height: 19px;
    }
  }

  .control {
    padding: 5px 0;
  }
`;

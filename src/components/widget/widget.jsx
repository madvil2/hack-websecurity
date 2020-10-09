import React from 'react';
import styled from 'styled-components';
import colors from '../../colors.ts';
import { WidgetStatus } from './WidgetStatus';

const Widget = ({ type }) => {
  return (
    <WidgetComponent>
      <WidgetContent>
        <WidgetHeader type={type}>
          <h2>Мониторинг безопасности</h2>
          <StatusHeader>
            <div className="text">Статус проверки:</div>
            <WidgetStatus type={type} />
          </StatusHeader>
        </WidgetHeader>
        <WidgetBody>
          <StatusDescription>
            <div className="text">
              {type === 'dangerous'
                ? 'Вас взломали'
                : type === 'warning'
                ? 'Подозрительная активность'
                : 'Все хорошо'}
            </div>
          </StatusDescription>
        </WidgetBody>
      </WidgetContent>
      <WidgetButton type={type}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="104"
          height="104"
          viewBox="0 0 104 104"
        >
          <g fill="none" fill-rule="evenodd">
            <g>
              <g transform="translate(-2935 -1784) translate(2935 1784)">
                <circle
                  cx="52"
                  cy="52"
                  r="52"
                  fill={
                    type === 'dangerous'
                      ? colors.ERROR
                      : type === 'warning'
                      ? colors.WARNING
                      : colors.SUCCESS
                  }
                />
                <g
                  fill="#FFF"
                  stroke="#FFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                >
                  <path
                    d="M16.87 17.345c2.7-2.34 4.121-6.115 3.057-10.143-.87-3.3-3.572-5.996-6.876-6.855C6.45-1.37.518 3.565.518 9.886c0 2.983 1.325 5.652 3.416 7.463.579.5.873 1.25.66 1.99L1.198 31.226c-.34 1.187.557 2.374 1.796 2.374h14.814c1.24 0 2.14-1.169 1.8-2.363l-3.402-11.91c-.212-.735.086-1.482.665-1.982h0z"
                    transform="translate(41.5 35)"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </WidgetButton>
    </WidgetComponent>
  );
};

const WidgetComponent = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  right: 20px;
  bottom: 20px;
  width: 380px;
`;

const WidgetContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 90px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
`;

const WidgetHeader = styled.div`
  text-align: left;
  background-color: ${({ type }) =>
    type === 'dangerous'
      ? colors.ERROR
      : type === 'warning'
      ? colors.WARNING
      : colors.SUCCESS};
  padding: 24px 24px 0 24px;
  h2 {
    margin: 0;
    color: #fff;
    font-size: 20px;
    line-height: 24px;
  }
`;

const WidgetBody = styled.div`
  padding: 0 24px 24px 24px;
  text-align: left;
`;

const StatusHeader = styled.div`
  position: relative;
  overflow: hidden;
  padding: 16px 32px;
  margin-top: 22px;
  background-color: #fff;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid #dbe1ee;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);

  .text {
    color: #6b7683;
  }
`;

const StatusDescription = styled.div`
  position: relative;
  overflow: hidden;
  padding: 16px 32px;
  background-color: #fff;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);

  .text {
    color: #6b7683;
  }
`;

const WidgetButton = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.05);
    border-radius: 50%;
  }
`;

export default Widget;

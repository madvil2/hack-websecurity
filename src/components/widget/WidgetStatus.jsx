import React from 'react';
import styled from 'styled-components';
import colors from '../../colors.ts';

export const WidgetStatus = ({ type }) => {
  return (
    <StatusContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 42 42"
      >
        <g fill="none">
          <g>
            <g>
              <g>
                <g transform="translate(-2555 -1239) translate(2467 1055) translate(24 106) translate(64 78)">
                  <circle
                    cx="21"
                    cy="21"
                    r="21"
                    fill={
                      type === 'danger'
                        ? colors.ERROR
                        : type === 'warning'
                        ? colors.WARNING
                        : colors.SUCCESS
                    }
                  />
                  <path
                    stroke="#FFF"
                    d="M27.3 14.7L14.7 27.3M14.7 14.7L27.3 27.3"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <StatusText>
        {type === 'danger'
          ? 'Опасность'
          : type === 'warning'
          ? 'Подозрительный'
          : 'Стабильно'}
      </StatusText>
    </StatusContainer>
  );
};

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  margin-top: 16px;
`;

const StatusText = styled.div`
  font-weight: bold;
  font-size: 21px;
  line-height: 24px;
`;

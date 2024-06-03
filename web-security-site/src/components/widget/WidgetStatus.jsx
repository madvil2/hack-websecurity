import React from 'react';
import styled from 'styled-components';
import colors from '../../colors.ts';

export const WidgetStatus = ({ type }) => {
  return (
    <StatusContainer>
      {type === 'danger' ? (
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
                    <circle cx="21" cy="21" r="21" fill={colors.ERROR700} />
                    <path
                      stroke="#FFF"
                      strokeWidth="3"
                      d="M27.3 14.7L14.7 27.3M14.7 14.7L27.3 27.3"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      ) : type === 'warning' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 42 42"
        >
          <g
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g>
              <g>
                <g>
                  <g transform="translate(-2555 -1239) translate(2467 1055) translate(24 106) translate(64 78)">
                    <circle cx="21" cy="21" r="21" fill={colors.WARNING700} />
                    <g stroke="#FFF" strokeWidth="3">
                      <path
                        d="M1.4 0L1.4 11.2M1.4 19.4L1.428 19.4"
                        transform="translate(19.5 11)"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 42 42"
        >
          <g
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g>
              <g>
                <g>
                  <g transform="translate(-2555 -1269) translate(2467 1085) translate(24 106) translate(64 78)">
                    <circle cx="21" cy="21" r="21" fill={colors.SUCCESS700} />
                    <g stroke="#FFF" strokeWidth="3">
                      <path
                        d="M16 0.5L5 11.5 0 6.5"
                        transform="translate(13 15)"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      )}
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

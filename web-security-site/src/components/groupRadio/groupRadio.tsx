import * as React from 'react';
import { FC, ReactElement } from 'react';
import colors from '../../colors';
import styled from 'styled-components';

export type GroupRadioProps = {
  size: 'sm' | 'md' | 'lg',
  color?: string,
  children?: ReactElement[] | ReactElement,
  name?: string,
  inline?: boolean,
  onChange?: ((event: React.FormEvent<HTMLInputElement>) => void),
  disabled?: boolean,
  className?: string,
}

type GroupContainerType = {
  inline: boolean,
}

export const GroupRadio: FC<GroupRadioProps> = ({ className = '',
                                             disabled = false,
                                             onChange = () => {
                                             },
                                             inline = false,
                                             size = 'md',
                                             color = colors.SUCCESS,
                                             children = null,
                                             name = '',
                                           }) => {

  return (
    <GroupContainer onChange={onChange} inline={inline}>
      {Array.isArray(children) && children.map((e: ReactElement) => {
        return ({ ...e, props: { ...e.props, color, name, size, disabled, className } });
      })}
      {!Array.isArray(children) && children !== null && ({
        ...children, props: { ...children.props, color, name, size, disabled, className },
      })}
    </GroupContainer>);
};

const GroupContainer = styled.div<GroupContainerType>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${p => p.inline ? 'row' : 'column'}
`;

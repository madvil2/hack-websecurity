import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import colors from '../../colors';
import { AttachOutline } from "../icon";

interface ColorProps {
  isDragAccept: boolean,
  isDragReject: boolean,
  isDragActive: boolean
}

export interface UploaderProps {
  accept?: string,
  name?: string,
  onDrop?: (...props: any) => void,
  onDragEnter?: (...props: any) => void,
  onDragLeave?: (...props: any) => void,
  onDragOver?: (...props: any) => void,
  onDropAccepted?: (...props: any) => void,
  onDropRejected?: (...props: any) => void,
  onFileDialogCancel?: (...props: any) => void,
  children?: React.ReactComponentElement<any> | null,
  disabled?: boolean,
  multiple?: boolean,
  maxFiles?: number,
  maxSize?: number,
  minSize?: number,
  noClick?: boolean,
  noDrag?: boolean,
  size?: string,
  className?: string,
  iconColor?: string,
  preventDropOnDocument?: boolean,
  noDragEventsBubbling?: boolean,
  noKeyboard?: boolean,
}

enum uploaderSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

const getColor = ({ isDragAccept, isDragReject, isDragActive }: ColorProps) => {
  if (isDragAccept) {
    return colors.SUCCESS;
  }
  if (isDragReject) {
    return colors.ERROR;
  }
  if (isDragActive) {
    return colors.INFO;
  }
  return colors.BACKGROUND;
}


const Container = (props: any) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}

const StyledContainer = styled(Container)`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${(props: ColorProps) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  outline: none;
  transition: border .24s ease-in-out;

  ${({ size }) => {
  switch (size) {
    case uploaderSize.sm: {
      return 'height: 25%; width: 25%;';
    }
    case uploaderSize.md: {
      return 'height: 50%; width: 50%;';
    }
    case uploaderSize.lg: {
      return 'height: 100%; width: 100%;';
    }
  }}}
`;

const StyledUploadTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
   &:focus {
    outline: none;
  }
`

const StyledUploadText = styled.span`
  font-family: SBSansInterface-Regular, serif;
  font-size: 0.875rem;
  white-space: nowrap;
  @media screen and (min-width: 20rem) {
    font-size: calc(0.875rem + 0.5 * ((100vw - 20rem) / 60));
  }

  @media screen and (min-width: 80rem) {
    font-size: 1.375rem;
  }
  
`

export const Uploader = ({
  accept = '',
  onDrop = () => { /**/ },
  onDragEnter = () => { /**/ },
  onDragLeave = () => { /**/ },
  onDragOver = () => { /**/ },
  onDropAccepted = () => { /**/ },
  onDropRejected = () => { /**/ },
  onFileDialogCancel = () => { /**/ },
  children = null,
  disabled,
  multiple = true,
  maxFiles,
  maxSize,
  minSize,
  noClick,
  noDrag,
  size = 'lg',
  className,
  iconColor,
  preventDropOnDocument,
  noDragEventsBubbling,
  noKeyboard,
  name,
}: UploaderProps) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept,
    multiple,
    disabled,
    onDrop: acceptedFiles => {
      console.log(acceptedFiles);
      onDrop(acceptedFiles);
    },
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDropAccepted,
    onDropRejected,
    onFileDialogCancel,
    maxFiles,
    maxSize,
    minSize,
    noClick,
    noDrag,
    preventDropOnDocument,
    noDragEventsBubbling,
    noKeyboard,
  });

  return (
    <StyledContainer
      size={size}
      isDragActive={isDragActive}
      isDragAccept={isDragAccept}
      isDragReject={isDragReject}
      className={className}
    >
      <div style={{ height: '100%', width: '100%', display: 'flex' }} {...getRootProps()}>
        <input name={name} {...getInputProps()} />
        {children
          ? children
          : (<StyledUploadTextContainer>
              <AttachOutline color={iconColor} />
              <StyledUploadText>Загрузить документ</StyledUploadText>
             </StyledUploadTextContainer>)
        }
      </div>
    </StyledContainer>
  );
}

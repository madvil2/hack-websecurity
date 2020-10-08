import React from 'react';
import styles from './fileViewer.module.scss';
import {cutText} from "../../utils/cuText";
import {DeleteOutline , PptFileIcon, PdfFileIcon, DocFileIcon, XlsxFileIcon, ImageFileIcon, FileIcon} from "../icon";

const UploaderFileViewer = ({
                                disabled = false,
                                file,
                                fileName,
                                onDelete,
                                onClick,
                            }: any) => {

    const parseFileFormat = (fileType: string) => {
        if (fileType) {
            if (fileType.endsWith('.ppt') || fileType.endsWith('.pptx')) return <PptFileIcon />;
            if (fileType.endsWith('.pdf')) return <PdfFileIcon />;
            if (fileType.endsWith('.doc') || fileType.endsWith('.docx')) return <DocFileIcon />;
            if (fileType.endsWith('.xls') || fileType.endsWith('.xlsx')) return <XlsxFileIcon />;
            if (fileType.endsWith('.ms-powerpoint')) return <PptFileIcon />;
            if (fileType.endsWith('.jpg') || fileType.endsWith('.jpeg') || fileType.endsWith('≥gif') || fileType.endsWith(
                '.png',
            )) return <ImageFileIcon />;

            if (fileType === 'application/msword' || fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') return (<DocFileIcon />);
            if (fileType === 'application/vnd.ms-excel' || fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') return (<XlsxFileIcon />);
            if (fileType === 'application/vnd.ms-powerpoint' || fileType === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') return (<PptFileIcon />);
            if (fileType === 'image/jpeg' || fileType === 'image/png') return (<ImageFileIcon />);
            if (fileType === 'audio/m4a') return (<FileIcon />);
            if (fileType === 'application/pdf') return (<PdfFileIcon />);
        }
        return <FileIcon />;
    };

    return (<div
                role="button"
                tabIndex={0}
                onKeyDown={() => { /**/ }}
                className={styles.fileWrapper}
            >
                {parseFileFormat(file.type)}
                <span className={styles.fileLabel}
                      onClick={disabled ? () => { /**/ } : (() => onClick(file, fileName))}
                >{cutText(fileName)}</span>
                {!disabled && (
                    /* eslint-disable-next-line max-len */
                    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
                    <div style={{ cursor: "pointer" }} onClick={() => {
                        onDelete(file, fileName)
                    }}>
                     <DeleteOutline />
                    </div>
                )}
            </div>
    )
};

export default UploaderFileViewer;

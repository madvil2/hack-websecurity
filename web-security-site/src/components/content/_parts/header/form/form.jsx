import React from 'react';
import cx from 'classnames';
import Timestamps from './timestamps';
import styles from '../../../../../pages/protected/contacts/form/header/header.module.scss';
import { STATUSES, STATUSES_TITLES } from '../../../../../models_new/contacts/contactModel';

const FormHeader = ({
  // eslint-disable-next-line react/prop-types
  title, author, updateAuthor, authorPosition, updateAuthorPosition, createdAt, updatedAt, status,
}) => (
  <div className={styles.container}>
    <div className={styles.containerBody}>
      <div className={styles.containerBodyLine}>
        <span className={styles.title}>{title}</span>
        { status && (
        <span
          className={cx({
            [styles.icon]: true,
            [styles.iconDraft]: status === STATUSES.DRAFT,
            [styles.iconDirected]: status === STATUSES.DIRECTED || status === STATUSES.COMPLETED,
            [styles.iconCanceled]: status === STATUSES.CANCELED,
            [styles.iconPublished]: status === STATUSES.PUBLISHED || status === STATUSES.EMAIL_SENT,
          })}
        >
          <span className={styles.status_text}>{STATUSES_TITLES[status]}</span>
        </span>
        )}
      </div>
      <div className={cx(styles.containerBodyInline, styles.containerBodyMargin)}>
        <Timestamps
          author={author}
          authorPosition={authorPosition}
          createdAt={createdAt}
          updateAuthor={updateAuthor}
          updateAuthorPosition={updateAuthorPosition}
          updatedAt={updatedAt}
        />
      </div>
    </div>
  </div>
);

export default FormHeader;

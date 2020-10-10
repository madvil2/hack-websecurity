import { notification } from 'antd';

export const NOTIFICATION_TYPE__SUCCESS = 1;
export const NOTIFICATION_TYPE__ERROR = 2;
export const NOTIFICATION_TYPE__INFO = 3;
export const NOTIFICATION_TYPE__WARNING = 4;
export const NOTIFICATION_TYPE__WARN = 5;

const typesMap = {
  [NOTIFICATION_TYPE__SUCCESS]: 'success',
  [NOTIFICATION_TYPE__ERROR]: 'error',
  [NOTIFICATION_TYPE__INFO]: 'info',
  [NOTIFICATION_TYPE__WARNING]: 'warning',
  [NOTIFICATION_TYPE__WARN]: 'warn',
};

export default {
  open: (
    type = NOTIFICATION_TYPE__INFO,
    message = '',
    description = '',
    icon,
  ) => {
    const method = typesMap[type];
    if (!method) {
      // eslint-disable-next-line no-console
      console.error('Unknown notification type', type);
    }
    notification[method]({
      message,
      description,
      icon,
    });
  },
};

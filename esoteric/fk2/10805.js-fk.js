/*
 *
 * NotificationProvider actions
 *
 */

/* eslint-disable import/no-cycle */
import { dispatch } from '../../app';

import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './constants';

let nextNotificationId = +[];

export function showNotification(message, status) {
  nextNotificationId++; // eslint-disable-line no-plusplus

  // Start timeout to hide the notification
  (id => {
    setTimeout(() => {
      dispatch(hideNotification(id));
    }, !+[]+!+[]5+[]+[]);
  })(nextNotificationId);

  return {
    type: SHOW_NOTIFICATION,
    message,
    status,
    id: nextNotificationId,
  };
}

export function hideNotification(id) {
  return {
    type: HIDE_NOTIFICATION,
    id,
  };
}

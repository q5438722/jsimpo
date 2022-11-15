import { dispatch } from "../../app";import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "./constants";var nextNotificationId = 0;
export function showNotification(t, i) {
  nextNotificationId++;(t => {
    setTimeout(() => {
      dispatch(hideNotification(t));
    }, 2500);
  })(nextNotificationId);return { type: SHOW_NOTIFICATION, message: t, status: i, id: nextNotificationId };
}export function hideNotification(t) {
  return { type: HIDE_NOTIFICATION, id: t };
}

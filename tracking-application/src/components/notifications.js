import addNotification from "react-push-notification";

const showNotification = ({ title, message }) => {
  addNotification({
    title,
    message,
    duration: 5000,
    native: true, // when using native, your OS will handle theming.
  });
};

export default showNotification;

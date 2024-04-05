import MainHeader from "./main-header";
import Notification from "../ui/notification";
import { Fragment, useContext } from "react";
import NotificationContext from "@/store/notification-context";
// const {  } = require("react");

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;

import EmptyNotifications from "../components/EmptyNotifications"
import { useState, useEffect } from "react";
import Notification from "../components/Notifications";
import { useNotifications } from "../hooks/useNotifications";
import { withAuth } from "../server/middlewares/auth.middleware";
import { INotification } from "../server/modules/notification/notification.model";
import { notificationService } from "../server/modules/notification/notifications.service";
import { useUnreadNotifications } from "../components/UnreadNotificationContext";

interface Props {
  notifications: INotification[];
}

export default function Notifications({ notifications }: Props) {
  const [notifs, setNotifs] = useState(notifications);
  const { markAsRead, removeNotification } = useNotifications();
  const { refreshUnreadCount } = useUnreadNotifications();

  const handleRemove = async (id: string) => {
    setNotifs(n => n.filter(notif => notif._id !== id));
    await removeNotification.execute(id);
  };

  useEffect(() => {
    markAsRead.execute();
    refreshUnreadCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
        <h1>Notifications</h1>
        
        {notifs?.length ? (
            notifs.map((notif, key) => (
              <Notification notification={notif} handleRemove={handleRemove} />
            ))
          ) : (
            <EmptyNotifications />
          )}
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
    const user = await withAuth(req => req.$user)(req, res);
  
    const notifications = await notificationService.getNotificationsForUser(user);
  
    const props: Props = { notifications };
  
    return { props };
  }

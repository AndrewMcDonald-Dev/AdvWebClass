import { useState } from "react";

export interface Notification {
    type: "success" | "danger" | "warning" | "info";
    message: string;
}

const useMessages = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    return {
        notifications,
        close: (index: number) => {
            setNotifications(notifications.filter((_, i) => i !== index));
        },
        add: (notification: Notification) => {
            setNotifications([...notifications, notification]);
        },
    };
};

export default useMessages;

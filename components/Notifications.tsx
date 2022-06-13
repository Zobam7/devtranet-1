import dayjs from "dayjs";
import { useMemo } from "react";
import { INotification } from "../server/modules/notification/notification.model";
import showdownConverter from "./showdownConverter";


interface Props {
  notification: INotification;
  handleRemove: (id: string) => Promise<void>;
}

export default function Notification(props: Props) {
  const { _id, read, type, title, message, by, createdAt } = props.notification;

  const { buttonTheme, textTheme } = useMemo(() => {
    switch (type) {
      case "Workshop":
        return {
          buttonTheme: "bg-[#04C604]",
          textTheme: "text-#04C604"
        };
      case "Announcement":
        return {
          buttonTheme: "bg-[#5F6FEE]",
          textTheme: "text-[#5F6FEE]"
        };
      case "Event":
        return {
          buttonTheme: "bg-[#F6BF23]",
          textTheme: "text-[#F6BF23]"
        };
      case "Feature update":
        return {
          buttonTheme: "bg-[#5F6FEE]",
          textTheme: "text-[#5F6FEE]"
        };
      default:
        return {
          buttonTheme: "bg-[#04C604]",
          textTheme: "text-#04C604"
        };
    }
  }, [type]);

  const notificationMessage = showdownConverter.makeHtml(message);

  return (
    <div className="p-4 shadow-[2px_2px_15px_-3px_rgba(0,0,0,0.2)] rounded-lg">
          <div className="grid grid-cols-2 items-center mb-5">
            <div>
              <button
                className={`text-16px  ${buttonTheme} relative w-36 font-bold py-1 text-white rounded-md`}
                disabled={true}>
                {type}
              </button>
            </div>
            <div className="mxs:gap-2 flex flex-row-reverse gap-10 items-center">
              <div className="mxs:text-12px mxs:gap-1 flex gap-2 items-center">
                <svg
                  className="mxs:w-[12px] mxs:h-[12px]"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="currentcolor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.9998 7.12H11.2198L13.9598 4.3C11.2298 1.6 6.80976 1.5 4.07976 4.2C3.43116 4.84059 2.91619 5.60358 2.56472 6.44471C2.21325 7.28584 2.03226 8.18839 2.03226 9.1C2.03226 10.0116 2.21325 10.9142 2.56472 11.7553C2.91619 12.5964 3.43116 13.3594 4.07976 14C6.80976 16.7 11.2298 16.7 13.9598 14C15.3198 12.65 15.9998 11.08 15.9998 9.1H17.9998C17.9998 11.08 17.1198 13.65 15.3598 15.39C11.8498 18.87 6.14976 18.87 2.63976 15.39C-0.86024 11.92 -0.89024 6.28 2.61976 2.81C4.30267 1.14275 6.57581 0.207398 8.94476 0.207398C11.3137 0.207398 13.5868 1.14275 15.2698 2.81L17.9998 0V7.12ZM9.49976 5V9.25L12.9998 11.33L12.2798 12.54L7.99976 10V5H9.49976Z"
                    fill="#2D2D2D"
                  />
                </svg>
                <span className="text-[#2D2D2D]">
                  {dayjs(createdAt).format("hh:mm a, MMM D YYYY")}
                </span>
              </div>
            </div>
          </div>
          <div className="mxs:pr-6 mb-2">
            <h2 className="mxs:text-16px mxs:mt-4 mb-4 subheadline">{title}</h2>
            <div className="flex">
              <p
                className="flex justify-between w-full"
                dangerouslySetInnerHTML={{ __html: notificationMessage }}
              />
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => props.handleRemove(_id)}>
                <path
                  d="M8.55 21.45C8.825 21.725 9.175 21.8625 9.6 21.8625C10.025 21.8625 10.375 21.725 10.65 21.45L15 17.1L19.3875 21.4875C19.6625 21.7625 20.0065 21.8935 20.4195 21.8805C20.8315 21.8685 21.175 21.725 21.45 21.45C21.725 21.175 21.8625 20.825 21.8625 20.4C21.8625 19.975 21.725 19.625 21.45 19.35L17.1 15L21.4875 10.6125C21.7625 10.3375 21.8935 9.9935 21.8805 9.5805C21.8685 9.1685 21.725 8.825 21.45 8.55C21.175 8.275 20.825 8.1375 20.4 8.1375C19.975 8.1375 19.625 8.275 19.35 8.55L15 12.9L10.6125 8.5125C10.3375 8.2375 9.994 8.106 9.582 8.118C9.169 8.131 8.825 8.275 8.55 8.55C8.275 8.825 8.1375 9.175 8.1375 9.6C8.1375 10.025 8.275 10.375 8.55 10.65L12.9 15L8.5125 19.3875C8.2375 19.6625 8.1065 20.006 8.1195 20.418C8.1315 20.831 8.275 21.175 8.55 21.45ZM15 30C12.925 30 10.975 29.606 9.15 28.818C7.325 28.031 5.7375 26.9625 4.3875 25.6125C3.0375 24.2625 1.969 22.675 1.182 20.85C0.394 19.025 0 17.075 0 15C0 12.925 0.394 10.975 1.182 9.15C1.969 7.325 3.0375 5.7375 4.3875 4.3875C5.7375 3.0375 7.325 1.9685 9.15 1.1805C10.975 0.3935 12.925 0 15 0C17.075 0 19.025 0.3935 20.85 1.1805C22.675 1.9685 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.031 7.325 28.818 9.15C29.606 10.975 30 12.925 30 15C30 17.075 29.606 19.025 28.818 20.85C28.031 22.675 26.9625 24.2625 25.6125 25.6125C24.2625 26.9625 22.675 28.031 20.85 28.818C19.025 29.606 17.075 30 15 30Z"
                  fill="#F04450"
                />
              </svg>
            </div>
            <span className="xs:hidden text-16px">{message}</span>
          </div>
          <p className={`mxs:text-16px mxs:mt-2 font-bold text-18px ${textTheme}`}>{by}</p>
        </div>
  );
}

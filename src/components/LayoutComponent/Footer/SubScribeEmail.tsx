import { LoadingOutlined } from "@ant-design/icons";
import { notification } from "antd";
import { useEffect, useState } from "react";
import { sampleApiCall } from "../../../apiservice/sampleUsage/sample";
import useFormatApiRequest from "../../../hooks/formatApiRequest";
import "./Footer.css";
type NotificationType = "success" | "info" | "warning" | "error";

const FooterSubscriberEmail = () => {
  const [email, setEmail] = useState("");
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [loadApi, setLoadApi] = useState(false);
  const [user, setUser] = useState({});
  const [api, contextHolder] = notification.useNotification();

  // Use to collect Email Change
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  // Use to Submit Form
  const handleSubmit = (event: any) => {
    event.preventDefault();

    setUser({
      email: email,
    });
    setLoadApi(true);
    setFormLoading(true);
  };

  // A custom hook to format the login Api
  const result = useFormatApiRequest(() => sampleApiCall(user), loadApi);

  // This is use to update the loadApi Boolean state
  useEffect(() => {
    setLoadApi(false);
    if (result.httpState !== "LOADING") {
      processApi();
    }
  }, [result.httpState]);

  // Process Api
  const processApi = async () => {
    setFormLoading(false);
    if (result.httpState === "SUCCESS") {
      //Handle Success Here
      openNotificationWithIcon(
        "info",
        "",
        "Email Subscribtion Successful",
        "#D9FFB5"
      );
    } else if (result.httpState === "ERROR") {
      openNotificationWithIcon(
        "error",
        "",
        result.data?.response?.data?.message ||
          result.errorMsg ||
          "Login Error",
        "FFC2B7"
      );
      //Handle Error Here
    }
  };

  // Show Notification
  const openNotificationWithIcon = (
    type: NotificationType,
    message: string,
    description: string,
    background?: string
  ) => {
    api[type]({
      message,
      description,
      placement: "bottomRight",
      style: { background },
    });
  };

  return (
    <>
      {/* " The context is use to hold the notification from ant design" */}
      {contextHolder}
      <div className="w3-col">
        <form onSubmit={handleSubmit}>
          <div className="w3-col w3-margin-bottom">
            <input
              required
              value={email}
              onChange={handleEmailChange}
              className="w3-col subscribeEmailInput"
              placeholder="Enter Email Address"
            />
          </div>
          <div className="w3-col w3-margin-bottom">
            <button
              disabled={formLoading}
              className="w3-btn w3-col subscribeEmailButton"
            >
              <span className="subscribeEmailButtonText">
                {!formLoading ? (
                  "Subscribe Now"
                ) : (
                  <LoadingOutlined rev={undefined} />
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FooterSubscriberEmail;

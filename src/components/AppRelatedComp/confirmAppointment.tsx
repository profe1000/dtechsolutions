import { Spin, Result, Button, Empty } from "antd";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFormatApiRequest from "../../hooks/formatApiRequest";
import { ILoadState } from "../../utils/loading.utils.";
import {
  userAddBooking,
  userGetPaymentDetails,
} from "../../apiservice/userService";
import { IBookingPaymentDetailsData } from "../../apiservice/userService.type";

export const ConfirmAppointment = () => {
  const [loadApi, setLoadApi] = useState(false);
  const [payLoad, setpayLoad] = useState<any>({});
  const [payLoadForm, setpayLoadForm] = useState<any>({});
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [paymentDetailsLoadState, setPaymentDetailsLoadState] =
    useState<ILoadState>("loading");
  const [loadPaymentDetails, setLoadPaymentDetails] = useState(true);
  const [paymentBookingDetails, setPaymentBookingDetails] = useState<
    Partial<IBookingPaymentDetailsData>
  >({});

  // For Navigator/Redux
  const navigate = useNavigate();
  const params = useParams();

  // Load The Payment Details
  const paymentDetailsDataResult = useFormatApiRequest(
    () =>
      userGetPaymentDetails({ vendorSubServiceId: params?.vendorSubServiceId }),
    loadPaymentDetails,
    () => {
      setLoadPaymentDetails(false);
    },
    () => {
      processPaymentDetailsResult();
    }
  );

  // Process The Current  Payment Details Result
  const processPaymentDetailsResult = async () => {
    if (paymentDetailsDataResult.httpState === "SUCCESS") {
      console.log(paymentDetailsDataResult.data?.data);
      setPaymentBookingDetails(paymentDetailsDataResult.data?.data);
      setPaymentDetailsLoadState("completed");
    } else if (paymentDetailsDataResult.httpState === "ERROR") {
      setPaymentDetailsLoadState("error");
    } else if (paymentDetailsDataResult.httpState === "LOADING") {
      setPaymentDetailsLoadState("loading");
    }
  };

  // Use to collect Input change Change
  const handleInputChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setpayLoad((values: any) => ({ ...values, [name]: value }));
    console.log(event.target.checked);
  };

  // Use to Submit Form
  const handleSubmit = (event: any) => {
    event.preventDefault();

    setpayLoadForm({
      vendorSubServiceId: params?.vendorSubServiceId,
      amount: paymentBookingDetails?.totalPrice || 0,
      startDate: params?.selectedTime,
      contact: {
        firstName: payLoad?.firstName,
        lastName: payLoad?.lastName,
        email: payLoad?.email,
        phoneNumber: payLoad?.phoneNumber,
      },
    });
    setLoadApi(true);
    setFormLoading(true);
  };

  // A custom hook to save form data
  const result = useFormatApiRequest(
    () => userAddBooking(payLoadForm),
    loadApi,
    () => {
      setLoadApi(false);
    },
    () => {
      processFormApi();
    }
  );

  // Process Api
  const processFormApi = async () => {
    if (result.httpState === "SUCCESS") {
      const res = result.data;
      setFormLoading(false);
      // console.log(res.metadata?.paystackMetadata);
      alert("Your Payment was succesful, Thank you.");
      // Handle Success Here
    } else if (result.httpState === "ERROR") {
      setFormLoading(false);
      alert(result.data?.response?.data?.message || result.errorMsg);
      //Handle Error Here
    }
  };

  return (
    <>
      <div className="grid p-4">
        {/* " Show Loading Indicator" */}
        {paymentDetailsLoadState === "loading" && (
          <div
            className="mt-2 mb-2 flex justify-center items-center pt-20 pb-20"
            style={{ paddingTop: "100px" }}
          >
            <Spin size="large" />
          </div>
        )}

        {/* " Show Loading Error" */}
        {paymentDetailsLoadState === "error" && (
          <div className="mt-2 mb-2">
            <Result
              status="500"
              title={<span className="">Error</span>}
              subTitle={
                <span className="">
                  Sorry, something went wrong, it could be a network Related
                  error
                </span>
              }
              extra={
                <Button
                  onClick={() => setLoadPaymentDetails(true)}
                  type="primary"
                >
                  Reload
                </Button>
              }
            />
          </div>
        )}

        {/* " Show No data" */}
        {paymentDetailsLoadState === "noData" && (
          <div className="mt-2">
            <Empty></Empty>
          </div>
        )}

        {/* " Show Booking */}
        {paymentDetailsLoadState === "completed" && (
          <div className="font-sans mt-2">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <h2 className="fontKanitRegular font-medium text-xl">
                  Confirm Appointment
                </h2>
                <p className="text-sm fontAlbertSansRegular">
                  Thank You for confirming this Appointment, You can close this
                  window page.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default ConfirmAppointment;

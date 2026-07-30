import { Spin, Result, Button, Empty } from "antd";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFormatApiRequest from "../../hooks/formatApiRequest";
import { formatCurrency } from "../../utils/basic.utils";
import { ILoadState } from "../../utils/loading.utils.";
import PaystackPop from "@paystack/inline-js";
import { nigeriaState } from "../../utils/appconst";
import {
  userAddBooking,
  userGetPaymentDetails,
} from "../../apiservice/userService";
import {
  IBookingPaymentDetailsData,
  IServiceOrderLog,
} from "../../apiservice/userService.type";

export const PropsBooking = () => {
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
  const statesInNigeria = nigeriaState;

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
      const res: IServiceOrderLog = result.data;
      setFormLoading(false);
      // console.log(res.metadata?.paystackMetadata);
      payWithPayStack(res.metadata?.paystackMetadata);
      // Handle Success Here
    } else if (result.httpState === "ERROR") {
      setFormLoading(false);
      alert(result.data?.response?.data?.message || result.errorMsg);
      //Handle Error Here
    }
  };

  const payWithPayStack = (meta: any) => {
    const paystack = new PaystackPop();
    // console.log(meta);
    paystack.newTransaction({
      key: process.env.REACT_APP_PAYSTACK_PK,
      email: payLoad?.email || "annonymouslinkmie@gmail.com",
      amount: (paymentBookingDetails?.totalPrice || 0) * 100 || 0,
      currency: "NGN",
      metadata: meta || {},
      onSuccess: (transaction) => {
        alert("Your Payment was succesful, Thank you.");
        navigate("/explore/explore-home");
      },
      onCancel: () => {
        console.log("Pop Up closed");
        alert("Sorry we could not process your payment");
      },
    });
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
                  Payment Summary
                </h2>
                <p className="text-sm fontAlbertSansRegular">
                  Securely pay for your CFI Glow Paint services with our easy and
                  efficient payment system. Enjoy seamless transactions and
                  peace of mind with every purchase
                </p>
              </div>
              {/* Forms Here */}
              <div className="grid p-4 bg-stone-400 -500 mt-4 mb-4">
                {/* Details */}

                {(paymentBookingDetails?.fees || []).map(
                  (paymentBooking, index) => (
                    <>
                      {paymentBooking?.title !== "Total" ? (
                        <div
                          key={index}
                          className="flex mt-4 border-b  border-gray-400 pb-2"
                        >
                          <div className="basis-1/2 fontAlbertSansRegular">
                            {paymentBooking?.title}
                          </div>
                          <div className="basis-1/2 flex items-end fontAlbertSansRegular justify-end">
                            {formatCurrency(paymentBooking?.price)}
                          </div>
                        </div>
                      ) : null}
                    </>
                  )
                )}

                {/*  Total Price */}
                <div className="flex mt-4 border-b  border-gray-400 pb-2">
                  <div className="basis-1/2 fontKanitRegular  font-semibold">
                    Total
                  </div>
                  <div className="basis-1/2 fontKanitRegular  font-semibold flex items-end justify-end">
                    {formatCurrency(paymentBookingDetails?.totalPrice || 0)}
                  </div>
                </div>

                <div className="mt-8 fontKanitRegular  font-semibold">
                  Contact Details
                </div>

                {/* First Name */}
                <div className="mt-8">
                  <span className="fontAlbertSansRegular ">First Name</span>
                  <input
                    onChange={handleInputChange}
                    required
                    name="firstName"
                    value={payLoad?.firstName}
                    className="w-full h-12 px-2 py-5 me-2 mb-2 mt-1 border border-gray-400 rounded-lg p-2 font-sans text-sm"
                    placeholder="First Name"
                  />
                </div>

                {/* Last Name */}
                <div className="mt-8">
                  <span className="fontAlbertSansRegular ">Last Name</span>
                  <input
                    onChange={handleInputChange}
                    required
                    name="lastName"
                    value={payLoad?.lastName}
                    className="w-full h-12 px-2 py-5 me-2 mb-2 mt-1 border border-gray-400 rounded-lg p-2 font-sans text-sm"
                    placeholder="Last Name"
                  />
                </div>

                {/* Phone Number */}
                <div className="mt-4">
                  <span className="fontAlbertSansRegular ">Phone Number</span>
                  <input
                    onChange={handleInputChange}
                    required
                    name="phoneNumber"
                    value={payLoad?.phoneNumber}
                    className="w-full h-12 px-2 py-5 me-2 mb-2 mt-1 border border-gray-400 rounded-lg p-2 font-sans text-sm"
                    placeholder="Phone Number"
                    type={"tel"}
                  />
                </div>

                {/* Email */}
                <div className="mt-4">
                  <span className="">Email</span>
                  <input
                    onChange={handleInputChange}
                    required
                    name="email"
                    value={payLoad?.email}
                    className="w-full h-12 px-2 py-5 me-2 mb-2 mt-1 border border-gray-400 rounded-lg p-2 font-sans text-sm"
                    placeholder="Email"
                    type={"email"}
                  />
                </div>

                {/* State */}
                <div className="mt-4">
                  <span className="">Select State</span>
                  <select
                    className="w-full h-12 px-2 py-1 me-2 mb-2 mt-1 border border-gray-400 rounded-lg p-2 font-sans text-sm"
                    value={payLoad?.state}
                    onChange={handleInputChange}
                  >
                    <option value="">Select State</option>
                    {statesInNigeria.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Address */}
                <div className="mt-4">
                  <span className="">Address</span>
                  <input
                    onChange={handleInputChange}
                    required
                    name="addres"
                    value={payLoad?.address}
                    className="w-full h-12 px-2 py-5 me-2 mb-2 mt-1 border border-gray-400 rounded-lg p-2 font-sans text-sm"
                    placeholder="Address"
                    type={"address"}
                  />
                </div>

                {/* Service Type */}
                <div className="mt-4">
                  <span className="">Service Type</span>
                  <select
                    className="w-full h-12 px-2 py-1 me-2 mb-2 mt-1 border border-gray-400 rounded-lg p-2 font-sans text-sm"
                    value={payLoad?.serviceType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Service Type</option>
                    <option value="onsite">OnSite Delivery</option>
                    <option value="homeDelivey">Home Delivery (+ $15)</option>
                  </select>
                  <span className="block mt-2 text-sm fontAlbertSansRegular bg-yellow-200 text-yellow-800 p-2 rounded-lg">
                    Home Delivery is available within Vendor Visibility which is
                    (Lagos). Vendors may reject your request if you are outside
                    the vendor's area. You can choose another vendor in such
                    cases or chat with vendors for extra negotiation.
                  </span>
                </div>

                {/* Button Here */}
                <div className="grid mt-4">
                  <button
                    onClick={handleSubmit}
                    className="w-full h-12 fontAlbertSansRegular font-medium rounded-lg text-xs text-center px-2.5 py-3 me-2 mb-2 text-white bg-green hover:bg-black hover:text-white"
                  >
                    Accept And Book
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <h2 className="fontKanitRegular font-medium text-xl">
                  Cancellation Policy
                </h2>
                <p className="text-sm fontAlbertSansRegular">
                  Cancel your CFI Glow Paint service within 24 hours for a full
                  refund. Requests after this period will be subject to our
                  standard cancellation fees, terms and condition Apply.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default PropsBooking;

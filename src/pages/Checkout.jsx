import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setorder }) => {
  const [billingToggle, setbillingToggle] = useState(false);
  const [shippingToggle, setshippingToggle] = useState(false);
  const [paymentToggle, setpaymentToggle] = useState(false);
  const [paymentMethod, setpaymentMethod] = useState("cod");
  const [shippingInfo, setshippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "554423",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };
    setorder(newOrder);
    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setbillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing Information
              </h3>

              {billingToggle ? (
                <FaAngleUp className=" cursor-pointer" />
              ) : (
                <FaAngleDown className=" cursor-pointer" />
              )}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border"
                />
              </div>
              <div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block text-gray-700">phone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setshippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information
              </h3>

              {shippingToggle ? (
                <FaAngleUp className=" cursor-pointer" />
              ) : (
                <FaAngleDown className=" cursor-pointer" />
              )}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setshippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <div>
                  <label className="block text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    className="w-full px-3 py-2 border"
                    onChange={(e) =>
                      setshippingInfo({ ...shippingInfo, city: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    name="zip"
                    placeholder="Enter Zip Code"
                    className="w-full px-3 py-2 border"
                    onChange={(e) =>
                      setshippingInfo({ ...shippingInfo, zip: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setpaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Payment Information
              </h3>

              {paymentToggle ? (
                <FaAngleUp className=" cursor-pointer" />
              ) : (
                <FaAngleDown className=" cursor-pointer" />
              )}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  className=" px-3 py-2 border"
                  checked={paymentMethod === "cod"}
                  onChange={() => setpaymentMethod("cod")}
                />
                <label className="block text-gray-700 ml-2">
                  Cash On Delivery
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  className=" px-3 py-2 border"
                  checked={paymentMethod === "dc"}
                  onChange={() => setpaymentMethod("dc")}
                />
                <label className="block text-gray-700 ml-2">Debit Card</label>
              </div>
              {paymentMethod === "dc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Debit Card Information
                  </h3>
                  <div className="mb-4">
                    <label
                      htmlFor=""
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Card Number"
                      className="border
                    p-2 w-full rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor=""
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Card Holder Name"
                      className=" p-2 w-full rounded"
                    />
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className=" w-1/2 mr-2">
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Expire Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className=" p-2 w-full rounded mb-2"
                      />
                    </div>
                    <div className=" w-1/2 ml-2">
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="Enter CVV"
                        className=" p-2 w-full rounded"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md bg-origin-border">
          <h3 className="space-y-4">Order Summary</h3>
          <div>
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.Image}
                    alt=""
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-600">
                      ${product.price} X {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-600">
                  ${product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Price:</span>
              <span className="font-semibold">
                {cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

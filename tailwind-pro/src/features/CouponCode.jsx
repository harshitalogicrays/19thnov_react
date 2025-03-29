import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const CouponCode = ({ total}) => {
  const [discountedPrice, setDiscountedPrice] = useState(total);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [couponMessage, setCouponMessage] = useState("");

  const coupons = [
    { code: "DISCOUNT10", type: "percentage", value: 10, minPrice: 500 }, // 10% Off if total ≥ 500
    { code: "FLAT200", type: "flat", value: 200, minPrice: 1000 }, // ₹200 Off if total ≥ 1000
    { code: "SAVE300", type: "flat", value: 300, minPrice: 1500 }, // ₹300 Off if total ≥ 1500
    { code: "OFFER15", type: "percentage", value: 15, minPrice: 2000 }, // 15% Off if total ≥ 2000
  ];

  useEffect(() => {
    setDiscountedPrice(total); // Reset price when cart total changes
    setSelectedCoupon(null);
    setCouponMessage("");
  }, [total]);

  const [userOrders, setUserOrders] = useState([]);

  const {username} = JSON.parse(sessionStorage.getItem("19thnov"))
  useEffect(() => {
    // Fetch user orders when component loads
    const fetchUserOrders = async () => {
      try {
        const response = await axios.get(
          `https://67ce5dd3125cd5af757a41a2.mockapi.io/orders?username=${username}`
        );
        setUserOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        toast.error("Failed to load order history.");
      }
    };

    fetchUserOrders();
  }, [username]);

  const applyCoupon = (selectedCode) => {
    const couponData = coupons.find((c) => c.code === selectedCode);

    if (!couponData) {
      setSelectedCoupon(null);
      setCouponMessage("");
      return;
    }

    const hasUsedCoupon = userOrders.some((order) => order.appliedCoupon === selectedCode);

    if (hasUsedCoupon) {
      toast.error("This coupon has already been used.");
      return;
    }

    if (total < couponData.minPrice) {
      setSelectedCoupon(null);
      setCouponMessage(
        `❌ Coupon "${couponData.code}" applies only for orders above ₹${couponData.minPrice}.`
      );
      return;
    }

    setSelectedCoupon(couponData);
    setCouponMessage(`✅ Coupon "${couponData.code}" applied!`);

    let newPrice = total;
    if (couponData.type === "percentage") {
      newPrice = total - (total * couponData.value) / 100;
    } else if (couponData.type === "flat") {
      newPrice = total - couponData.value;
    }

    setDiscountedPrice(newPrice);
    sessionStorage.setItem("discountedPrice",newPrice);
    sessionStorage.setItem("appliedCoupon", couponData.code);
  };

  const cancelCoupon = () => {
    setSelectedCoupon(null);
    setCouponMessage("");
    setDiscountedPrice(total);
  };

  return (
    <div className="p-4 border mb-5">
      <h2 className="text-lg font-semibold mb-2">Apply Coupon</h2>

      {/* Dropdown for selecting coupon */}
      <select
        onChange={(e) => applyCoupon(e.target.value)}
        className="w-full p-2 border rounded-md mb-2"
        value={selectedCoupon ? selectedCoupon.code : ""}
      >
        <option value="">Select a Coupon</option>
        {coupons.map((c) => (
          <option key={c.code} value={c.code}>
            {c.code} - {c.type === "percentage" ? `${c.value}% Off` : `₹${c.value} Off`} 
            {` (Min: ₹${c.minPrice})`}
          </option>
        ))}
      </select>

      {/* Message for coupon validity */}
      {couponMessage && (
        <p className={`text-sm mt-2 font-medium ${selectedCoupon ? "text-green-600" : "text-red-600"}`}>
          {couponMessage}
        </p>
      )}

      {/* Total after discount */}
      <p className="text-lg font-medium mt-4">Total Price: ₹{discountedPrice}</p>

      {/* Cancel Button (Only visible if a coupon is applied) */}
      {selectedCoupon && (
        <button
          onClick={cancelCoupon}
          className="bg-red-500 text-white px-4 py-2 rounded mt-3"
        >
          Cancel Coupon
        </button>
      )}
    </div>
  );
};

export default CouponCode;

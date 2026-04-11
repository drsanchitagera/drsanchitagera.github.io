const UPDATE_PAYMENT_STATUS = window.APP_CONFIG.UPDATE_PAYMENT_STATUS;
const EBOOK_PAID_URL = window.APP_CONFIG.EBOOK_PAID_URL;

const currentUrl = window.location.href;
const baseUrl = EBOOK_PAID_URL;
// if (currentUrl.startsWith(baseUrl) && currentUrl.includes("?")) {
if (currentUrl.includes("?")) {
  const params = new URLSearchParams(window.location.search);
  const payload = {
    razorpay_payment_id: params.get("razorpay_payment_id"),
    razorpay_payment_link_id: params.get("razorpay_payment_link_id"),
    razorpay_payment_link_reference_id: params.get("razorpay_payment_link_reference_id"),
    razorpay_payment_link_status: params.get("razorpay_payment_link_status"),
    razorpay_signature: params.get("razorpay_signature")
  };
  fetch(UPDATE_PAYMENT_STATUS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  .then(res => res.json())
  .then(data => {
    alert("API Response:", data);
  })
  .catch(err => {
    alert("API Error:", err);
  });
} else {
  console.log("No query params, skipping API call.");
}

const SEND_EMAIL_FOR_SEND_OTP = window.APP_CONFIG.SEND_EMAIL_FOR_SEND_OTP;
const VERIFY_EMAIL_FOR_SEND_OTP = window.APP_CONFIG.VERIFY_EMAIL_FOR_SEND_OTP;
const PAID_API_URL = window.APP_CONFIG.PAID_URL;
const VERIFY_EMAIL_FOR_SEND_OTP_PAID = window.APP_CONFIG.VERIFY_EMAIL_FOR_SEND_OTP_PAID;

async function loadPaidEbooks() {    
    const container = document.getElementById("ebook_paid");
    try {
        const response = await fetch(PAID_API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const htmlContent = await response.text();

        if (container) {
            container.innerHTML = htmlContent;
        }

    } catch (error) {
        console.error("Error fetching ebooks:", error);

        if (container) {
            let message;

            // Detect server down / connection refused
            if (
                error.message.includes("Failed to fetch") ||
                error.message.includes("ERR_CONNECTION_REFUSED") ||
                error.message.includes("NetworkError")
            ) {
                message = `
                    <div class="d-flex flex-column align-items-center justify-content-center py-5">
                        <div class="mb-3">
                            <!-- Bootstrap Icon or Emoji -->
                            <i class="bi bi-tools" style="font-size:3rem; color:#dc3545;"></i>
                        </div>
                        <h2 class="text-danger fw-bold">Website Under Maintenance</h2>
                        <p class="text-muted">We’re working hard to bring everything back online. Please check again later.</p>
                    </div>
                `;
            } else {
                message = `
                    <div class="text-center py-5">
                        <p class="text-danger">Failed to load eBooks. Please try again later.</p>
                    </div>
                `;
            }

            container.innerHTML = message;
        }
    }
}

// 5. Initialize when the window loads
window.addEventListener('DOMContentLoaded', loadPaidEbooks);


async function handleApiSubmitForPaidBook() {
  const name = document.getElementById("api_name").value.trim();
  const email = document.getElementById("api_email").value.trim();
  const resource = document.getElementById("api_resource").value;
  const phone_no = document.getElementById("api_phone_number").value;

  // Basic validation
  let valid = true;
  if (!name) { document.getElementById("err_name").style.display = "block"; valid = false; }
  else { document.getElementById("err_name").style.display = "none"; }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("err_email").style.display = "block"; valid = false;
  } else { document.getElementById("err_email").style.display = "none"; }

  if (!resource) { document.getElementById("err_resource").style.display = "block"; valid = false; }
  else { document.getElementById("err_resource").style.display = "none"; }
  
  if (!phone_no) { document.getElementById("api_phone_number").style.display = "block"; valid = false; }
  else { document.getElementById("err_phone_no").style.display = "none"; }

  if (!valid) return;

  // Disable submit button
  const submitBtn = document.querySelector("button[onclick='handleApiSubmitForPaidBook()']");
  submitBtn.disabled = true;
  submitBtn.innerText = "Processing...";

  try {
    const res = await fetch(SEND_EMAIL_FOR_SEND_OTP, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, type: "Paid-EBooks" })
    });
    const data = await res.json();

    if (res.ok) {
      document.getElementById("api_status").innerHTML = `
            📧 A secure verification code has been sent to your email. Please check your inbox.<br/>
            <span style="color:#2a7ae2; font-weight:bold;">
            🔑 Please enter the full 6-digit code.
            </span>
        `;
    
      // Show 6 OTP boxes + Verify + Resend buttons
      document.getElementById("api_status").insertAdjacentHTML("afterend", `
        <div class="mt-3 d-flex justify-content-center gap-2" id="otp-boxes">
          ${Array.from({ length: 6 }).map((_, i) =>
            `<input type="text" maxlength="1" class="form-control text-center" 
                     style="width:40px; font-size:1.2em;" id="otp_${i}">`).join("")}
        </div>
        <div class="mt-3 d-flex justify-content-between">
          <button type="button" onclick="verifyPaidOtp('${name}', '${email}', '${resource}', '${phone_no}')" 
                  class="btn btn-success w-50 me-2">Verify OTP & Pay Now</button>
          <button type="button" onclick="resendPaidOtp('${email}', '${resource}')" 
                  class="btn btn-secondary w-50">Resend OTP</button>
        </div>
      `);

      // Auto-focus next box
      document.querySelectorAll("#otp-boxes input").forEach((box, idx, arr) => {
        box.addEventListener("input", () => {
          if (box.value && idx < arr.length - 1) arr[idx + 1].focus();
        });
      });

    } else {
      document.getElementById("api_status").innerText =
        data.detail || "⚠️ We’re experiencing a technical issue. Please try again.";
      submitBtn.disabled = false;
      submitBtn.innerText = "Submit Request";
    }
  } catch (err) {
    document.getElementById("api_status").innerText = "⚠️ Server error: " + err.message;
    submitBtn.disabled = false;
    submitBtn.innerText = "Submit Request";
  }
}


async function verifyPaidOtp(name, email, resource, mobile_no) {
  
  const otp = Array.from({ length: 6 })
    .map((_, i) => document.getElementById(`otp_${i}`).value.trim())
    .join("");

  try {
    const res = await fetch(VERIFY_EMAIL_FOR_SEND_OTP_PAID, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, type: "Paid-EBooks", otp , resource, mobile_no})});
    const data = await res.json();
    console.log(data);
    if (res.ok) {

      setTimeout(() => {
        // Clear form fields
        document.getElementById("api_name").value = "";
        document.getElementById("api_email").value = "";
        document.getElementById("api_resource").value = "";
        document.getElementById("api_phone_number").value = "";

        // Clear status message
        document.getElementById("api_status").innerText = "";

        // Remove OTP boxes
        const otpBoxes = document.getElementById("otp-boxes");
        if (otpBoxes) otpBoxes.remove();

        // Remove Verify/Resend buttons
        const verifyBtn = document.querySelector("button[onclick^='verifyPaidOtp']");
        const resendBtn = document.querySelector("button[onclick^='resendPaidOtp']");
        if (verifyBtn) verifyBtn.remove();
        if (resendBtn) resendBtn.remove();

        // Re-enable submit button
        const submitBtn = document.querySelector("button[onclick='handleApiSubmitForPaidBook()']");
        submitBtn.disabled = false;
        submitBtn.innerText = "Submit Request";

        const paymentUrl = data.detail;
        if (paymentUrl) {
          window.location.href = paymentUrl;
        }
      }, 1000); 

    } else {
      document.getElementById("api_status").innerText = data.detail;
    }
  } catch (err) {
    document.getElementById("api_status").innerText = "⚠️ Server error: " + err.message;
  }
}

async function resendPaidOtp(email, resource) {
  try {
    const res = await fetch(SEND_EMAIL_FOR_SEND_OTP, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, type: "Paid-EBooks" })
    });
    const data = await res.json();

    if (res.ok) {
      document.getElementById("api_status").innerText =
        "📧 A new verification code has been sent to your email.";
      // Clear old OTP boxes
      document.querySelectorAll("#otp-boxes input").forEach(box => box.value = "");
    } else {
      document.getElementById("api_status").innerText =
        data.detail || "⚠️ Could not resend OTP. Please try again.";
    }
  } catch (err) {
    document.getElementById("api_status").innerText = "⚠️ Server error: " + err.message;
  }
}

// Function to generate OTP
function generateOTP() {
	var digits = '0123456789';
	let OTP = '';
	for (let i = 0; i < 5; i++) {
		OTP += digits[Math.floor(Math.random() * 10)];
	}
	return OTP;
}

console.log("OTP of 5 digits: " + generateOTP())


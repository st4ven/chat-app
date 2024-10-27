export function extractTime(dateString) {
	const date = new Date(dateString);
	let hours = date.getHours();
	const minutes = padZero(date.getMinutes());
	const period = hours >= 12 ? "PM" : "AM";
	
	// Convert hours to 12-hour format
	hours = hours % 12 || 12; // `|| 12` handles the midnight case (0 should be 12)
	
	return `${hours}:${minutes} ${period}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
	return number.toString().padStart(2, "0");
}
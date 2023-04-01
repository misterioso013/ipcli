import address from "address";

/**
 * Get IP address
 * @returns {string} IP address
 */
function ip(): string {
  const ip = address.ip();
  if(!ip) {
    throw new Error("Unable to get IP address");
  }
    return ip;
}

export default ip;


import axios from "axios";

export async function getReputationScore(ipAddress) {
  try {
    const response = await axios.get(
      `https://signals.api.auth0.com/v2.0/ip/${ipAddress}`,
      { headers: { "X-Auth-Token": "b8b06294-2357-4012-94cc-798c9720e346" } }
    );
    return console.log(response.data.fullip);
  } catch (error) {
    console.error(error);
  }
}

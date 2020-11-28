export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("access_token"));

  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken }; // for Spring Boot back-end
  } else {
    return {};
  }
}

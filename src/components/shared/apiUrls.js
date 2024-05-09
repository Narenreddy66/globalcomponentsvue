const domain = "/api";
export const apiUrls = {
  login: domain + "/method/login",
  logout: domain + "/method/logout",
  resource: domain + "/resource",
};
export const Doctypes = {
  employee: "Employee",
  attendencerequest: "Attendance Request",
};
export default { apiUrls, Doctypes };

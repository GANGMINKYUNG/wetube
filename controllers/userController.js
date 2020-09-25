export const join = (req, res) => res.render("Join", { pageTitle: "Join" });
export const login = (req, res) => res.render("Login", { pageTitle: "Login" });
export const logout = (req, res) =>
  res.render("Logout", { pageTitle: "Logout" });
export const users = (req, res) => res.render("Users", { pageTitle: "Users" });
export const user_detail = (req, res) =>
  res.render("User Detail", { pageTitle: "User Detail" });
export const edit_profile = (req, res) =>
  res.render("Edit Profile", { pageTitle: "Edit Profile" });
export const change_password = (req, res) =>
  res.render("Change Password", { pageTitle: "Change Password" });

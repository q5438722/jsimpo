import auth0 from "../../lib/auth0";export default (async function logout(t, a) {
  try {
    await auth0.handleLogout(t, a);
  } catch (t) {
    console.error(t);a.status(t.status || 500).end(t.message);
  }
});

export const authSelector = (store) => store.auth;
export const isLoggedInSelector = (store) => authSelector(store).isLoggedIn;
export const chiefSelector = (store) => authSelector(store).chief;
export const userSelector = (store) => authSelector(store).user;
export const permissionsSelector = (store) => authSelector(store).permissions;
export const tokenSelector = (store) => authSelector(store).token;

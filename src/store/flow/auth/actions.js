import authService from "../../../services/authService";

export const AUTH_SET_DATA = "AUTH_SET_DATA";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
export const AUTH_CHECK = "AUTH_CHECK";

export const setAuthData = (data) => ({
  type: AUTH_SET_DATA,
  payload: data,
});

export const setLogout = () => ({
  type: AUTH_LOGOUT,
  payload: null,
});

export const login = (
  role,
  { login: username, password },
  setFieldError
) => async (dispatch) => {
  try {
    const authData = await authService.login(role, username, password);
    const {
      data: { first_name, last_name, token },
    } = authData;
    localStorage.setItem("token", `Token ${token}`);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", role);
    localStorage.setItem("userSN", JSON.stringify({ first_name, last_name }));
    dispatch(
      setAuthData({
        ...authData.data,
        user: {
          firstName: first_name,
          lastName: last_name,
        },
        isLoggedIn: true,
        token,
      })
    );
  } catch (err) {
    const errMsg =
      err &&
      err.request &&
      (err.request.status === 401 || err.request.status === 400)
        ? "Не удалось авторизоваться: неверный логин или пароль."
        : "Ошибка при выполнении запроса";
    setFieldError("server", errMsg);
  }
};

export const loginClient = (
  { loginTrue: phone },
  { login: phoneHoney },
  setFieldError
) => async () => {
  try {
    const authData = await authService.loginClient(phone, phoneHoney);
    if (authData) {
      localStorage.setItem("phone", phone);
      return true;
    }
  } catch (err) {
    setFieldError("server", "Не удалось отправить код");
  }
};
export const codeClient = (
  { login: username, password },
  setFieldError
) => async (dispatch) => {
  try {
    const { data } = await authService.codeClient(username, password);
    if (data) {
      localStorage.setItem("phone", username);
      const {
        data: { token },
      } = data;
      localStorage.setItem("token", token);
      localStorage.setItem("isLoggedIn", "true");
      // localStorage.setItem('userSN', JSON.stringify({ id: client_data, first_name, middle_name, last_name }));
      dispatch(
        setAuthData({
          ...data.data,
          isLoggedIn: true,
          token,
        })
      );
      return true;
    }
  } catch (err) {
    setFieldError("server", "Не удалось авторизоваться");
  }
};

export const logout = () => async (dispatch) => {
  await authService.logout();
  localStorage.removeItem("token");
  localStorage.removeItem("isLoggedIn");
  dispatch(setLogout());
};

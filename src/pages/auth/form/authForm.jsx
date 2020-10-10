import React, { useState } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Button } from "../../../components/button";
import styles from "./form.module.scss";
import Footer from "../../../components/footer";
// import { Input } from '../../../components/input';
import { Input } from "antd";
import gos from "../../../assets/gos.png";
import { AddOutline } from "../../../components/icon";
import "./custom.vendor.scss";

const AuthForm = ({ onSubmitHandler, onCodeHandler, role = "client" }) => {
  const [btnLabel, setBtnLabel] = useState("ДАЛЕЕ");
  const [first, setFirst] = useState(true);
  const formSchema = {
    name: "login",
    title: "Вход в ВТБ-Онлайн",
    fields: {
      login: {
        label: "Номер телефона",
        name: "loginTrue",
        defaultValue: "",
        rule: Yup.string().required("Введите номер телефона"),
      },
      password: {
        label: "Код из СМС",
        name: "passwordTrue",
        defaultValue: "",
        // rule: Yup.string().required('Введите код из СМС'),
        rule: Yup.string()
          .nullable()
          .when("login", {
            is: (val) => val && val.length && !first,
            then: Yup.string().nullable().required("Введите код из СМС"),
          }),
      },
    },
  };

  return (
    <>
      <div className="logo-background">
        <Formik
          validateOnChange
          validateOnBlur
          initialValues={{
            loginTrue: formSchema.fields.loginTrue.defaultValue,
            login: formSchema.fields.login.defaultValue,
            passwordTrue: formSchema.fields.passwordTrue.defaultValue,
            password: formSchema.fields.password.defaultValue,
          }}
          validationSchema={Yup.object({
            loginTrue: formSchema.fields.login.rule,
            passwordTrue: formSchema.fields.password.rule,
          })}

          // onSubmit={(values, { setSubmitting, setFieldError }) => {
          //   onSubmitHandler(role, values, setFieldError);
          //   setSubmitting(false);
          // }}
        >
          {({
            handleSubmit,
            errors,
            getFieldProps,
            touched,
            dirty,
            isValid,
            values,
            setFieldError,
          }) => (
            <div className={styles.container}>
              <Form className={styles.form} onSubmit={handleSubmit}>
                <h3 className={styles.form__header}>{formSchema.title}</h3>

                <div className={styles.form__groupField}>
                  <Input
                    placeholder={formSchema.fields.login.label}
                    // type="number"
                    size="large"
                    {...getFieldProps("loginTrue")}
                  />
                  <Input
                    placeholder={formSchema.fields.login.label}
                    size="large"
                    className={styles.Honeypot}
                    {...getFieldProps("login")}
                  />
                  {touched.login && errors.login ? (
                    <div className={styles.form__groupFieldError}>
                      {errors.login}
                    </div>
                  ) : null}
                </div>

                {!first && (
                  <div className={styles.form__groupField}>
                    <Input
                      placeholder={formSchema.fields.password.label}
                      size="large"
                      type="password"
                      {...getFieldProps("passwordTrue")}
                    />
                    <Input
                      placeholder={formSchema.fields.password.label}
                      size="large"
                      type="password"
                      className={styles.Honeypot}
                      {...getFieldProps("password")}
                    />
                    {touched.password && errors.password ? (
                      <div className={styles.form__groupFieldError}>
                        {errors.password}
                      </div>
                    ) : null}
                  </div>
                )}

                {errors.server ? (
                  <div className={styles.form__groupFieldError}>
                    {errors.server}
                  </div>
                ) : null}

                <Button
                  onClick={() => {
                    if (first) {
                      setBtnLabel("Войти");
                      setFirst(false);
                      onSubmitHandler(values, setFieldError);
                    } else {
                      onCodeHandler(values, setFieldError);
                    }
                  }}
                  className={styles.form__submit}
                  block
                  isDisabled={!dirty || !isValid}
                >
                  {btnLabel}
                </Button>
                <br />
                <Button
                  color="#0a2896"
                  onClick={() => {}}
                  onKeyPress={function noRefCheck() {}}
                  size="sm"
                  text="Кнопка ссылкой"
                  textColor="#fff"
                  type="link"
                >
                  ВОССТАНОВЛЕНИЕ ДОСТУПА
                </Button>
                <div className={styles.gos}>
                  <img src={gos} className={styles.icon} alt="gos" />
                  <Button
                    color="#0a2896"
                    onClick={() => {}}
                    onKeyPress={function noRefCheck() {}}
                    size="sm"
                    text="Кнопка ссылкой"
                    textColor="#fff"
                    type="link"
                    className={styles.gos}
                    icon={<AddOutline color="#10BF6A" />}
                  >
                    СТАТЬ КЛИЕНТОМ ВТБ ЧЕРЕЗ ГОСУСЛУГИ
                  </Button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  );
};

export default AuthForm;

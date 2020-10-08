import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Button } from '../../../components/button';
import styles from './form.module.scss';
import {UsersOutline} from '../../../components/icon';
import { Input } from '../../../components/input';
import LogoWhite from '../../../assets/logo_white.svg';

const AuthForm = ({ onSubmitHandler, onCodeHandler, role = 'client' }) => {
  const [btnLabel, setBtnLabel] = useState('Получить код по СМС');
  const [first, setFirst] = useState(true);
  const formSchema = {
    name: 'login',
    title: 'Авторизация',
    fields: {
      login: {
        label: 'Номер телефона',
        name: 'login',
        defaultValue: '',
        rule: Yup.string().required('Введите номер телефона'),
      },
      password: {
        label: 'Код из СМС',
        name: 'password',
        defaultValue: '',
        // rule: Yup.string().required('Введите код из СМС'),
        rule: Yup.string()
          .nullable()
          .when('login', {
            is: (val) => val && val.length && !first,
            then: Yup.string().nullable().required('Введите код из СМС'),
          }),
      },
    },
  };

  return (
    <div className="logo-background">
      <div className='App-logo'>
        <img src={LogoWhite} />
      </div>
      <Formik
        validateOnChange
        validateOnBlur
        initialValues={{
          login: formSchema.fields.login.defaultValue,
          password: formSchema.fields.password.defaultValue,
        }}
        validationSchema={Yup.object({
          login: formSchema.fields.login.rule,
          password: formSchema.fields.password.rule,
        })}

        // onSubmit={(values, { setSubmitting, setFieldError }) => {
        //   onSubmitHandler(role, values, setFieldError);
        //   setSubmitting(false);
        // }}
      >
        {({
            handleSubmit, errors, getFieldProps, touched, dirty, isValid, values, setFieldError,
          }) => (
          <div className={styles.container}>
            <Form
              className={styles.form}
              onSubmit={handleSubmit}
            >
              <h3 className={styles.form__header}>{formSchema.title}</h3>

              <div className={styles.form__groupField}>
                <Input
                  placeholder={formSchema.fields.login.label}
                  type="text"
                  size="xl"
                  variant="flushed"
                  prefix={<UsersOutline />}
                  {...getFieldProps('login')}
                />
                {touched.login && errors.login ? (
                  <div className={styles.form__groupFieldError}>{errors.login}</div>
                ) : null}
              </div>

              {!first && <div className={styles.form__groupField}>
                <Input
                  placeholder={formSchema.fields.password.label}
                  size="xl"
                  variant="flushed"
                  type="password"
                  {...getFieldProps('password')}
                />
                {touched.password && errors.password ? (
                  <div className={styles.form__groupFieldError}>{errors.password}</div>
                ) : null}
              </div>
              }

              {errors.server ? (
                <div className={styles.form__groupFieldError}>{errors.server}</div>
              ) : null}

              <Button
                onClick={() => {
                  if (first) {
                    setBtnLabel('Войти');
                    setFirst(false);
                    onSubmitHandler(values, setFieldError);
                  } else {onCodeHandler(values, setFieldError)}
                }}
                className={styles.form__submit}
                block
                isDisabled={!dirty || !isValid}
              >
                {btnLabel}
              </Button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;

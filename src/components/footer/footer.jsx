import React from "react";
import footer from "../../assets/footer.png"
import styles from "./footer.module.scss"
import vtbLogo from "../../assets/sberLogo.svg"
import vtbMail from "../../assets/mail.png"
import vtbPM from "../../assets/pm.png"
import vtbApple from "../../assets/apple.png"
import vtbInfo from "../../assets/info.png"
import vtbAPM from "../../assets/APM.png"
import vtbCall from "../../assets/call.png"
import cx from "classnames"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.support}>
                <div className={styles.supp}>
                    <span className={styles.sup}>КРУГЛОСУТОЧНАЯ ПОДДЕРЖКА</span>
                    <a href="tel:+78001002424" className={styles.tel}>8 (495) 500-55-50</a>
                </div>
                <div className={cx(styles.help, styles.pointer)}>
                    <img src={vtbMail} className={styles.icon} alt="vtbMail"/>
                    <a>
                        ЗАДАТЬ ВОПРОС
                    </a>
                </div>
                <div className={cx(styles.help, styles.pointer)}>
                    <img src={vtbInfo} className={styles.icon} alt="vtbInfo"/>
                    <a>
                        СПРАВКА
                    </a>
                </div>
                <div className={styles.pointer}>
                    <img src={vtbPM} className={styles.icon} alt="vtbPM"/>
                    <img src={vtbApple} className={styles.icon} alt="vtbApple"/>
                </div>
                <div>
                    <img src={vtbLogo} alt="vtblogo"/>
                </div>
            </div>
            <div className={styles.page}>
                <div>
                    <div className={cx(styles.help, styles.pointer, styles.phelp)}>
                        <a href="tel:+74955005550" className={styles.ftel}>8 495 500-55-50 или 900</a>
                        <span className={styles.fsup}>БЕСПЛАТНО ДЛЯ РЕГИОНОВ РОССИИ</span>
                    </div>
                    <div className={cx(styles.help, styles.pointer)}>
                        <a href="tel:+74955005550" className={styles.ftel}>+7 495 500-55-50</a>
                        <span className={styles.fsup}>ДЛЯ МОСКВЫ И ЗАГРАНИЦЫ</span>
                    </div>
                    </div>
                    <div className={styles.pointer}>
                        <img src={vtbCall} className={styles.ticon} alt="vtbCall"/>
                    </div>
                    <div className={styles.pointer}>
                        <img src={vtbAPM} className={styles.picon} alt="vtbAPM"/>
                    </div>
                </div>
            </div>
        );
};

export default Footer;

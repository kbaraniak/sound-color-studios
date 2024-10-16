import React from "react";
import Image from "next/image";
import 'animate.css';

import styles from "./Main.module.css"

const Main = () => {
    return (
        <main className={styles.main} id="realizations">
            <div className={`$ ${styles.section_right} ${styles.section}`}>
                <div className={`$ ${styles.border_red} ${styles.left_img}`}>
                    <Image className={styles.section_image} src="/static/main/pexels-pixabay-41162.jpg" height="450" width="450" alt="image1"></Image>
                </div>
                <div className={styles.right_text}>
                    <h1>Exploring Future</h1>
                    <p>Our work can even be seen already in space</p>
                </div>
            </div>
            <div className={`${styles.section_left} ${styles.section}`}>
                <div className={`$ ${styles.border_blue} ${styles.right_img}`}>
                    <Image className={styles.section_image} src="/static/main/pexels-rickyrecap-1683368.jpg" height="450" width="450" alt="image1"></Image>
                </div>
                <div className={styles.right_text}>
                    <h1>Capture your best adventure</h1>
                    <p>With, our service you will remember, your best moments</p>
                </div>
            </div>
            <div className={`${styles.section_right} ${styles.section}`}>
                <div className={`$ ${styles.border_green} ${styles.left_img}`}>
                    <Image className={styles.section_image} src="/static/main/7547748190_17aa9ed4bd_b.jpg" height="450" width="450" alt="image1"></Image>
                </div>
                <div className={styles.right_text}>
                    <h1>Even the biggest trusted us</h1>
                    <p>We took pictures for Paul Newman, Robert Williams and Rachel Bilson</p>
                </div>
            </div>
            <div className={`${styles.section_left} ${styles.section}`}>
                <div className={`$ ${styles.border_blue} ${styles.right_img}`}>
                    <Image className={styles.section_image} src="/static/main/pexels-rickyrecap-1683368.jpg" height="450" width="450" alt="image1"></Image>
                </div>
                <div className={styles.right_text}>
                    <h1>Do you want to get pictures as beautiful as others?</h1>
                    <p>With us, you certainly won't regret it. Contact us below</p>
                </div>
            </div>

        </main>
    )
}

export default Main;
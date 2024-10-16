import React from "react";
import Link from "next/link";
import 'animate.css';

import styles from "./Hero.module.css"

const Hero = () => {
    return (
        <div className={styles.hero_section}>
            <div className={styles.hero_col1}>
                <p className="animate__animated animate__bounce">Sound + Color Studios</p>
            </div>
            <div className={styles.hero_col2}>
                <p className="animate__animated animate__fadeInDown">Capturing life's greatest moments</p>
                <Link href="#realizations">
                    <button className="animate__animated animate__fadeInDown animate__delay-1s">
                        See Our Work
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Hero;
import React from 'react';
import styles from "./footer.module.css"
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <ul>
                <li>
                    <Link target='_blank' href={"https://www.linkedin.com/in/valentin-sonney-554a72250/"}>LinkedIn</Link>
                </li>
                <li>
                    <Link target='_blank' href={"https://github.com/versus10-prog"}>Github</Link>
                </li>
                <li>
                    <Link target='_blank' href={"mailto:valentin.sonney@gmail.com"}>Email</Link>
                </li>
            </ul>
            <p>&copy; 2024 Valentin Sonne
            {/* <Link href={"/api/auth/signin"}>y</Link> */}
            </p>
        </div>
    );
};

export default Footer;
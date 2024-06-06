import React from 'react';
import styles from "./footer.module.css"
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <ul>
                <li>
                    <Link target='_blank' href={"https://www.linkedin.com/in/thomas-biabiany-902950251/"}>LinkedIn</Link>
                </li>
                <li>
                    <Link target='_blank' href={"https://github.com/claquetteuuuh"}>Github</Link>
                </li>
                <li>
                    <Link target='_blank' href={"https://tryhackme.com/p/Claquetteuuuh"}>TryHackMe</Link>
                </li>
                <li>
                    <Link target='_blank' href={"mailto:th.biabiany@protonmail.com"}>Email</Link>
                </li>
            </ul>
            <p>&copy; 2024 Claquetteuuu<Link href={"/api/auth/signin"}>H</Link></p>
        </div>
    );
};

export default Footer;
'use client';

import React from 'react';
import styles from './Home.module.scss';
import Link from 'next/link';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to Job Tracker</h1>
            <div className={styles.buttonGroup}>
                <Link href="/auth/login">
                    <button>Login</button>
                </Link>
                <Link href="/auth/register">
                    <button>Register</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;

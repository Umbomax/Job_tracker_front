'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import JobForm from '../components/JobForm';
import styles from './Home.module.scss';

const Home: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen((prev) => !prev);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/auth/login">
                    <button>Login</button>
                </Link>
                <Link href="/auth/register">
                    <button>Register</button>
                </Link>
                <button onClick={toggleModal} className={styles.addButton}>
                    Add Job
                </button>
            </header>

            <main>
                <h1 className={styles.title}>Welcome to Job Tracker</h1>
                <p className={styles.description}>Track your job applications easily.</p>
            </main>

            {isModalOpen && (
                <div className={styles.modalBackdrop} onClick={toggleModal}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>Add a Job</h2>
                        <JobForm />
                        <button className={styles.closeButton} onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;

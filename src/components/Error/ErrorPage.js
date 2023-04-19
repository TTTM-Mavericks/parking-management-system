import React from 'react';
import { css } from '@emotion/react';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div css={styles.container}>
            <div css={styles.icon}>
                <FaExclamationTriangle />
            </div>
            <h1 css={styles.heading}>Oops! Something went wrong.</h1>
            <p css={styles.message}>We're sorry, but we can't find the page you're looking for.</p>
            <button css={styles.button}>Go to homepage</button>
        </div>
    );
};

const styles = {
    container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 2rem;
    background-color: #fff;
    color: #333;
  `,
    icon: css`
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #f39c12;
  `,
    heading: css`
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  `,
    message: css`
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-align: center;
  `,
    button: css`
    padding: 0.8rem 2rem;
    border: none;
    background-color: #f39c12;
    color: #fff;
    font-size: 1rem;
    border-radius: 0.3rem;
    cursor: pointer;

    &:hover {
      background-color: #e67e22;
    }
  `,
};

export default ErrorPage;

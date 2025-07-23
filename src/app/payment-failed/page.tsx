import Link from "next/link";
import Image from "next/image";
import styles from "./payment-failed.module.css";
import CrossRed from "../../../public/svgs/CrossRed.svg";

export default function PaymentFailed() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.iconContainer}>
                    <Image
                        src={CrossRed}
                        alt="Failed"
                        width={64}
                        height={64}
                        className={styles.errorIcon}
                    />
                </div>

                <h1 className={styles.title}>Payment Failed</h1>

                <p className={styles.message}>
                    We couldn&apos;t process your payment. This might be due to
                    insufficient funds, an expired card, or a network issue.
                </p>

                <p className={styles.subMessage}>
                    Please check your payment information and try again.
                </p>

                <div className={styles.buttonContainer}>
                    <Link href="/checkout" className={styles.retryButton}>
                        Try Again
                    </Link>
                    <Link href="/" className={styles.homeButton}>
                        Go to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

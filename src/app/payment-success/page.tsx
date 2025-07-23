import Link from "next/link";
import Image from "next/image";
import styles from "./payment-success.module.css";
import Check from "../../../public/svgs/Check.svg";

export default function PaymentSuccess() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.iconContainer}>
                    <Image
                        src={Check}
                        alt="Success"
                        width={64}
                        height={64}
                        className={styles.successIcon}
                    />
                </div>

                <h1 className={styles.title}>Payment Successful!</h1>

                <p className={styles.message}>
                    Thank you for your subscription. Your payment has been
                    processed successfully. A confirmation email has been sent
                    to your registered email address.
                </p>

                <p className={styles.subMessage}>
                    You can now enjoy all the premium features of Omniplex.
                </p>

                <Link href="/" className={styles.homeButton}>
                    Go to Home
                </Link>
            </div>
        </div>
    );
}

import { stripe } from "@/utils/stipe";
import { redirect } from "next/navigation";

interface ReturnPageProps {
    searchParams: Promise<{ session_id?: string }>;
}

export default async function Return({ searchParams }: ReturnPageProps) {
    const { session_id } = await searchParams;

    if (!session_id) {
        return redirect("/payment-failed");
    }

    try {
        const session = await stripe.checkout.sessions.retrieve(session_id, {
            expand: ["line_items", "payment_intent"],
        });

        const { status } = session;

        if (status === "open") {
            return redirect("/checkout");
        }

        if (status === "complete") {
            return redirect("/payment-success");
        }

        return redirect("/payment-failed");
    } catch (error) {
        console.error("Error retrieving checkout session:", error);
        return redirect("/payment-failed");
    }
}

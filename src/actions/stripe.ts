'use server'

import { stripe } from '@/utils/stipe'
import { headers } from 'next/headers'


export async function fetchClientSecret() {
    const origin = (await headers()).get('origin')

    const session = await stripe.checkout.sessions.create({
        ui_mode: 'embedded',
        billing_address_collection: 'auto',
        shipping_address_collection: {
            allowed_countries: ['IN', 'US', 'CA'],
        },
        line_items: [
            {
                price: 'price_1RnlHDQBgqxwhpFDOtdbwYC9',
                quantity: 1
            }
        ],
        mode: 'subscription',
        return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
        custom_fields: [],
        metadata: {
            theme: 'dark'
        }
    })

    return session.client_secret
}

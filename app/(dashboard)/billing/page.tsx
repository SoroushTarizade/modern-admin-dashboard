import {
    FiCreditCard,
    FiCheck,
    FiCalendar,
    FiDownload,
    FiArrowUpRight,
} from "react-icons/fi";

export default function BillingPage() {
    return (
        <div className="w-full max-w-6xl mx-auto space-y-6">

            {/* Header */}
            <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold">
                    Billing
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Manage your subscription, payment method and invoices.
                </p>
            </div>

            {/* Current Plan */}
            <section className="rounded-2xl border border-border bg-card overflow-hidden">

                <div className="p-5 sm:p-6 border-b border-border">
                    <div className="flex items-center gap-3">

                        <div className="
                            w-10 h-10
                            rounded-xl
                            bg-primary/10
                            text-primary
                            flex
                            items-center
                            justify-center
                        ">
                            <FiCreditCard size={20} />
                        </div>

                        <div>
                            <h2 className="font-bold text-lg">
                                Current Plan
                            </h2>

                            <p className="text-sm text-muted-foreground">
                                Your active subscription
                            </p>
                        </div>

                    </div>
                </div>

                <div className="p-5 sm:p-6">

                    <div className="
                        flex
                        flex-col
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                        gap-6
                    ">

                        <div>
                            <div className="flex items-center gap-3">

                                <h3 className="text-2xl font-extrabold">
                                    Pro Plan
                                </h3>

                                <span className="
                                    px-3
                                    py-1
                                    rounded-full
                                    bg-green-500/10
                                    text-green-600
                                    dark:text-green-400
                                    text-xs
                                    font-bold
                                ">
                                    Active
                                </span>

                            </div>

                            <p className="
                                mt-2
                                text-sm
                                text-muted-foreground
                            ">
                                Everything you need to manage your dashboard.
                            </p>

                            <div className="
                                mt-4
                                flex
                                items-center
                                gap-2
                                text-sm
                                text-muted-foreground
                            ">
                                <FiCalendar size={16} />

                                Renews on September 10, 2026
                            </div>
                        </div>

                        <div className="text-left lg:text-right">

                            <p className="text-3xl font-extrabold">
                                $29
                            </p>

                            <p className="
                                text-sm
                                text-muted-foreground
                            ">
                                per month
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Plan Features */}
            <section className="rounded-2xl border border-border bg-card overflow-hidden">

                <div className="p-5 sm:p-6 border-b border-border">

                    <h2 className="font-bold text-lg">
                        Plan Features
                    </h2>

                    <p className="
                        mt-1
                        text-sm
                        text-muted-foreground
                    ">
                        Features included in your current plan.
                    </p>

                </div>

                <div className="
                    p-5
                    sm:p-6
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-4
                ">

                    {[
                        "Unlimited dashboard access",
                        "Advanced analytics",
                        "Priority support",
                        "Unlimited products",
                        "Team management",
                        "Export reports",
                    ].map((feature) => (

                        <div
                            key={feature}
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                bg-secondary/50
                                px-4
                                py-3
                            "
                        >

                            <div className="
                                w-7
                                h-7
                                shrink-0
                                rounded-full
                                bg-green-500/10
                                text-green-600
                                dark:text-green-400
                                flex
                                items-center
                                justify-center
                            ">
                                <FiCheck size={15} />
                            </div>

                            <span className="text-sm font-medium">
                                {feature}
                            </span>

                        </div>

                    ))}

                </div>

            </section>

            {/* Payment Method */}
            <section className="rounded-2xl border border-border bg-card overflow-hidden">

                <div className="
                    p-5
                    sm:p-6
                    border-b
                    border-border
                ">

                    <h2 className="font-bold text-lg">
                        Payment Method
                    </h2>

                    <p className="
                        mt-1
                        text-sm
                        text-muted-foreground
                    ">
                        Your default payment method.
                    </p>

                </div>

                <div className="p-5 sm:p-6">

                    <div className="
                        flex
                        flex-col
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        gap-4
                    ">

                        <div className="flex items-center gap-4">

                            <div className="
                                w-12
                                h-12
                                rounded-xl
                                bg-secondary
                                flex
                                items-center
                                justify-center
                                font-bold
                            ">
                                VISA
                            </div>

                            <div>

                                <p className="font-semibold">
                                    Visa ending in 4242
                                </p>

                                <p className="
                                    text-sm
                                    text-muted-foreground
                                ">
                                    Expires 08/28
                                </p>

                            </div>

                        </div>

                        <button
                            type="button"
                            className="
                                h-10
                                px-4
                                rounded-xl
                                border
                                border-border
                                hover:bg-secondary
                                transition-all
                                text-sm
                                font-semibold
                            "
                        >
                            Update
                        </button>

                    </div>

                </div>

            </section>

            {/* Invoice History */}
            <section className="rounded-2xl border border-border bg-card overflow-hidden">

                <div className="
                    p-5
                    sm:p-6
                    border-b
                    border-border
                ">

                    <h2 className="font-bold text-lg">
                        Invoice History
                    </h2>

                    <p className="
                        mt-1
                        text-sm
                        text-muted-foreground
                    ">
                        View and download your previous invoices.
                    </p>

                </div>

                <div className="divide-y divide-border">

                    {[
                        {
                            date: "Aug 10, 2026",
                            amount: "$29.00",
                            status: "Paid",
                        },
                        {
                            date: "Jul 10, 2026",
                            amount: "$29.00",
                            status: "Paid",
                        },
                        {
                            date: "Jun 10, 2026",
                            amount: "$29.00",
                            status: "Paid",
                        },
                    ].map((invoice) => (

                        <div
                            key={invoice.date}
                            className="
                                p-5
                                sm:px-6
                                flex
                                flex-col
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                                gap-4
                            "
                        >

                            <div>

                                <p className="font-semibold">
                                    Pro Plan
                                </p>

                                <p className="
                                    text-sm
                                    text-muted-foreground
                                    mt-1
                                ">
                                    {invoice.date}
                                </p>

                            </div>

                            <div className="
                                flex
                                items-center
                                justify-between
                                sm:justify-end
                                gap-5
                            ">

                                <div className="text-right">

                                    <p className="font-semibold">
                                        {invoice.amount}
                                    </p>

                                    <span className="
                                        text-xs
                                        text-green-600
                                        dark:text-green-400
                                        font-semibold
                                    ">
                                        {invoice.status}
                                    </span>

                                </div>

                                <button
                                    type="button"
                                    aria-label="Download invoice"
                                    className="
                                        w-10
                                        h-10
                                        rounded-xl
                                        border
                                        border-border
                                        flex
                                        items-center
                                        justify-center
                                        hover:bg-secondary
                                        transition-all
                                    "
                                >
                                    <FiDownload size={17} />
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

            {/* Upgrade */}
            <section className="
                rounded-2xl
                border
                border-primary/20
                bg-primary/5
                overflow-hidden
            ">

                <div className="
                    p-5
                    sm:p-6
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-5
                ">

                    <div>

                        <h2 className="font-bold text-lg">
                            Need more features?
                        </h2>

                        <p className="
                            mt-1
                            text-sm
                            text-muted-foreground
                        ">
                            Upgrade your plan to unlock more powerful tools.
                        </p>

                    </div>

                    <button
                        type="button"
                        className="
                            h-11
                            px-5
                            rounded-xl
                            bg-primary
                            text-primary-foreground
                            flex
                            items-center
                            justify-center
                            gap-2
                            text-sm
                            font-semibold
                            hover:opacity-90
                            active:scale-95
                            transition-all
                        "
                    >
                        Upgrade Plan
                        <FiArrowUpRight size={17} />
                    </button>

                </div>

            </section>

        </div>
    );
}
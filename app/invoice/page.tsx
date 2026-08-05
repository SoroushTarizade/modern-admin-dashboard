"use client";

import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/sideBar";

import InvoiceHeader from "@/components/invoice/InvoiceHeader";
import InvoiceInfo from "@/components/invoice/InvoiceInfo";
import InvoiceTable from "@/components/invoice/InvoiceTable";
import InvoiceSummary from "@/components/invoice/InvoiceSummary";
import SendInvoiceButton from "@/components/invoice/SendInvoiceButton";
import EmptyInvoice from "@/components/invoice/EmptyInvoice";

import useInvoice from "@/hooks/useInvoice";

export default function Page() {
  const { invoice, sendInvoice } = useInvoice();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />

      <Header title="Invoice" />

      <main
        className="
          pt-[98px]
          px-4
          sm:px-6
          lg:px-8
          md:ml-[220px]
          lg:ml-[240px]
        "
      >
        <div className="mx-auto w-full max-w-7xl">
          {invoice ? (
            <div className="rounded-3xl bg-card p-5 shadow-sm sm:p-6 lg:p-8">
              <InvoiceHeader
                invoiceNumber={invoice.invoiceNumber}
                status={invoice.status}
              />

              <InvoiceInfo invoice={invoice} />

              <InvoiceTable items={invoice.items} />

              <InvoiceSummary invoice={invoice} />

              <SendInvoiceButton
                onClick={sendInvoice}
              />
            </div>
          ) : (
            <EmptyInvoice />
          )}
        </div>
      </main>
    </div>
  );
}
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
  const {
    invoice,
    sendInvoice,
  } = useInvoice();

  return (
    <div className="bg-background text-foreground flex justify-center">

      <div className="w-[1440px] flex">

        <Sidebar />

        <div className="flex-1">

          <Header />

          <div className="px-10 py-10">

            {invoice ? (
              <div className="bg-card rounded-3xl p-8 shadow-sm">

                <InvoiceHeader
                  invoiceNumber={invoice.invoiceNumber}
                  status={invoice.status}
                />

                <InvoiceInfo
                  invoice={invoice}
                />

                <InvoiceTable
                  items={invoice.items}
                />

                <InvoiceSummary
                  invoice={invoice}
                />

                <SendInvoiceButton
                  onClick={sendInvoice}
                />

              </div>
            ) : (
              <EmptyInvoice />
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
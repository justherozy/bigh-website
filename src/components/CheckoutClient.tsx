"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, siteConfig } from "@/lib/site-config";
import { toggleBag, useCollectionsStore } from "@/lib/collections-store";
import { MailIcon, WhatsAppIcon } from "@/components/icons";

type ContactMethod = "whatsapp" | "email";

export default function CheckoutClient() {
  const { bag } = useCollectionsStore();
  const items = products.filter((product) => bag.includes(product.slug));

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [method, setMethod] = useState<ContactMethod>("whatsapp");

  function buildMessage() {
    const lines = [
      "Hi BigH, I'd like to place an order.",
      "",
      "Items:",
      ...items.map((item) => `- ${item.name}`),
      "",
      `Name: ${name}`,
      `Phone / WhatsApp: ${phone}`,
      `Email: ${email}`,
      `Delivery address: ${address}`,
      notes ? `Notes / measurements: ${notes}` : null,
    ].filter((line): line is string => line !== null);
    return lines.join("\n");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (items.length === 0) return;
    const message = buildMessage();

    if (method === "whatsapp") {
      window.open(
        `https://wa.me/${siteConfig.whatsapp[0].number}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      const subject = encodeURIComponent("New order request");
      window.location.href = `mailto:${siteConfig.brands[0].email}?subject=${subject}&body=${encodeURIComponent(message)}`;
    }
  }

  if (items.length === 0) {
    return (
      <section className="bg-background px-6 pb-24 pt-32 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Checkout
          </p>
          <h1 className="mt-3 text-3xl tracking-tight text-foreground sm:text-4xl">
            Your Bag Is Empty
          </h1>
          <p className="mt-4 text-foreground/70">
            Add a collection you&apos;re interested in and it will show up
            here, ready to send to us as an order request.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center px-7 py-3 text-xs uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#141414" }}
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background px-6 pb-24 pt-32 sm:px-10 sm:pt-40">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          Checkout
        </p>
        <h1 className="mt-3 text-3xl tracking-tight text-foreground sm:text-4xl">
          Review &amp; Request Your Order
        </h1>
        <p className="mt-4 max-w-2xl text-foreground/70">
          BigH pieces are made to order, so there&apos;s no card payment
          here. Review your bag, tell us how to reach you, and we&apos;ll
          confirm fabric, fit, and pricing directly before your order goes
          into production.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">
              Your Bag ({items.length})
            </p>
            <ul className="flex flex-col divide-y divide-line">
              {items.map((item) => (
                <li key={item.slug} className="flex items-center gap-4 py-4">
                  <Link
                    href={`/collections/${item.slug}`}
                    className="relative h-20 w-16 shrink-0 overflow-hidden bg-surface-muted"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </Link>
                  <div className="flex-1">
                    <Link
                      href={`/collections/${item.slug}`}
                      className="text-sm text-foreground hover:underline"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs uppercase tracking-widest text-muted">
                      {item.category}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleBag(item.slug)}
                    className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="checkout-name"
                className="text-xs uppercase tracking-[0.2em] text-foreground"
              >
                Full Name *
              </label>
              <input
                id="checkout-name"
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="border-b border-line bg-transparent py-2 text-sm text-foreground focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="checkout-phone"
                className="text-xs uppercase tracking-[0.2em] text-foreground"
              >
                Phone / WhatsApp Number *
              </label>
              <input
                id="checkout-phone"
                type="tel"
                required
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="border-b border-line bg-transparent py-2 text-sm text-foreground focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="checkout-email"
                className="text-xs uppercase tracking-[0.2em] text-foreground"
              >
                Email *
              </label>
              <input
                id="checkout-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="border-b border-line bg-transparent py-2 text-sm text-foreground focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="checkout-address"
                className="text-xs uppercase tracking-[0.2em] text-foreground"
              >
                Delivery Address *
              </label>
              <input
                id="checkout-address"
                type="text"
                required
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="Street, city, country"
                className="border-b border-line bg-transparent py-2 text-sm text-foreground placeholder:text-muted focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="checkout-notes"
                className="text-xs uppercase tracking-[0.2em] text-foreground"
              >
                Notes / Measurements
              </label>
              <textarea
                id="checkout-notes"
                rows={3}
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="Size, colour preference, measurements, or anything else we should know"
                className="border-b border-line bg-transparent py-2 text-sm text-foreground placeholder:text-muted focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                Send This Order Request Via
              </p>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input
                    type="radio"
                    name="method"
                    checked={method === "whatsapp"}
                    onChange={() => setMethod("whatsapp")}
                  />
                  WhatsApp
                </label>
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input
                    type="radio"
                    name="method"
                    checked={method === "email"}
                    onChange={() => setMethod("email")}
                  />
                  Email
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90"
            >
              {method === "whatsapp" ? (
                <WhatsAppIcon className="h-4 w-4" />
              ) : (
                <MailIcon className="h-4 w-4" />
              )}
              Send Order Request
            </button>
            <p className="text-xs leading-relaxed text-muted">
              This sends your bag and details to BigH — it does not take
              payment. We&apos;ll confirm pricing and next steps with you
              directly.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect, useRef, type ReactNode } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Receipt,
  QrCode,
  ClipboardList,
  Package,
  Users,
  BarChart3,
  Settings,
  ChefHat,
  ArrowRight,
  Menu,
  X,
  Check,
  Scan,
  Utensils,
  Shield,
  Clock,
  Zap,
  TrendingUp,
  Layers,
  Calendar,
  CalendarDays,
  ChevronRight,
  Printer,
  ShoppingBag,
  AlertTriangle,
  CheckCircle2,
  Minus,
  Plus,
  CreditCard,
  TabletSmartphone,
  MessageSquare,
} from "lucide-react";
import { useNavigate } from "react-router";

// ─── Animation helpers ─────────────────────────────────────────────
const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: easeOut },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

function AnimateSection({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0F0E]/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F5C542]">
              <Utensils className="w-4 h-4 text-[#0D0F0E]" />
            </div>
            <span className="font-serif text-xl font-semibold tracking-tight text-[#F5F5F0]">
              ReSTRA System
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#F5F5F0]/60 hover:text-[#F5F5F0] transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#F5C542] text-[#0D0F0E] rounded-lg hover:bg-[#F5C542]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#F5C542]/10"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              className="md:hidden text-[#F5F5F0]/70 hover:text-[#F5F5F0] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D0F0E]/98 backdrop-blur-lg border-t border-white/5 overflow-hidden"
          >
            <div className="px-5 py-6 space-y-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-[#F5F5F0]/70 hover:text-[#F5F5F0] hover:bg-white/5 rounded-lg transition-colors text-base"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium bg-[#F5C542] text-[#0D0F0E] rounded-lg hover:bg-[#F5C542]/90 transition-all"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────
function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0F0E]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(245,197,66,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,66,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Top-right accent glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F5C542]/[0.04] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#22D3EE]/[0.03] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 rounded-full mb-6">
                <Zap className="w-3 h-3" />
                Restaurant management, unified
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight text-[#F5F5F0]"
            >
              Run the restaurant,{'
'}              <span className="text-[#F5C542]">not the paperwork.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg text-[#F5F5F0]/60 leading-relaxed max-w-lg"
            >
              POS, QR ordering, billing, inventory, order tracking, and staff
              management — all in one system built for the way restaurants actually
              operate.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold bg-[#F5C542] text-[#0D0F0E] rounded-lg hover:bg-[#F5C542]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#F5C542]/15 hover:-translate-y-0.5"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#F5F5F0]/70 border border-[#F5F5F0]/10 rounded-lg hover:border-[#F5F5F0]/20 hover:text-[#F5F5F0] transition-all duration-200"
              >
                Message Us
              </a>
            </motion.div>

            {/* Trust markers */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-12 flex items-center gap-6 text-xs text-[#F5F5F0]/40"
            >
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#22D3EE]" />
                Role-based access
              </span>
              <span className="w-px h-3 bg-[#F5F5F0]/10" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#22D3EE]" />
                Real-time tracking
              </span>
              <span className="w-px h-3 bg-[#F5F5F0]/10" />
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#22D3EE]" />
                One system
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Asymmetric restaurant UI composition */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}
            className="relative hidden lg:block"
          >
            {/* Main POS Interface */}
            <motion.div
              variants={slideRight}
              className="relative bg-[#151817] border border-white/[0.06] rounded-xl overflow-hidden shadow-2xl shadow-black/40"
            >
              {/* POS header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-[#22D3EE]" />
                  <span className="text-xs font-medium text-[#F5F5F0]/80">POS Terminal — Table 7</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-order-pulse" />
                  <span className="text-[10px] text-[#F5F5F0]/40">Active</span>
                </div>
              </div>

              {/* Order items */}
              <div className="p-4 space-y-2">
                {[
                  { name: "Grilled Salmon", qty: 2, price: "24.00", cat: "Mains" },
                  { name: "Caesar Salad", qty: 1, price: "12.50", cat: "Starters" },
                  { name: "Sparkling Water", qty: 3, price: "4.00", cat: "Drinks" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 px-3 bg-white/[0.02] rounded-lg border border-white/[0.03]">
                    <div className="flex items-center gap-3">
                      <span className="w-1 h-6 rounded-full bg-[#22D3EE]/60" />
                      <div>
                        <p className="text-sm font-medium text-[#F5F5F0]/90">{item.name}</p>
                        <p className="text-[10px] text-[#F5F5F0]/30">{item.cat}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-[#F5F5F0]/40">
                        <Minus className="w-3 h-3" />
                        <span className="text-xs font-medium text-[#F5F5F0]/70 w-4 text-center">{item.qty}</span>
                        <Plus className="w-3 h-3" />
                      </div>
                      <span className="text-sm font-medium text-[#F5F5F0]/80 w-16 text-right">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* POS totals */}
              <div className="px-4 pb-4">
                <div className="border-t border-white/[0.06] pt-3 space-y-1.5">
                  <div className="flex justify-between text-xs text-[#F5F5F0]/40">
                    <span>Subtotal</span>
                    <span>$68.50</span>
                  </div>
                  <div className="flex justify-between text-xs text-[#F5F5F0]/40">
                    <span>Tax (8%)</span>
                    <span>$5.48</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold text-[#F5F5F0] pt-1.5 border-t border-white/[0.06]">
                    <span>Total</span>
                    <span className="text-[#F5C542]">$73.98</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#F5C542] text-[#0D0F0E] text-xs font-semibold rounded-lg">
                    <CreditCard className="w-3.5 h-3.5" />
                    Pay Now
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/[0.04] text-[#F5F5F0]/60 text-xs font-medium rounded-lg border border-white/[0.06] hover:bg-white/[0.06] transition-colors">
                    <Printer className="w-3.5 h-3.5" />
                    Print
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Floating: Order Status */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="absolute -left-8 top-12 w-44 bg-[#1C201E] border border-white/[0.06] rounded-lg p-3 shadow-xl shadow-black/30"
            >
              <div className="flex items-center gap-2 mb-2">
                <ClipboardList className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span className="text-[10px] font-medium text-[#F5F5F0]/70">Order #142</span>
              </div>
              <div className="space-y-1.5">
                {["New", "Preparing", "Ready"].map((s, i) => (
                  <div key={s} className="flex items-center gap-2">
                    {i < 2 ? (
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <div className="w-3 h-3 rounded-full border-2 border-[#F5C542] animate-order-pulse" />
                    )}
                    <span className={`text-[10px] ${i === 2 ? "text-[#F5C542] font-medium" : "text-[#F5F5F0]/30 line-through"}`}>
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating: QR Order */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="absolute -right-4 bottom-28 w-48 bg-[#1C201E] border border-white/[0.06] rounded-lg p-3 shadow-xl shadow-black/30"
            >
              <div className="flex items-center gap-2 mb-2">
                <QrCode className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span className="text-[10px] font-medium text-[#F5F5F0]/70">QR Order — Table 3</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 bg-[#F5C542]/10 rounded-md">
                <ShoppingBag className="w-3 h-3 text-[#F5C542]" />
                <span className="text-[10px] text-[#F5C542] font-medium">2 items incoming</span>
              </div>
            </motion.div>

            {/* Floating: Inventory Alert */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="absolute -left-6 bottom-4 w-40 bg-[#1C201E] border border-white/[0.06] rounded-lg p-3 shadow-xl shadow-black/30"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Package className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span className="text-[10px] font-medium text-[#F5F5F0]/70">Inventory</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-3 h-3 text-[#F5C542]" />
                <span className="text-[10px] text-[#F5F5F0]/50">Salmon fillet — low</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Connected Ecosystem ───────────────────────────────────────────
function ConnectedSection() {
  const steps = [
    { icon: Monitor, label: "POS", color: "#22D3EE" },
    { icon: ClipboardList, label: "Orders", color: "#22D3EE" },
    { icon: ChefHat, label: "Kitchen", color: "#F5C542" },
    { icon: Package, label: "Inventory", color: "#22D3EE" },
    { icon: Receipt, label: "Billing", color: "#F5C542" },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#0D0F0E] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <AnimateSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#22D3EE] bg-[#22D3EE]/10 border border-[#22D3EE]/20 rounded-full mb-4">
            <Layers className="w-3 h-3" />
            Connected workflow
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F5F0] tracking-tight">
            Every part of the operation, connected.
          </h2>
          <p className="mt-4 text-lg text-[#F5F5F0]/50 max-w-2xl mx-auto">
            One action flows into the next. No duplicate entry. No disconnected tools.
            Just one restaurant, running as one system.
          </p>
        </AnimateSection>

        {/* Workflow diagram */}
        <AnimateSection>
          <div className="relative max-w-4xl mx-auto">
            {/* Connector lines */}
            <div className="hidden md:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 px-16 items-center z-0">
              {steps.slice(0, -1).map((_, i) => (
                <div key={i} className="flex-1 h-px mx-1">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="h-full workflow-line origin-left"
                  />
                </div>
              ))}
            </div>

            {/* Step nodes */}
            <div className="grid grid-cols-5 gap-3 md:gap-0 relative z-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center border border-white/[0.06] bg-[#151817] transition-all duration-300 hover:scale-105 hover:border-white/[0.12]"
                      style={{ boxShadow: `0 0 30px ${step.color}10` }}
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: step.color }} />
                    </div>
                    <span className="mt-3 text-xs md:text-sm font-medium text-[#F5F5F0]/70">
                      {step.label}
                    </span>
                    {i < steps.length - 1 && (
                      <ChevronRight className="hidden md:block absolute top-1/2 -translate-y-1/2 text-[#F5C542]/30 w-5 h-5" style={{ left: `${(i + 1) * 20 - 2}%` }} />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimateSection>

        {/* Mobile connector arrows */}
        <div className="flex md:hidden justify-center mt-4 text-[#F5C542]/30">
          <ArrowRight className="w-5 h-5" />
        </div>

        {/* Description block */}
        <AnimateSection className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-base text-[#F5F5F0]/50 leading-relaxed">
            A guest scans a QR code. The order reaches the kitchen. Inventory updates.
            The bill prints when they are ready. No one switches apps, re-enters data,
            or keeps track of separate tools.
          </p>
        </AnimateSection>
      </div>
    </section>
  );
}

// ─── Feature: POS & Billing ────────────────────────────────────────
function POSBillingSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#151817]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <AnimateSection>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-[#22D3EE] mb-4">
              <Monitor className="w-3.5 h-3.5" />
              POS & Billing
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F5F5F0] tracking-tight leading-tight">
              Take the order.{" "}
              <span className="text-[#F5C542]">Bill it.</span>
            </h2>
            <p className="mt-4 text-[#F5F5F0]/50 leading-relaxed">
              A POS that works the way your staff does. Select a table, add items
              with quantities, apply discounts, calculate tax, and close the ticket —
              all from one screen.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Table selection and order management",
                "Discounts, tax, and payment tracking",
                "One-click bill printing",
                "Split and merged billing support",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#F5C542] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#F5F5F0]/60">{item}</span>
                </div>
              ))}
            </div>
          </AnimateSection>

          {/* Visual — POS Interface */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
          >
            <div className="bg-[#0D0F0E] border border-white/[0.06] rounded-xl overflow-hidden shadow-2xl shadow-black/50">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F5C542]" />
                  <span className="text-sm font-medium text-[#F5F5F0]/80">POS — New Order</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-[#F5F5F0]/30">
                  <span>Table 12</span>
                  <span>•</span>
                  <span>Server: Alex</span>
                </div>
              </div>

              {/* Menu items */}
              <div className="p-5">
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {[
                    { name: "Espresso", cat: "Drinks", price: "4.50" },
                    { name: "Pasta Carbonara", cat: "Mains", price: "18.00" },
                    { name: "Bruschetta", cat: "Starters", price: "9.50" },
                    { name: "Tiramisu", cat: "Desserts", price: "8.00" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 bg-white/[0.02] rounded-lg border border-white/[0.04] hover:border-[#22D3EE]/20 transition-colors cursor-pointer">
                      <div>
                        <p className="text-xs font-medium text-[#F5F5F0]/80">{item.name}</p>
                        <p className="text-[10px] text-[#F5F5F0]/30">{item.cat}</p>
                      </div>
                      <span className="text-[10px] font-medium text-[#F5C542]">${item.price}</span>
                    </div>
                  ))}
                </div>

                {/* Current order */}
                <div className="border-t border-white/[0.06] pt-4">
                  <p className="text-[10px] font-medium text-[#F5F5F0]/40 uppercase tracking-wider mb-3">Current Order</p>
                  <div className="space-y-2">
                    {[
                      { name: "Pasta Carbonara", qty: 2, price: "36.00" },
                      { name: "Bruschetta", qty: 1, price: "9.50" },
                      { name: "Sparkling Water", qty: 2, price: "8.00" },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between text-xs">
                        <span className="text-[#F5F5F0]/60">{item.qty}× {item.name}</span>
                        <span className="text-[#F5F5F0]/50">${item.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/[0.06] space-y-1">
                    <div className="flex justify-between text-xs text-[#F5F5F0]/40">
                      <span>Subtotal</span><span>$53.50</span>
                    </div>
                    <div className="flex justify-between text-xs text-[#F5F5F0]/40">
                      <span>Tax</span><span>$4.28</span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold pt-1">
                      <span className="text-[#F5F5F0]">Total</span>
                      <span className="text-[#F5C542]">$57.78</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#F5C542] text-[#0D0F0E] text-xs font-semibold rounded-lg">
                      <Receipt className="w-3.5 h-3.5" />
                      Print Bill
                    </button>
                    <button className="flex items-center justify-center px-4 py-2.5 bg-white/[0.04] text-[#F5F5F0]/60 text-xs font-medium rounded-lg border border-white/[0.06]">
                      <CreditCard className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Feature: QR Ordering ──────────────────────────────────────────
function QROrderingSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0D0F0E]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Phone mockup */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
            className="order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-[280px]">
              {/* Phone frame */}
              <div className="bg-[#151817] border-2 border-white/[0.08] rounded-[2rem] p-2 shadow-2xl shadow-black/60">
                <div className="bg-[#0D0F0E] rounded-[1.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-5 pt-3 pb-1">
                    <span className="text-[10px] text-[#F5F5F0]/30">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-1.5 rounded-sm bg-[#F5F5F0]/20" />
                      <div className="w-3 h-1.5 rounded-sm bg-[#F5F5F0]/20" />
                    </div>
                  </div>

                  {/* QR Scan screen */}
                  <div className="px-4 pt-3 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-[#F5F5F0]/70">Scan QR to Order</span>
                      <Scan className="w-4 h-4 text-[#22D3EE]" />
                    </div>

                    {/* QR frame */}
                    <div className="relative w-36 h-36 mx-auto mb-4">
                      <div className="absolute inset-0 border-2 border-[#22D3EE]/30 rounded-xl" />
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#22D3EE] rounded-tl-lg" />
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#22D3EE] rounded-tr-lg" />
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#22D3EE] rounded-bl-lg" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#22D3EE] rounded-br-lg" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <QrCode className="w-12 h-12 text-[#22D3EE]/40" />
                      </div>
                    </div>

                    <p className="text-center text-[10px] text-[#F5F5F0]/30 mb-4">
                      Point your camera at the QR code on your table
                    </p>

                    {/* Sample menu items */}
                    <div className="space-y-2">
                      {[
                        { name: "House Special Pasta", price: "$16.00", tag: "Popular" },
                        { name: "Grilled Chicken", price: "$14.50", tag: "" },
                        { name: "Fresh Lemonade", price: "$4.00", tag: "" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-2.5 bg-white/[0.03] rounded-lg border border-white/[0.04]">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-md bg-white/[0.04] flex items-center justify-center">
                              <Utensils className="w-3.5 h-3.5 text-[#22D3EE]/60" />
                            </div>
                            <div>
                              <p className="text-[11px] font-medium text-[#F5F5F0]/80">{item.name}</p>
                              {item.tag && (
                                <span className="text-[9px] text-[#F5C542] bg-[#F5C542]/10 px-1.5 py-0.5 rounded-full">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                          </div>
                          <span className="text-[11px] font-medium text-[#F5F5F0]/60">{item.price}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full mt-4 py-2.5 bg-[#F5C542] text-[#0D0F0E] text-xs font-semibold rounded-lg">
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <AnimateSection>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-[#22D3EE] mb-4">
                <QrCode className="w-3.5 h-3.5" />
                QR Ordering
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F5F5F0] tracking-tight leading-tight">
                Scan. Browse.{" "}
                <span className="text-[#F5C542]">Order.</span>
              </h2>
              <p className="mt-4 text-[#F5F5F0]/50 leading-relaxed">
                Guests scan a QR code at their table, browse the menu, and place
                their order — straight to the kitchen. No waiting for a server. No
                order mix-ups.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {[
                  { icon: Scan, text: "Instant table-to-kitchen connection" },
                  { icon: TabletSmartphone, text: "Works on any phone — no app download" },
                  { icon: ChefHat, text: "Orders arrive in the kitchen in real time" },
                  { icon: Receipt, text: "Bill generated automatically" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-[#22D3EE]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-[#22D3EE]" />
                    </div>
                    <span className="text-sm text-[#F5F5F0]/60">{text}</span>
                  </div>
                ))}
              </div>
            </AnimateSection>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Feature: Order Tracking ───────────────────────────────────────
function OrderTrackingSection() {
  const stages = [
    { label: "New", icon: ClipboardList, color: "text-[#22D3EE]", bg: "bg-[#22D3EE]/10", done: true },
    { label: "Preparing", icon: ChefHat, color: "text-[#F5C542]", bg: "bg-[#F5C542]/10", done: true },
    { label: "Ready", icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-400/10", done: true, active: true },
    { label: "Served", icon: Utensils, color: "text-[#F5F5F0]/30", bg: "bg-white/[0.03]", done: false },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#151817]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <AnimateSection>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-[#22D3EE] mb-4">
              <ClipboardList className="w-3.5 h-3.5" />
              Order Tracking
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F5F5F0] tracking-tight leading-tight">
              Follow every order{" "}
              <span className="text-[#F5C542]">from start to finish.</span>
            </h2>
            <p className="mt-4 text-[#F5F5F0]/50 leading-relaxed">
              See where every order is at a glance. No calling the kitchen. No
              guessing. The whole team knows what&apos;s happening.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Real-time status updates for every order",
                "Kitchen display integration",
                "Automatic notifications when orders change status",
                "Complete order history and reporting",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#F5C542] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#F5F5F0]/60">{item}</span>
                </div>
              ))}
            </div>
          </AnimateSection>

          {/* Visual — Order pipeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
          >
            <div className="bg-[#0D0F0E] border border-white/[0.06] rounded-xl overflow-hidden shadow-2xl shadow-black/50">
              <div className="px-5 py-3.5 border-b border-white/[0.06]">
                <span className="text-sm font-medium text-[#F5F5F0]/80">Active Orders</span>
              </div>
              <div className="p-5 space-y-4">
                {[
                  { id: "#148", table: "Table 5", items: "3 items", time: "8 min ago", current: 2 },
                  { id: "#149", table: "Table 2", items: "1 item", time: "3 min ago", current: 1 },
                  { id: "#147", table: "Table 9", items: "5 items", time: "12 min ago", current: 3 },
                ].map((order, oi) => (
                  <div key={oi} className="p-3 bg-white/[0.02] rounded-lg border border-white/[0.04]">
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#F5C542]">{order.id}</span>
                        <span className="text-[10px] text-[#F5F5F0]/40">•</span>
                        <span className="text-[10px] text-[#F5F5F0]/40">{order.table}</span>
                      </div>
                      <span className="text-[10px] text-[#F5F5F0]/30">{order.time}</span>
                    </div>
                    {/* Progress bar */}
                    <div className="flex items-center gap-1">
                      {[0, 1, 2, 3].map((si) => (
                        <div
                          key={si}
                          className={`flex-1 h-1 rounded-full transition-all duration-500 ${
                            si <= order.current
                              ? si === order.current
                                ? "bg-[#F5C542] animate-order-pulse"
                                : "bg-[#22D3EE]"
                              : "bg-white/[0.06]"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[10px] text-[#F5F5F0]/40">{order.items}</span>
                      <span className="text-[10px] font-medium text-[#F5C542]">
                        {stages[order.current].label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Feature: Inventory ────────────────────────────────────────────
function InventorySection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0D0F0E]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Inventory visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
            className="order-2 lg:order-1"
          >
            <div className="bg-[#151817] border border-white/[0.06] rounded-xl overflow-hidden shadow-2xl shadow-black/50">
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#22D3EE]" />
                  <span className="text-sm font-medium text-[#F5F5F0]/80">Inventory</span>
                </div>
                <span className="text-[10px] text-[#F5F5F0]/30">Updated 2 min ago</span>
              </div>

              {/* Table header */}
              <div className="grid grid-cols-4 gap-2 px-5 py-2 border-b border-white/[0.04]">
                <span className="text-[10px] font-medium text-[#F5F5F0]/30 uppercase tracking-wider">Item</span>
                <span className="text-[10px] font-medium text-[#F5F5F0]/30 uppercase tracking-wider text-center">Stock</span>
                <span className="text-[10px] font-medium text-[#F5F5F0]/30 uppercase tracking-wider text-center">Used today</span>
                <span className="text-[10px] font-medium text-[#F5F5F0]/30 uppercase tracking-wider text-right">Status</span>
              </div>

              {/* Inventory items */}
              <div className="divide-y divide-white/[0.04]">
                {[
                  { name: "Salmon Fillet", stock: "8", max: "50", used: "12", status: "low" },
                  { name: "Pasta (kg)", stock: "24", max: "30", used: "6", status: "ok" },
                  { name: "Olive Oil", stock: "3", max: "10", used: "2", status: "low" },
                  { name: "Espresso Beans", stock: "5", max: "8", used: "3", status: "ok" },
                  { name: "Fresh Basil", stock: "200g", max: "500g", used: "80g", status: "ok" },
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-4 gap-2 px-5 py-3 items-center">
                    <span className="text-xs font-medium text-[#F5F5F0]/70">{item.name}</span>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs text-[#F5F5F0]/60">{item.stock}</span>
                      <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            item.status === "low" ? "low-stock-bar" : "bg-[#22D3EE]"
                          }`}
                          style={{ width: `${(parseInt(item.stock) / parseInt(item.max)) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-[#F5F5F0]/40 text-center">{item.used}</span>
                    <div className="flex justify-end">
                      {item.status === "low" ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#F5C542] bg-[#F5C542]/10 px-2 py-0.5 rounded-full">
                          <AlertTriangle className="w-2.5 h-2.5" />
                          Low
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          OK
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <AnimateSection>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-[#22D3EE] mb-4">
                <Package className="w-3.5 h-3.5" />
                Inventory
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F5F5F0] tracking-tight leading-tight">
                Know what&apos;s selling.{" "}
                <span className="text-[#F5C542]">Know what&apos;s running low.</span>
              </h2>
              <p className="mt-4 text-[#F5F5F0]/50 leading-relaxed">
                Track stock levels across your entire menu. Get alerted when
                ingredients run low, see what&apos;s been used, and keep your kitchen
                fully stocked without over-ordering.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Real-time stock level tracking",
                  "Low-stock alerts and notifications",
                  "Usage tracking per item and per shift",
                  "Automatic stock deduction from orders",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#F5C542] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#F5F5F0]/60">{item}</span>
                  </div>
                ))}
              </div>
            </AnimateSection>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Feature: Role-Based Access ────────────────────────────────────
function RoleAccessSection() {
  const roles = [
    {
      level: "Admin",
      icon: Shield,
      color: "#F5C542",
      permissions: [
        { text: "Full system access", granted: true },
        { text: "Staff management", granted: true },
        { text: "Financial reports", granted: true },
        { text: "System settings", granted: true },
        { text: "Inventory management", granted: true },
      ],
    },
    {
      level: "Manager",
      icon: Users,
      color: "#22D3EE",
      permissions: [
        { text: "Full system access", granted: false },
        { text: "Staff management", granted: true },
        { text: "Financial reports", granted: true },
        { text: "System settings", granted: false },
        { text: "Inventory management", granted: true },
      ],
    },
    {
      level: "Staff",
      icon: Utensils,
      color: "#F5F5F0",
      permissions: [
        { text: "Full system access", granted: false },
        { text: "Staff management", granted: false },
        { text: "Financial reports", granted: false },
        { text: "System settings", granted: false },
        { text: "Inventory management", granted: false },
      ],
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#151817]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <AnimateSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-[#22D3EE] mb-4">
            <Shield className="w-3.5 h-3.5" />
            Role-Based Access
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F5F5F0] tracking-tight">
            Everyone gets the access they need.{" "}
            <span className="text-[#F5C542]">Nothing they don&apos;t.</span>
          </h2>
          <p className="mt-4 text-lg text-[#F5F5F0]/50 max-w-2xl mx-auto">
            Your host doesn&apos;t need to see inventory. Your kitchen staff don&apos;t
            need to see financials. Set permissions by role.
          </p>
        </AnimateSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {roles.map((role, ri) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={ri}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={ri}
                className={`relative bg-[#0D0F0E] border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:border-white/[0.12] ${
                  ri === 0 ? "ring-1 ring-[#F5C542]/20" : ""
                }`}
              >
                {ri === 0 && (
                  <span className="absolute -top-2.5 left-6 text-[10px] font-medium text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-2.5 py-0.5 rounded-full">
                    Full Access
                  </span>
                )}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${role.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: role.color }} />
                  </div>
                  <span className="text-base font-semibold text-[#F5F5F0]">{role.level}</span>
                </div>
                <div className="space-y-2.5">
                  {role.permissions.map((perm, pi) => (
                    <div key={pi} className="flex items-center gap-2.5">
                      {perm.granted ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      ) : (
                        <Minus className="w-3.5 h-3.5 text-[#F5F5F0]/15 shrink-0" />
                      )}
                      <span
                        className={`text-xs ${
                          perm.granted ? "text-[#F5F5F0]/60" : "text-[#F5F5F0]/20"
                        }`}
                      >
                        {perm.text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ───────────────────────────────────────────────────────
function PricingSection() {
  const plans = [
    {
      name: "Monthly",
      period: "per month",
      description: "Flexible month-to-month access. No long-term commitment.",
      cta: "Contact Us",
      featured: false,
    },
    {
      name: "6 Months",
      period: "per 6 months",
      description: "Better value for restaurants committing for half a year.",
      cta: "Contact Us",
      featured: false,
    },
    {
      name: "Yearly",
      period: "per year",
      description: "Best value. The most popular choice for growing restaurants.",
      cta: "Contact Us",
      featured: true,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-[#0D0F0E]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <AnimateSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-[#F5C542] mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            Pricing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F5F5F0] tracking-tight">
            Simple plans for every restaurant.
          </h2>
          <p className="mt-4 text-lg text-[#F5F5F0]/50 max-w-xl mx-auto">
            Choose the commitment that works for you. Scale up or down anytime.
          </p>
        </AnimateSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className={`relative bg-[#151817] border rounded-xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "border-[#F5C542]/30 shadow-lg shadow-[#F5C542]/5"
                  : "border-white/[0.06] hover:border-white/[0.12]"
              } ${plan.featured ? "animate-shimmer" : ""}`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-[#0D0F0E] bg-[#F5C542] px-3 py-1 rounded-full">
                  Recommended
                </span>
              )}

              <h3 className="text-lg font-semibold text-[#F5F5F0]">{plan.name}</h3>
              <p className="mt-1 text-xs text-[#F5F5F0]/40">{plan.period}</p>

              <div className="mt-5 mb-5">
                <span className="text-2xl font-serif font-semibold text-[#F5F5F0]">
                  Contact for pricing
                </span>
              </div>

              <p className="text-sm text-[#F5F5F0]/50 leading-relaxed mb-6">
                {plan.description}
              </p>

              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  plan.featured
                    ? "bg-[#F5C542] text-[#0D0F0E] hover:bg-[#F5C542]/90 hover:shadow-lg hover:shadow-[#F5C542]/15"
                    : "bg-white/[0.04] text-[#F5F5F0]/70 border border-white/[0.06] hover:border-white/[0.12] hover:text-[#F5F5F0]"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ──────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    { num: "01", title: "Set up", desc: "Add your menu, tables, and staff roles in minutes.", icon: Settings },
    { num: "02", title: "Take orders", desc: "From POS or QR codes — orders flow straight to the kitchen.", icon: ClipboardList },
    { num: "03", title: "Track", desc: "See every order's status in real time. No guesswork.", icon: TrendingUp },
    { num: "04", title: "Bill", desc: "Generate and print bills with one tap. Track every transaction.", icon: Receipt },
    { num: "05", title: "Manage stock", desc: "Auto-deduct inventory as orders go out. Never run short.", icon: Package },
  ];

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-[#151817]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <AnimateSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-[#22D3EE] mb-4">
            <Calendar className="w-3.5 h-3.5" />
            How It Works
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F5F5F0] tracking-tight">
            How ReSTRA System fits your restaurant.
          </h2>
          <p className="mt-4 text-lg text-[#F5F5F0]/50 max-w-xl mx-auto">
            Five steps. One system. Your staff focuses on serving — ReSTRA System handles
            the rest.
          </p>
        </AnimateSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-[#0D0F0E] border border-white/[0.06] flex items-center justify-center mb-4 transition-all duration-300 hover:border-[#F5C542]/20">
                  <Icon className="w-6 h-6 text-[#22D3EE]" />
                </div>
                <span className="text-[10px] font-bold text-[#F5C542] tracking-widest uppercase">
                  {step.num}
                </span>
                <h3 className="text-sm font-semibold text-[#F5F5F0] mt-1">{step.title}</h3>
                <p className="text-xs text-[#F5F5F0]/40 mt-1.5 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Trust / Proof ─────────────────────────────────────────────────
function TrustSection() {
  const features = [
    { icon: Monitor, label: "POS" },
    { icon: QrCode, label: "QR Ordering" },
    { icon: ClipboardList, label: "Orders" },
    { icon: Receipt, label: "Billing" },
    { icon: Package, label: "Inventory" },
    { icon: Users, label: "Staff" },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#0D0F0E]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <AnimateSection className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F5F0] tracking-tight">
            One system. Fewer things{" "}
            <span className="text-[#F5C542]">to keep track of.</span>
          </h2>
          <p className="mt-4 text-lg text-[#F5F5F0]/50 max-w-xl mx-auto">
            ReSTRA System connects the pieces that matter — so you can focus on what
            happens at the table.
          </p>
        </AnimateSection>

        <AnimateSection>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-3xl mx-auto">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  custom={i}
                  className="flex flex-col items-center gap-2 p-4 bg-[#151817] border border-white/[0.06] rounded-xl hover:border-[#22D3EE]/20 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-[#22D3EE]" />
                  <span className="text-[10px] font-medium text-[#F5F5F0]/50">{f.label}</span>
                </motion.div>
              );
            })}
          </div>
        </AnimateSection>

        {/* Built for businesses */}
        <AnimateSection className="mt-16 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Restaurants", desc: "Fine dining, casual, fast-casual" },
              { label: "Cafés & Bakeries", desc: "Coffee shops, dessert bars" },
              { label: "Hotels & Catering", desc: "Hospitality, events, banquets" },
            ].map((item, i) => (
              <div key={i} className="text-center p-5">
                <p className="text-sm font-semibold text-[#F5F5F0]">{item.label}</p>
                <p className="text-xs text-[#F5F5F0]/40 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimateSection>
            Your restaurant already has enough{" "}
            <span className="text-[#F5C542]">moving parts.</span>
          </h2>
          <p className="mt-4 text-lg text-[#F5F5F0]/50 max-w-xl mx-auto">
            Bring them into one place with ReSTRA System.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-[#F5C542] text-[#0D0F0E] rounded-lg hover:bg-[#F5C542]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#F5C542]/15 hover:-translate-y-0.5"
            >
              Book a Demo
              <CalendarDays className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@restra.systems"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-[#F5F5F0]/70 border border-[#F5F5F0]/10 rounded-lg hover:border-[#F5F5F0]/20 hover:text-[#F5F5F0] transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4" />
              Message Us
            </a>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────
function Footer() {
  const linkGroups = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "How It Works", href: "#how-it-works" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Contact", href: "#contact" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0D0F0E] border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-7 h-7 rounded-md bg-[#F5C542]">
                <Utensils className="w-3.5 h-3.5 text-[#0D0F0E]" />
              </div>
              <span className="font-serif text-lg font-semibold text-[#F5F5F0]">
                ReSTRA
              </span>
            </div>
            <p className="text-sm text-[#F5F5F0]/40 leading-relaxed max-w-xs">
              The restaurant management system that brings POS, ordering,
              billing, inventory, and staff together.
            </p>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold text-[#F5F5F0]/50 uppercase tracking-wider mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#F5F5F0]/30 hover:text-[#F5F5F0]/70 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#F5F5F0]/25">
            &copy; {new Date().getFullYear()} ReSTRA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#F5F5F0]/25 hover:text-[#F5F5F0]/50 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-[#F5F5F0]/25 hover:text-[#F5F5F0]/50 transition-colors">
              Terms
            </a>
            <a href="#" className="text-xs text-[#F5F5F0]/25 hover:text-[#F5F5F0]/50 transition-colors">
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Features Index (anchor target) ────────────────────────────────
function FeaturesAnchor() {
  return (
    <div id="features" className="bg-[#0D0F0E]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-24 lg:pt-32 pb-8">
        <AnimateSection className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-[#22D3EE] mb-4">
            <Zap className="w-3.5 h-3.5" />
            Features
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F5F0] tracking-tight">
            Built for the way restaurants operate.
          </h2>
          <p className="mt-4 text-lg text-[#F5F5F0]/50 max-w-2xl mx-auto">
            Every feature exists because restaurant operators asked for it.
            No bloat. No unused tools.
          </p>
        </AnimateSection>
      </div>
    </div>
  );
}

// ─── Main Landing ──────────────────────────────────────────────────
export default function Landing() {
  return (
    <div className="min-h-screen bg-[#0D0F0E] text-[#F5F5F0] font-sans">
      <Navbar />
      <HeroSection />
      <ConnectedSection />
      <FeaturesAnchor />
      <POSBillingSection />
      <QROrderingSection />
      <OrderTrackingSection />
      <InventorySection />
      <RoleAccessSection />
      <PricingSection />
      <HowItWorksSection />
      <TrustSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const reasons = [
  {
    title: "Partner, Bukan Vendor",
    description:
      "Kami percaya teknologi harus membantu, bukan bikin pusing. Kami nggak cuma mengerjakan project, tapi memastikan kamu paham dan nyaman memakainya.",
  },
  {
    title: "Bahasa yang Mudah Dipahami",
    description:
      "Nggak ada istilah teknis yang ribet. Semua kami jelaskan pakai bahasa sehari-hari.",
  },
  {
    title: "Fokus UMKM & Bisnis Lokal",
    description:
      "Kami paham tantangan bisnis kecil — dari keterbatasan waktu sampai budget.",
  },
  {
    title: "Proses Jelas & Cepat",
    description:
      "Timeline realistis, update rutin, dan transparan dari awal sampai akhir.",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

const isDesktop = useMediaQuery("(min-width: 768px)");
const y = useTransform(
  scrollYProgress,
  [0, 1],
  [0, isDesktop ? 400 : 0]
);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 md:py-48 bg-amber-200"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* LEFT COLUMN */}
          <motion.div
            style={{ y }}
            className="md:will-change-transform"
          >
            <h2 className="text-display text-display-md mb-8">
              KENAPA<br />
              <span className="text-primary">ZKI</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Kami bukan sekadar jasa pembuatan website atau sistem.
              Kami adalah partner yang membantu bisnis kamu berjalan
              lebih rapi dan siap berkembang secara digital.
            </p>

            <div className="flex gap-10 text-sm uppercase tracking-widest text-muted-foreground">
              <div>
                <span className="block text-4xl font-display font-bold text-foreground mb-2">
                  UMKM
                </span>
                Fokus
              </div>
              <div>
                <span className="block text-4xl font-display font-bold text-foreground mb-2">
                  Jelas
                </span>
                Proses
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="space-y-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="brutal-card p-8 md:p-10">
                  <span className="text-sm text-primary font-mono mb-4 block">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
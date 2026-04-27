import { motion } from "framer-motion";
import { UserPlus, MapPin, Clock, Phone, Mail, ArrowRight, type LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CardDetail {
  icon: LucideIcon;
  text: string;
}

interface Card {
  id: number;
  title: string;
  description?: string;
  icon?: LucideIcon;
  color?: string;
  button?: string;
  type: "normal" | "contact" | "image";
  details?: CardDetail[];
  image?: string;
}

export default function ContactInfoCards() {
  const { t } = useTranslation();

  const cards: Card[] = [
    {
      id: 1,
      title: t("members_dashboard.contact_cards.join.title"),
      description: t("members_dashboard.contact_cards.join.desc"),
      icon: UserPlus,
      color: "#1E88E5",
      button: t("members_dashboard.contact_cards.join.button"),
      type: "normal",
    },

    {
      id: 2,
      title: t("members_dashboard.contact_cards.find.title"),
      icon: MapPin,
      color: "#4CAF50",
      type: "contact",

      details: [
        {
          icon: MapPin,
          text: t("members_dashboard.contact_cards.find.address"),
        },
        {
          icon: Clock,
          text: t("members_dashboard.contact_cards.find.hours"),
        },
        {
          icon: Phone,
          text: t("members_dashboard.contact_cards.find.phone"),
        },
        {
          icon: Mail,
          text: t("members_dashboard.contact_cards.find.email"),
        },
      ],
    },

    {
      id: 3,
      title: t("members_dashboard.contact_cards.touch.title"),
      description: t("members_dashboard.contact_cards.touch.desc"),
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      button: t("members_dashboard.contact_cards.touch.button"),
      type: "image",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="bg-[#D9EAF7] py-12 sm:py-20 px-4 sm:px-6 md:px-20 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {cards.map((card) => {
          /* Image Card */

          if (card.type === "image") {
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                className="relative rounded-[40px] overflow-hidden group min-h-[400px]"
              >
                <img
                  src={card.image}
                  className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-[#0A1D2E]/70 flex flex-col justify-end p-6 sm:p-10 space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {card.title}
                  </h2>

                  <p className="text-gray-300 text-sm">{card.description}</p>

                  <button className="flex items-center gap-3 bg-white/10 border border-white/30 text-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
                    {card.button}

                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            );
          }

          /* Contact Card */

          if (card.type === "contact") {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                className="bg-white p-6 sm:p-10 rounded-[24px] sm:rounded-[40px] shadow-sm flex flex-col space-y-4 sm:space-y-6"
              >
                {Icon && (
                  <div
                    className="p-3 rounded-xl text-white w-fit"
                    style={{ background: card.color }}
                  >
                    <Icon size={28} />
                  </div>
                )}

                <h2 className="text-2xl sm:text-3xl font-bold">{card.title}</h2>

                <div className="space-y-4">
                  {card.details?.map((item, index) => {
                    const DetailIcon = item.icon;

                    return (
                      <div key={index} className="flex gap-3 text-gray-600">
                        <DetailIcon size={18} />

                        <p className="text-sm italic">{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          }

          /* Normal Card */

          const Icon = card.icon;

          return (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="bg-white p-6 sm:p-10 rounded-[24px] sm:rounded-[40px] shadow-sm flex flex-col space-y-4 sm:space-y-6"
            >
              {Icon && (
                <div
                  className="p-3 rounded-xl text-white w-fit"
                  style={{ background: card.color }}
                >
                  <Icon size={28} />
                </div>
              )}

              <h2 className="text-2xl sm:text-3xl font-bold">{card.title}</h2>

              <p className="text-gray-600">{card.description}</p>

              <button className="flex items-center gap-2 text-orange-500 border border-orange-500 px-6 py-2.5 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition mt-auto">
                {card.button}

                <ArrowRight size={18} />
              </button>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

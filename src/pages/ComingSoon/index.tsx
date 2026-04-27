import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";


const ComingSoon = () => {
  const { t } = useTranslation();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Subscribing email:", email);
  //   setEmail("");
  //   alert("Thank you! We will get in touch with you soon.");
  // };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="my-15  flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">


      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center z-10 space-y-12"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <img
            src="/images/logo.png"
            alt="Quenbyford Logo"
            className="h-20 sm:h-24 w-auto object-contain"
          />
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-orange-600 font-bold tracking-widest text-sm sm:text-base uppercase">
            {t('coming_soon.subtitle')}
          </h2>
          <h1 className=" text-4xl lg:text-[50px] font-black text-[#0F172A] leading-tight">
            {t('coming_soon.title_part1')} <span className="text-[#0284C7]"> {t('coming_soon.title_part2')}</span>

          </h1>
          <p className="text-[#64748B] text-lg sm:text-xl max-w-2xl mx-auto">
            {t('coming_soon.description')}
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto"
        >
          {[
            { label: t('coming_soon.days'), value: timeLeft.days },
            { label: t('coming_soon.hours'), value: timeLeft.hours },
            { label: t('coming_soon.minutes'), value: timeLeft.minutes },
            { label: t('coming_soon.seconds'), value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={item.value}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  className="text-3xl sm:text-5xl font-bold text-[#0F172A]"
                >
                  {item.value.toString().padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
              <span className="mt-2 text-xs sm:text-sm font-semibold text-orange-600 uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Newsletter Form */}
        {/* <motion.div variants={itemVariants} className="max-w-md mx-auto w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-2xl shadow-lg border border-slate-100"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="email"
                placeholder="Enter your email..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 border-none shadow-none focus:ring-0 text-slate-700 h-12"
              />
            </div>
            <Button
              type="submit"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold h-12 px-8 rounded-xl shadow-md shadow-orange-200 flex items-center gap-2 group transition-all"
            >
              Get Notified
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
          <p className="mt-4 text-sm text-slate-400">
            We don’t spam. Only important updates.
          </p>
        </motion.div> */}

        {/* Social Links */}
        {/* <motion.div variants={itemVariants} className="pt-8 space-y-6">
          <div className="flex justify-center gap-6">
            {[
              { icon: FaFacebook, href: "#" },
              { icon: FaInstagram, href: "#" },
              { icon: FaTwitter, href: "#" },
              { icon: Globe, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#64748B] hover:text-[#0284C7] hover:shadow-lg hover:-translate-y-1 transition-all border border-slate-100 shadow-sm"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} Quenbyford. All rights reserved.
          </p>
        </motion.div> */}
      </motion.div>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
          className="absolute bg-slate-200/30 rounded-full blur-sm -z-1"
          style={{
            width: 20 + i * 15,
            height: 20 + i * 15,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default ComingSoon;
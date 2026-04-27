
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full min-h-170 flex flex-col font-sans">
      {/* Main Hero Background */}
      <div 
        className="relative grow flex flex-col items-center justify-center text-center px-4 py-20 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(45, 116, 184, 0.7), rgba(45, 116, 184, 0.7)), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80')` 
        }}
      >
      


        {/* Text Content */}
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl md:text-[50px] font-bold mb-4">
            {t('join_us.hero.title')}
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            {t('join_us.hero.subtitle')}
          </h3>
          <p className="text-sm md:text-base font-normal  leading-relaxed max-w-4xl mx-auto opacity-95 mb-12">
            {t('join_us.hero.description')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="https://form.jotform.com/fchcc/new-membership-application" className="bg-[#FF781F] hover:bg-[#e66a1a] text-white w-75 h-12 px-10 py-3 rounded-full font-bold text-[16px] transition-colors">
              {t('join_us.hero.ready_to_join')}
            </Link>
            <Link 
              to="#membership-levels"
              className="border-2 border-white/60 hover:bg-white/10  w-75 h-12 text-white px-8 py-2 rounded-full font-bold text-[16px] transition-all flex items-center justify-center"
            >
              {t('join_us.hero.renew_membership')}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-[#FF781F]  text-white py-3 px-6 text-xs md:text-[16px] text-center">
        <p>
          <span className="font-bold">{t('join_us.hero.grace_period')}</span> {t('join_us.hero.grace_period_text')} 
          <span className="mx-4 hidden md:inline">|</span>
          <span className="font-bold">{t('join_us.hero.good_standing')}</span> {t('join_us.hero.good_standing_text')}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
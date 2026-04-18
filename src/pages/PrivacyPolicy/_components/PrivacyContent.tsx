import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

const PrivacyContent: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="max-w-360 mx-auto px-6 py-16 text- leading-relaxed"
    >
      <motion.h1 variants={sectionVariants} className="text-[40px] font-bold text-black mb-8 border-b pb-4">
        {t('privacy_policy.title')}
      </motion.h1>

      <motion.section variants={sectionVariants} className="mb-10">
        <h2 className="text-3xl font-bold text-black mb-4">{t('privacy_policy.whoWeAre.title')}</h2>
        <p className="text-lg font-normal text-black mb-4">
          {t('privacy_policy.whoWeAre.p1')}
        </p>
        <p className="text-lg font-normal text-black mb-4">
          <Trans
            i18nKey="privacy_policy.whoWeAre.p2"
            components={{
              1: <a href="https://fchcc.com" className="text-blue-600 hover:underline" />,
              2: <a href="#" className="underline" />
            }}
          />
        </p>
      </motion.section>

      <motion.section variants={sectionVariants} className="mb-10">
        <h2 className="text-3xl font-bold text-black mb-4">{t('privacy_policy.whatWeCollect.title')}</h2>

        <h3 className="text-xl font-semibold text-black mb-3 ">{t('privacy_policy.whatWeCollect.commentsTitle')}</h3>
        <div className=" space-y-4">
          <p>{t('privacy_policy.whatWeCollect.commentsP1')}</p>
          <p>
            <Trans
              i18nKey="privacy_policy.whatWeCollect.commentsP2"
              components={{
                1: <a href="https://automattic.com/privacy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" />
              }}
            />
          </p>
        </div>
      </motion.section>

      <motion.section variants={sectionVariants} className="mb-10">
        <h2 className="text-3xl font-bold text-black mb-4">{t('privacy_policy.sensitiveInfo.title')}</h2>
        <p className="text-lg font-normal text-black mb-4">
          {t('privacy_policy.sensitiveInfo.p1')}
        </p>
      </motion.section>

      <motion.section variants={sectionVariants} className="mb-10">
        <h2 className="text-3xl font-bold text-black mb-4">{t('privacy_policy.contactForms.title')}</h2>
        <p className="text-lg font-normal text-black mb-4">
          <Trans
            i18nKey="privacy_policy.contactForms.p1"
            components={{
              1: <Link to="/contact" className="text-blue-600 hover:underline " />
            }}
          />
        </p>
      </motion.section>

      <motion.section variants={sectionVariants} className="mb-10">
        <h2 className="text-3xl font-bold text-black mb-4">{t('privacy_policy.mailList.title')}</h2>
        <p className="text-lg font-normal text-black mb-4">
          {t('privacy_policy.mailList.p1')}
        </p>
      </motion.section>

      <motion.section variants={sectionVariants} className="mb-10">
        <h2 className="text-3xl font-bold text-black mb-4">{t('privacy_policy.whatWeDo.title')}</h2>
        <p className="text-lg font-normal text-black mb-4">
          {t('privacy_policy.whatWeDo.p1')}
        </p>
        <p className="font-semibold text-slate-900 border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
          {t('privacy_policy.whatWeDo.p2')}
        </p>
      </motion.section>

      <motion.section variants={sectionVariants} className="mb-10">
        <h2 className="text-3xl font-bold text-black mb-4">{t('privacy_policy.cookies.title')}</h2>
        <p className="text-lg font-normal text-black mb-4">
          {t('privacy_policy.cookies.p1')}
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 ">{t('privacy_policy.cookies.whatAreCookiesTitle')}</h3>
        <p className="text-lg font-normal text-black mb-4">
          {t('privacy_policy.cookies.whatAreCookiesP1')}
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 ">{t('privacy_policy.cookies.howWeUseTitle')}</h3>
        <p className="text-lg font-normal text-black mb-4">
          {t('privacy_policy.cookies.howWeUseP1')}
        </p>
      </motion.section>

      <motion.section variants={sectionVariants} className="mb-10">
        <h2 className="text-3xl font-bold text-black mb-4">{t('privacy_policy.embeddedContent.title')}</h2>
        <p className="text-lg font-normal text-black mb-4">
          {t('privacy_policy.embeddedContent.p1')}
        </p>
        <p className="text-lg font-normal text-black mb-4">
          {t('privacy_policy.embeddedContent.p2')}
        </p>
      </motion.section>

      <motion.section variants={sectionVariants} className="mb-10">
        <h2 className="text-3xl font-bold text-black mb-4">{t('privacy_policy.howLongRetain.title')}</h2>
        <p className="text-lg font-normal text-black mb-4">
          {t('privacy_policy.howLongRetain.p1')}
        </p>
        <p className="text-lg font-normal text-black mb-4">
          {t('privacy_policy.howLongRetain.p2')}
        </p>
      </motion.section>

      <motion.section variants={sectionVariants} className="mb-10">
        <h2 className="text-3xl font-bold text-black mb-4">{t('privacy_policy.whatRights.title')}</h2>
        <p className="text-lg font-normal text-black mb-4">
          {t('privacy_policy.whatRights.p1')}
        </p>
      </motion.section>

      <motion.section variants={sectionVariants} className="mb-10">
        <h2 className="text-3xl font-bold text-black mb-4">{t('privacy_policy.whereWeSend.title')}</h2>
        <p className="text-lg font-normal text-black mb-4">
          {t('privacy_policy.whereWeSend.p1')}
        </p>
      </motion.section>

      <motion.section variants={sectionVariants} className="mb-10">
        <h2 className="text-3xl font-bold text-black mb-4">{t('privacy_policy.contactInfo.title')}</h2>
        <p className="text-lg font-normal text-black mb-4">
          <Trans
            i18nKey="privacy_policy.contactInfo.p1"
            components={{
              1: <a href="mailto:fchcc@fchcc.com" className="text-blue-600 hover:underline" />
            }}
          />
        </p>
      </motion.section>

      <motion.section variants={sectionVariants} className="mb-10">
        <h2 className="text-3xl font-bold text-black mb-4">{t('privacy_policy.additionalInfo.title')}</h2>

        <h3 className="text-xl font-semibold text-black mb-3 ">{t('privacy_policy.additionalInfo.howWeProtectTitle')}</h3>
        <p className="text-lg font-normal text-black mb-4">
          {t('privacy_policy.additionalInfo.howWeProtectP1')}
        </p>

        <h3 className="text-xl font-semibold text-black mb-3 ">{t('privacy_policy.additionalInfo.dataBreachTitle')}</h3>
        <p className="text-lg font-normal text-black mb-4">
          {t('privacy_policy.additionalInfo.dataBreachP1')}
        </p>
      </motion.section>

      <motion.div variants={sectionVariants} className="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-12">
        <p>
          <Trans
            i18nKey="privacy_policy.footerText"
            components={{
              1: <a href="mailto:fchcc@fchcc.com" className="text-blue-600 hover:underline" />
            }}
          />
        </p>
      </motion.div>
    </motion.div>
  );
};

export default PrivacyContent;

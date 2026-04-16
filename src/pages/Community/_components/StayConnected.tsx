import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const StayConnected = () => {
    const { t } = useTranslation();
    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 my-12 sm:my-22.5 bg-white">
            {/* Header Content */}
            <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl mb-5 md:text-[32px] font-medium text-black">
                    {t('community_page.stay_connected.title')}
                </h2>
                <p className="text-black text-base sm:text-xl font-normal max-w-2xl mx-auto ">
                    {t('community_page.stay_connected.desc')}
                </p>
            </div>

            {/* Subscription Form */}
            <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    {/* First Name Field */}
                    <div className="space-y-2 ">
                        <label className="text-sm font-normal text-black ml-1">
                            {t('community_page.stay_connected.form.first_name')}
                        </label>
                        <Input
                            type="text"
                            placeholder={t('community_page.stay_connected.form.placeholder_first')}
                            className="h-12 rounded-lg text-sm font-normal text-[#000000]/25 border-slate-200 ring-0 shadow-sm "
                        />
                    </div>

                    {/* Last Name Field */}
                    <div className="space-y-2">
                         <label className="text-sm font-normal text-black ml-1">
                            {t('community_page.stay_connected.form.last_name')}
                        </label>
                        <Input
                            type="text"
                            placeholder={t('community_page.stay_connected.form.placeholder_last')}
                            className="h-12 rounded-lg text-sm font-normal text-[#000000]/25 border-slate-200 ring-0 shadow-sm "
                        />
                    </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                    <label className="text-sm font-normal text-black ml-1">
                        {t('community_page.stay_connected.form.email')}
                    </label>
                    <Input
                        type="email"
                        placeholder={t('community_page.stay_connected.form.placeholder_email')}
                        className="h-12 rounded-lg text-sm font-normal text-[#000000]/25 border-slate-200 ring-0 shadow-sm "/>
                </div>

                {/* Subscribe Button */}
                <Button
                    type="submit"
                    className="w-full h-12 sm:h-14 bg-[#F97316] hover:bg-orange-600 text-white font-bold text-base sm:text-lg rounded-xl transition-all shadow-lg shadow-orange-200"
                >
                    {t('community_page.stay_connected.form.btn')}
                </Button>
            </form>
        </section>
    );
};

export default StayConnected;
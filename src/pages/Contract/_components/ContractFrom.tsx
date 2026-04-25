import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation } from "react-i18next";


const ContractFrom = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Auto reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

      {/* Left Side: Contact Info */}
      <div className="space-y-9">
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-medium text-black ">{t("contact.form.get_in_touch")}</h2>
          <p className="text-[#979797] text-sm sm:text-base md:text-[14px] max-w-lg font-normal ">
            {t("contact.form.desc")}
          </p>
        </div>

        <div className="space-y-6">
          {/* Office Location */}
          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 bg-[#F97316]/10 rounded-xl flex items-center justify-center text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 11.892 4.402 13.13 5.5 14.5L12 22L18.5 14.5C19.598 13.13 20 11.892 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2Z" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-[16px] text-black mb-2">{t("contact.form.location")}</h4>
              <p className="text-gray-400 text-sm font-normal max-w-[220px]">4651 Salisbury Road, Suite 400 Jacksonville, FL 32256</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8.76835 2.19193C9.79885 2.04993 10.6654 2.68043 11.0754 3.49993L12.0839 5.51643C12.6434 6.63543 12.3219 7.94843 11.4739 8.77443C10.9729 9.26193 10.4694 9.81893 10.1774 10.3104C10.1579 10.3454 10.1519 10.3863 10.1604 10.4254C10.4304 11.8884 11.4218 13.3339 12.3063 14.3704C12.351 14.4197 12.409 14.4548 12.4733 14.4714C12.5377 14.488 12.6055 14.4854 12.6684 14.4639L14.6559 13.8429C15.1912 13.6756 15.7661 13.6841 16.2963 13.8673C16.8265 14.0505 17.284 14.3988 17.6018 14.8609L19.0404 16.9534C19.4304 17.5209 19.6279 18.2909 19.3289 19.0314C19.0619 19.6929 18.5453 20.6469 17.6058 21.2814C16.6308 21.9394 15.2953 22.1894 13.5478 21.5904C11.5953 20.9204 9.75085 19.2404 8.22135 17.0919C6.68285 14.9299 5.41635 12.2294 4.64835 9.41343C3.92235 6.75493 4.36035 4.96493 5.39135 3.81243C6.38585 2.70043 7.81085 2.32343 8.76835 2.19193ZM9.95685 4.05893C9.72835 3.60243 9.32085 3.37693 8.93835 3.42943C8.08785 3.54643 7.02285 3.86293 6.32335 4.64543C5.66035 5.38693 5.20135 6.69293 5.85335 9.08443C6.58585 11.7684 7.79185 14.3334 9.23935 16.3669C10.6959 18.4134 12.3509 19.8584 13.9529 20.4079C15.3804 20.8974 16.2979 20.6554 16.9059 20.2454C17.5489 19.8109 17.9444 19.1204 18.1694 18.5634C18.2724 18.3084 18.2279 17.9784 18.0099 17.6614L16.5713 15.5694C16.4049 15.3273 16.1653 15.1449 15.8876 15.0489C15.6099 14.9529 15.3088 14.9483 15.0283 15.0359L13.0408 15.6569C12.4468 15.8424 11.7779 15.6769 11.3554 15.1819C10.4349 14.1034 9.26185 12.4494 8.93035 10.6519C8.86703 10.3151 8.92815 9.96664 9.10235 9.67143C9.48135 9.03443 10.0814 8.38493 10.6009 7.87893C11.1084 7.38493 11.2524 6.64993 10.9654 6.07543L9.95685 4.05893Z" fill="#1E88E5" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-[16px] text-black mb-2">{t("contact.form.phone")}</h4>
              <p className="text-gray-400 text-sm font-normal max-w-[220px]">First Coast Hispanic Chamber of Commerce P. O. Box 57972 Jacksonville, FL 32241 p 904-346-1118</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4ZM20 8L12.525 12.675C12.4417 12.725 12.3543 12.7627 12.263 12.788C12.1717 12.8133 12.084 12.8257 12 12.825C11.916 12.8243 11.8287 12.812 11.738 12.788C11.6473 12.764 11.5597 12.7263 11.475 12.675L4 8V18H20V8ZM12 11L20 6H4L12 11ZM4 8.25V6.775V6.8V6.788V8.25Z" fill="#22B32C" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-[16px] text-black mb-2">{t("contact.form.email")}</h4>
              <p className="text-gray-400 text-sm font-normal max-w-[220px]">contact.fchcc@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <Card className="border-none shadow-sm border bg-white ring-0">
        <CardContent className="p-4 sm:p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-5">
            <h3 className="text-[16px] font-medium text-black mb-5">
              {t("contact.form.send_msg")}
            </h3>

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-normal text-black mb-1">
                  {t("contact.form.first_name")}
                </Label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={t("contact.form.placeholder_first")}
                  className="bg-gray-50 border-none h-11 focus-visible:ring-0 w-full"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-normal text-black mb-1">
                  {t("contact.form.last_name")}
                </Label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={t("contact.form.placeholder_last")}
                  className="bg-gray-50 border-none h-11 focus-visible:ring-0 w-full"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label className="text-xs font-normal text-black mb-1">
                {t("contact.form.email_addr")}
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.form.placeholder_email")}
                className="bg-gray-50 border-none h-11 focus-visible:ring-0 w-full"
              />
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <Label className="text-xs font-normal text-black mb-1">
                {t("contact.form.subject")}
              </Label>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t("contact.form.placeholder_subject")}
                className="bg-gray-50 border-none h-11 focus-visible:ring-0 w-full"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label className="text-xs font-normal text-black mb-1">
                {t("contact.form.message")}
              </Label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.form.placeholder_msg")}
                className="bg-gray-50 border-none min-h-25 focus-visible:ring-0 resize-none w-full"
              />
            </div>

            {/* Button */}
            <Button className="w-full bg-[#FF7A1A] hover:bg-[#e66d17] text-white font-bold h-12 py-6 rounded-full transition-colors">
              {t("contact.form.submit")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContractFrom;

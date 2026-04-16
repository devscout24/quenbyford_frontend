
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const StayConnected = () => {
    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 my-12 sm:my-22.5 bg-white">
            {/* Header Content */}
            <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl mb-5 md:text-[32px] font-medium text-black">
                    Stay Connected with our community
                </h2>
                <p className="text-black text-base sm:text-xl font-normal max-w-2xl mx-auto ">
                    Get our Conexion newsletter with program updates, event invitations,
                    and community success stories.
                </p>
            </div>

            {/* Subscription Form */}
            <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    {/* First Name Field */}
                    <div className="space-y-2 ">
                        <label className="text-sm font-normal text-black ml-1">
                            First Name
                        </label>
                        <Input
                            type="text"
                            placeholder="Enter Name"
                            className="h-12 rounded-lg text-sm font-normal text-[#000000]/25 border-slate-200 ring-0 shadow-sm "
                        />
                    </div>

                    {/* Last Name Field */}
                    <div className="space-y-2">
                         <label className="text-sm font-normal text-black ml-1">
                            Last Name
                        </label>
                        <Input
                            type="text"
                            placeholder="Last Name"
                            className="h-12 rounded-lg text-sm font-normal text-[#000000]/25 border-slate-200 ring-0 shadow-sm "
                        />
                    </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                    <label className="text-sm font-normal text-black ml-1">
                        Email
                    </label>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                       className="h-12 rounded-lg text-sm font-normal text-[#000000]/25 border-slate-200 ring-0 shadow-sm "/>
                </div>

                {/* Subscribe Button */}
                <Button
                    type="submit"
                    className="w-full h-12 sm:h-14 bg-[#F97316] hover:bg-orange-600 text-white font-bold text-base sm:text-lg rounded-xl transition-all shadow-lg shadow-orange-200"
                >
                    Subscribe Now
                </Button>
            </form>
        </section>
    );
};

export default StayConnected;
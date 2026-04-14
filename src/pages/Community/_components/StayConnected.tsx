
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const StayConnected = () => {
    return (
        <section className="max-w-4xl mx-auto px-6 py-20 bg-white">
            {/* Header Content */}
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Stay Connected with our community
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Get our Conexion newsletter with program updates, event invitations,
                    and community success stories.
                </p>
            </div>

            {/* Subscription Form */}
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">
                            First Name
                        </label>
                        <Input
                            type="text"
                            placeholder="Enter Name"
                            className="h-12 rounded-lg border-slate-200 focus:ring-orange-500"
                        />
                    </div>

                    {/* Last Name Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">
                            Last Name
                        </label>
                        <Input
                            type="text"
                            placeholder="Last Name"
                            className="h-12 rounded-lg border-slate-200 focus:ring-orange-500"
                        />
                    </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">
                        Email
                    </label>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="h-12 rounded-lg border-slate-200 focus:ring-orange-500"
                    />
                </div>

                {/* Subscribe Button */}
                <Button
                    type="submit"
                    className="w-full h-14 bg-[#F97316] hover:bg-orange-600 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-orange-200"
                >
                    Subscribe Now
                </Button>
            </form>
        </section>
    );
};

export default StayConnected;
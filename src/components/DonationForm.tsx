import  { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const amounts = ["10", "25", "50", "100", "200", "300", "400", "500", "1000", "2000", "2500"];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <Card className="mx-auto max-w-250 shadow-lg border-none">
        <CardHeader className="bg-slate-900 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-center">FCHCC Membership & Donation</CardTitle>
        </CardHeader>
        
        <CardContent className="p-8">
          <form className="space-y-8">
            
            {/* Membership Question */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Are you a member of FCHCC? *</Label>
              <RadioGroup defaultValue="no" className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="m-yes" />
                  <Label htmlFor="m-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="m-no" />
                  <Label htmlFor="m-no">No</Label>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" placeholder="Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="example@mail.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmEmail">Confirm Email Address *</Label>
                <Input id="confirmEmail" type="email" required />
              </div>
            </div>

            {/* Address Section */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Address *</Label>
              <Input placeholder="Street Address" />
              <Input placeholder="Address Line 2" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input placeholder="City" />
                <Input placeholder="State / Province" />
                <Input placeholder="Zip Code" />
              </div>
            </div>

            {/* Business Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="bizPhone">Business Phone *</Label>
                <Input id="bizPhone" placeholder="(###) ###-####" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cellPhone">Cell Phone *</Label>
                <Input id="cellPhone" placeholder="(###) ###-####" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bizName">Business Name (if applicable)</Label>
                <Input id="bizName" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title *</Label>
                <Input id="jobTitle" />
              </div>
            </div>

            <Separator />

            {/* Amount Selection Grid */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Select an Option *</Label>
              <p className="text-sm text-muted-foreground italic mb-4">
                Note: A credit card processing fee will be added at checkout.
              </p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {amounts.map((amount) => (
                  <Button
                    key={amount}
                    type="button"
                    variant={selectedAmount === amount ? "default" : "outline"}
                    className="w-full"
                    onClick={() => setSelectedAmount(amount)}
                  >
                    ${amount}
                  </Button>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-slate-50 p-6 rounded-lg space-y-4 border">
              <Label className="text-base font-semibold">Method of Payment *</Label>
              <RadioGroup defaultValue="cc" className="space-y-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cc" id="cc" />
                  <Label htmlFor="cc" className="font-medium">Credit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="check" id="check" />
                  <Label htmlFor="check" className="font-medium">Check or Money Order</Label>
                </div>
              </RadioGroup>
              
              <div className="mt-4 p-4 bg-white rounded border border-blue-100 text-xs text-slate-600 leading-relaxed">
                <p className="font-bold mb-1">Mailing Address for Checks:</p>
                FCHCC Community Development, Inc.<br />
                P.O. Box 57972, Jacksonville, FL 32241
              </div>
            </div>

            {/* Total Display */}
            <div className="flex items-center justify-between bg-slate-900 p-6 rounded-lg text-white">
              <span className="text-xl font-bold">Total Amount</span>
              <span className="text-2xl font-mono">${selectedAmount || "0.00"}</span>
            </div>

            <Button className="w-full h-12 text-lg font-bold bg-amber-500 hover:bg-amber-600 text-white uppercase tracking-wider">
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonationForm;
import { CheckCircle2 } from 'lucide-react';

// Type definition for PolicyItem props
interface PolicyItemProps {
  text: string;
}

// Type definition for policy data
interface PolicyData {
  id: string;
  memberType: string;
  allowance: string;
}

const POLICY_DATA: PolicyData[] = [
  { id: 'student', memberType: 'Student/Individual Members', allowance: '1' },
  { id: 'small-biz-1', memberType: 'Small Business 1 / Non-Profit 1 501(c)3', allowance: '2' },
  { id: 'small-biz-2', memberType: 'Small Business 2 / Non-Profit 2 501(c)3', allowance: '4' },
  { id: 'non-profit-3', memberType: 'Non-Profit 3 501(c)3', allowance: '5' },
  { id: 'large-corp', memberType: 'Large Corporations', allowance: 'Unlimited' },
  { id: 'leadership', memberType: 'Leadership Trustees', allowance: 'Unlimited' },
  { id: 'strategic', memberType: 'Strategic Partners', allowance: 'Unlimited' },
];

const AssociatePolicy = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl font-bold text-black  mb-8 text-left ">
          Associate Member (AM) Policy
        </h2>

        {/* Policy Content Card */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 md:p-12">
          <p className="text-[#4A5565] text-sm leading-relaxed mb-6">
            An Associate Member is an employee of a FCHCC corporate or business member organization. Associate
            Members are entitled to member benefits, discounts, and attendance privileges to the monthly professional
            networking events. Below is the number of associates that FCHCC active members can bring to any networking
            event:
          </p>

          {/* Dynamic Policy List */}
          <div className="space-y-3">
            {POLICY_DATA.map((policy) => (
              <PolicyItem
                key={policy.id}
                text={`${policy.memberType} = ${policy.allowance}`}
              />
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-[14px] text-[#6A7282] italic mt-6">
          Benefits and fees are subject to change by the Board of Directors.
        </p>

      </div>
    </section>
  );
};

// Reusable List Item Component with typed props
const PolicyItem = ({ text }: PolicyItemProps) => (
  <div className="flex items-center gap-3">
    <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
    <span className="text-gray-600 text-sm font-medium">{text}</span>
  </div>
);

export default AssociatePolicy;
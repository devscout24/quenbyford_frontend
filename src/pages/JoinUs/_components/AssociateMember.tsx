import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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

const AssociatePolicy = () => {
  const { t } = useTranslation();

  const POLICY_DATA: PolicyData[] = [
    { id: 'student', memberType: t('join_us.associate_policy.member_types.student'), allowance: '1' },
    { id: 'small-biz-1', memberType: t('join_us.associate_policy.member_types.small_biz_1'), allowance: '2' },
    { id: 'small-biz-2', memberType: t('join_us.associate_policy.member_types.small_biz_2'), allowance: '4' },
    { id: 'non-profit-3', memberType: t('join_us.associate_policy.member_types.non_profit_3'), allowance: '5' },
    { id: 'large-corp', memberType: t('join_us.associate_policy.member_types.large_corp'), allowance: t('join_us.associate_policy.unlimited') },
    { id: 'leadership', memberType: t('join_us.associate_policy.member_types.leadership'), allowance: t('join_us.associate_policy.unlimited') },
    { id: 'strategic', memberType: t('join_us.associate_policy.member_types.strategic'), allowance: t('join_us.associate_policy.unlimited') },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl font-bold text-black  mb-8 text-left ">
          {t('join_us.associate_policy.title')}
        </h2>

        {/* Policy Content Card */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 md:p-12">
          <p className="text-[#4A5565] text-sm leading-relaxed mb-6">
            {t('join_us.associate_policy.description')}
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
          {t('join_us.associate_policy.footer_note')}
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
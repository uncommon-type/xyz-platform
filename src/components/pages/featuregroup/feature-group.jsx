/* eslint-disable jsx-a11y/no-redundant-roles */
import FeatureItem from './feature-item';

const features = [
  {
    title: '3x',
    subtitle: 'Faster Analysis Cycles',
    content:
      'Stop the tedium of manual subscription data review. Quickly access essential information from all subscriptions.',
    spanClassName:
      'w-[clamp(5.875rem,5.491rem+2.2vw,8.125rem)] h-[clamp(5.67rem,5.187rem+2.76vw,8.5rem)] bg-[rgb(var(--primary-2)/.3)] blur-[100px]',
  },
  {
    title: '10%+',
    subtitle: 'Savings on Costs',
    content:
      'Insights into both subscription data and expenditure lead to rapid, smart cost-cutting strategies.',
    spanClassName:
      'w-[clamp(8.33rem,6.551rem+10.17vw,18.75rem)] h-[clamp(3.78rem,2.974rem+4.6vw,8.5rem)] bg-[rgb(var(--primary-2)/.2)] blur-[100px]',
  },
  {
    title: '30',
    subtitle: 'Day Setup',
    content:
      'Implement swiftly with straightforward, no-code processes and ready-to-use integrations.',
    spanClassName:
      'w-[clamp(6.625rem,6.059rem+3.23vw,9.938rem)] h-[clamp(5.67rem,5.187rem+2.76vw,8.5rem)] bg-[rgb(var(--primary-2)/.3)] blur-[50px]',
  },
];

const FeatureGroup = () => (
  <section>
    <ul role="list" className="card-list grid grid-cols-thirds grid-gap-lg pb-3">
      {features.map(({ title, spanClassName, subtitle, content }) => (
        <FeatureItem
          key={title}
          className={spanClassName}
          title={title}
          subtitle={subtitle}
          content={content}
        />
      ))}
    </ul>
  </section>
);

export default FeatureGroup;

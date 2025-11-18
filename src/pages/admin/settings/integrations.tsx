import IntegrationCard from '../../../components/IntegrationCard';
import IntegrationTable from '../../../components/IntegrationTable';
// Import your images from assets
import amazonImg from '@assets/icons/amazon.png';
import kafkaImg from '@assets/icons/kafka.png';
import measurablImg from '@assets/icons/measurabl.png';
import powerBIImg from '@assets/icons/powerbi.png';
import tableauImg from '@assets/icons/tableau.png';
import zapierImg from '@assets/icons/zapier.png';

const integrations = [
  {
    image: amazonImg,
    title: 'Amazon QuickSight',
    description: 'Amazon BI service to create dashboards and interactive visualisations.',
  },
  {
    image: kafkaImg,
    title: 'Kafka',
    description: 'Real-time data streaming, event-driven architectures and messaging systems.',
  },
  {
    image: powerBIImg,
    title: 'Power BI',
    description: 'Microsoft BI service to create dashboards and data visualisations.',
  },
  {
    image: zapierImg,
    title: 'Zapier',
    description: 'Automation tool that connects various apps and services to automate workflows.',
  },
  {
    image: tableauImg,
    title: 'Tableau',
    description: 'BI service that helps seeing and transforming data into actionable insights.',
  },
  {
    image: measurablImg,
    title: 'Measurabl',
    description: 'Enable the push and pull of data to and from Measurabl via an API.',
  },
];

export default function IntegrationsSettingsPage() {
  return (
    <div className="p-6">
      <h3 className="mb-4 text-2xl font-semibold text-gray-800">Choose a Service to Connect</h3>
      <p className="text-sm text-gray-500">Connect BraveGen to other tools you use..</p>

      <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map(item => (
          <IntegrationCard
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <h3 className="mb-4 text-2xl font-semibold text-gray-800">Existing Connections</h3>

      <IntegrationTable />
    </div>
  );
}

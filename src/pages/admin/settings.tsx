import { Content } from '../../components/Content';
import SettingsMenu from '../../settings/SettingsMenu';

export default function SettingsPage() {
  return (
    <div className="flex h-full min-h-screen">
      <SettingsMenu />
      <main className="flex-1 p-6">
        <Content title="Settings" />
      </main>
    </div>
  );
}

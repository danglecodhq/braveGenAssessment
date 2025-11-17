interface ContentProps {
  title?: string;
}

export function SettingPageContent(props: ContentProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{props.title}</h1>
      <p className="text-gray-600">Manage {props.title} structure here.</p>
    </div>
  );
}

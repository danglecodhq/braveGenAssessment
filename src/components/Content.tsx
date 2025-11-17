interface ContentProps {
  title?: string;
}

export function Content(props: ContentProps) {
  return (
    <div className="flex flex-col flex-wrap sm:flex-row">
      <div className="relative mx-auto mb-12 max-w-screen-xl">
        <h3 className="text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
          {props.title || 'usage'} Page
        </h3>
        <p className="mt-6 text-base leading-6 text-gray-500">Some content here...</p>
      </div>
    </div>
  );
}

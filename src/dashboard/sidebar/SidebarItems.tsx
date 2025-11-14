import { Link, useLocation } from 'react-router-dom';
import { data } from './data';

const style = {
  inactive: 'text-white',
  active: 'font-medium text-green-400 hover:text-green-400',
  link: 'flex flex-col items-center justify-center p-4 w-full hover:text-white',
};

export function SidebarItems() {
  const { pathname } = useLocation();

  const main = data.slice(0, -1);
  const last = data[data.length - 1];

  return (
    <div className="flex grow flex-col">
      {/* Centered main items */}
      <div className="flex grow flex-col items-center justify-center">
        {main.map(item => (
          <div key={item.title} className="w-full">
            <Link to={item.link}>
              <span
                className={`${style.link} ${
                  item.link === pathname ? style.active : style.inactive
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="mt-2 text-center text-xs">{item.title}</span>
              </span>
            </Link>
          </div>
        ))}
      </div>

      {/* Bottom settings item */}
      {last && (
        <div className="w-full">
          <Link to={last.link}>
            <span
              className={`${style.link} ${last.link === pathname ? style.active : style.inactive}`}
            >
              <span className="text-xl">{last.icon}</span>
              <span className="mt-2 text-center text-xs">{last.title}</span>
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}

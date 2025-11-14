import { Link, useLocation } from 'react-router-dom';
import { data } from './data';

const style = {
  inactive: 'text-white',
  active: 'font-medium text-green-400 hover:text-green-400',
  link: 'flex flex-col items-center justify-center p-4 w-full hover:text-white',
};

export function SidebarItems() {
  const { pathname } = useLocation();

  return (
    <ul className="flex grow flex-col">
      {data.map((item, index) => (
        <li key={item.title} className={index === data.length - 1 ? 'mt-auto' : ''}>
          <Link to={item.link}>
            <span
              className={`${style.link} ${item.link === pathname ? style.active : style.inactive}`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="mt-2 text-center text-xs">{item.title}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

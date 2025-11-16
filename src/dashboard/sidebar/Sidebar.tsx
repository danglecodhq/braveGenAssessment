import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logos/Logo.png';
import { useDashboardContext } from '../Provider';
import css from '../style.module.css';

import { sidebarData } from './sidebarData';

interface SidebarProps {
  mobileOrientation: 'start' | 'end';
}

const style = {
  mobileOrientation: {
    start: 'left-0 ',
    end: 'right-0 lg:left-0',
  },
  container: 'flex flex-col h-full',
  close: 'duration-700 ease-out hidden transition-all w-12',
  default: `bg-slate-900 h-screen overflow-y-auto top-0 lg:absolute 
  lg:block lg:z-40`,
  open: `absolute duration-500 ease-in transition-all
   w-8/12 z-40 sm:w-5/12 md:w-32`,
};

const menuItemstyle = {
  inactive: 'text-neutral-400',
  active: `
    font-bold  text-lime-600 bg-neutral-700/30
  `,
  link: `
    flex flex-col items-center justify-center w-full
    p-1 rounded cursor-pointer stroke-[0.75]
    stroke-neutral-400 
    hover:text-lime-600 hover:bg-neutral-700/30
    transition-colors duration-100
  `,
};

export function Sidebar(props: SidebarProps) {
  const { sidebarOpen } = useDashboardContext();
  const { pathname } = useLocation();

  const main = sidebarData.slice(0, -1);
  const lastMenuItem = sidebarData[sidebarData.length - 1];
  return (
    <aside
      className={`${style.default} 
        ${style.mobileOrientation[props.mobileOrientation]} 
        ${sidebarOpen ? style.open : style.close} ${css.scrollbar}`}
    >
      <div className={style.container}>
        <div className="sticky top-0 z-10 mb-6 flex h-20 items-center justify-center bg-slate-900">
          <img src={Logo} width={30} height={30} alt="Logo" />
        </div>

        <div className="flex grow flex-col">
          {/* Centered main items */}
          <div className=" flex grow flex-col items-center justify-center">
            {main.map(item => (
              <div key={item.title} className="w-full px-3">
                <Link to={item.link}>
                  <span
                    className={` ${
                      item.link === pathname ? menuItemstyle.active : menuItemstyle.inactive
                    } ${menuItemstyle.link}`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="mt-2 text-center text-xs">{item.title}</span>
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom settings item */}
          {lastMenuItem && (
            <div className="w-full">
              <Link to={lastMenuItem.link}>
                <span
                  className={`${menuItemstyle.link} ${
                    pathname.includes(lastMenuItem.link)
                      ? menuItemstyle.active
                      : menuItemstyle.inactive
                  }`}
                >
                  <span className="text-xl">{lastMenuItem.icon}</span>
                  <span className="mt-2 text-center text-xs">{lastMenuItem.title}</span>
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

import { useDashboardContext } from '../Provider';
import css from '../style.module.css';
import { SidebarHeader } from './SidebarHeader';
import { SidebarItems } from './SidebarItems';

interface SidebarProps {
  mobileOrientation: 'start' | 'end';
}

const style = {
  mobileOrientation: {
    start: 'left-0 ',
    end: 'right-0 lg:left-0',
  },
  container: 'flex flex-col h-full',
  close: 'duration-700 ease-out hidden transition-all lg:w-24',
  default: 'bg-slate-900 h-screen overflow-y-auto top-0 lg:absolute lg:block lg:z-40',
  open: 'absolute duration-500 ease-in transition-all w-8/12 z-40 sm:w-5/12 md:w-64',
};

export function Sidebar(props: SidebarProps) {
  const { sidebarOpen } = useDashboardContext();
  return (
    <aside
      className={`${style.default} 
        ${style.mobileOrientation[props.mobileOrientation]} 
        ${sidebarOpen ? style.open : style.close} ${css.scrollbar}`}
    >
      <div className={style.container}>
        <SidebarHeader />
        <SidebarItems />
      </div>
    </aside>
  );
}

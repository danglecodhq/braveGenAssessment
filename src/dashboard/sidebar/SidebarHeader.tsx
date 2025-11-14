import Logo from '../../assets/logos/Logo.png';

export function SidebarHeader() {
  return (
    <div className="sticky top-0 z-10 mb-6 flex h-20 items-center justify-center bg-slate-900">
      <img src={Logo} width={50} height={50} alt="Logo" />
    </div>
  );
}

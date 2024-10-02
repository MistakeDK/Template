export const IconBuilder = ({ name, clsConfig }: { name: string; clsConfig?: string }) => {
  return <i className={`iconify ${name} ${clsConfig}`} />;
};

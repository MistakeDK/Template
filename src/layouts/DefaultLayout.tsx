interface IDefaultLayoutProps {
  children?: React.ReactNode;
}

export const DefaultLayout = ({ children }: IDefaultLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

interface IDefaultLayoutProps {
  children?: React.ReactNode;
  dynamicProp: string;
}

export const AboutLayout = ({ children, dynamicProp }: IDefaultLayoutProps) => {
  return (
    <>
      <Navbar />
      <p>{dynamicProp}</p>
      {children}
    </>
  );
};

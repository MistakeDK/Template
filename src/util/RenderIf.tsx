interface prop {
  children: React.ReactNode;
  condition: boolean;
}
export const RenderIf = ({ children, condition }: prop) => {
  return condition ? <>{children}</> : null;
};

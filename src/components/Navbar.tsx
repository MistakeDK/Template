import { Link } from "@nextui-org/react";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link
          isBlock
          onPress={() => {
            navigate({ to: "/" });
          }}
        >
          Home
        </Link>
        <Link
          isBlock
          onPress={() => {
            navigate({ to: "/about" });
          }}
        >
          About
        </Link>
      </div>
      <hr />
    </>
  );
};

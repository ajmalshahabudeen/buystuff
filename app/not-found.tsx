import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh]">
      NotFoundPage
      <Button startContent={<HomeIcon />}>Go Home</Button>
    </div>
  );
};

export default NotFoundPage;

const HomeIcon = () => {
  return <Icon className="w-6 h-6" icon={"line-md:home"} />;
};

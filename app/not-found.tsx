"use client";
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const rc = useRouter();

  return (
    <div className="flex flex-col gap-5 justify-center items-center min-h-[80vh]">
      <p className="text-9xl font-extralight">404</p>
      <p className="uppercase text-5xl text-center font-thin">Page not found</p>
      <Button
        className="text-xl uppercase"
        startContent={<HomeIcon />}
        variant="shadow"
        onClick={() => rc.replace("/")}
      >
        Go Home
      </Button>
    </div>
  );
};

export default NotFoundPage;

const HomeIcon = () => {
  return <Icon className="w-6 h-6" icon={"line-md:home"} />;
};

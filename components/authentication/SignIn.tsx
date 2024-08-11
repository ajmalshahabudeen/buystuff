import { poppins } from "@/config/fonts";
import { GoogleSignInAction } from "@/utils/authActions/signInActions";
import { Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export default function GoogleSignIn() {
  return (
    <form
      action={async () => {
        await GoogleSignInAction()
      }}
    >
      <Button type="submit" className={poppins.className + " w-full"}>
        <p className="inline-flex items-center justify-center gap-4 px-7 font-medium">
        <Icon icon={"logos:google-icon"} />
          Sign in with Google</p>
      </Button>
    </form>
  );
}

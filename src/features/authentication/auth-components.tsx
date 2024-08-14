import React from "react";
import { Button } from "@/components/ui/button";

export function SignOut({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      // action={async () => {
      //   "use server";
      //   // TODO: auth
      //   await signOut();
      // }}
      className="w-full"
    >
      <Button variant="ghost" className="w-full p-0" {...props}>
        SignOut
      </Button>
    </form>
  );
}

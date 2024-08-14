import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="flex flex-grow flex-col items-center justify-center space-y-4">
        <h1 className="text-6xl font-bold"> SST ion todo next</h1>
        <p className="text-sm text-muted-foreground">
          This site is a demo application
        </p>
        <div className="space-x-5">
          <Button asChild>
            <Link href="/todos">Get started</Link>
          </Button>
          <Button asChild variant="destructive">
            <Link href="https://github.com/gusugusu1018">Source code</Link>
          </Button>
        </div>
      </div>
    </>
  );
}

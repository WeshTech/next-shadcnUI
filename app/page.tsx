import { Button } from "@/components/ui/button";
import { DatabaseZap } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center">
      <p className="text-orange-500">You are in the home page</p>
      <Button size="lg" className="rounded-full">
        <DatabaseZap />
        Optimize Database
      </Button>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">
            Guess the country
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>

        <CardFooter className="flex justify-center">
          <Button size="lg" asChild>
            <Link className="w-full max-w-xs text-lg py-6" href="/quiz">
              Test your knowledge of world flags
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

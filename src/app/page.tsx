import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";

const modes = [
  { label: "World flags", mode: "flags" },
  { label: "World capitals", mode: "capitals" },
  { label: "World flags and capitals", mode: "mixed" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background text-foreground">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">
            Guess the country
          </CardTitle>
          <CardDescription>Test your knowledge of</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 items-center justify-center">
          {modes.map((mode) => (
            <Button key={mode.mode} size="lg" asChild>
              <Link
                className="w-full max-w-xs text-lg py-6"
                href={`/quiz/${mode.mode}`}
              >
                {mode.label}
              </Link>
            </Button>
          ))}
        </CardContent>

        <CardFooter className="flex justify-end">
          <ModeToggle />
        </CardFooter>
      </Card>
    </main>
  );
}

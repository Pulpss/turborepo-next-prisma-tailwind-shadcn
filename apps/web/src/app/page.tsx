import { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "ui";

export const metadata: Metadata = {
  title: "Web - Turborepo Example",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pb-8 pt-16 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Web
          <span className="from-brandred to-brandblue block bg-gradient-to-r bg-clip-text px-2 text-transparent">
            Turborepo Example
          </span>
        </h1>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/45542107?v=4"
              alt="@Pulpss"
            />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
        </div>
      </main>
    </div>
  );
}

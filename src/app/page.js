import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

      <a className="text-white text-lg px-8 bg-green-700 border rounded-md p-3" href="/duas">
      <span className=" text-xl mr-2 animate-pulse">&larr;</span> GO TO DUA PAGE
      </a>
    </main>
  );
}

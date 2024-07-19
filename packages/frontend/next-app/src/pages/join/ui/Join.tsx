import { JoinCard } from "@/features/join/index.tsx";

export default function Join() {
  console.log("");
  return (
    <main className="flex flex-col items-center pt-[72px] max-w-[640px] mx-auto">
      <h2 className="font-notoSansKr text-4xl font-bold text-primary mb-16">강쥐조아</h2>
      <JoinCard />
    </main>
  );
}

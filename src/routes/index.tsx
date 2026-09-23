import { useRoute } from "@/hooks/use-route";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { DetailPage } from "@/components/portfolio/DetailPage";
import { TICKER_ITEMS } from "@/components/binder/content";

export function Index() {
  const { segments, navigate } = useRoute();
  const isHome = segments.length === 0;
  const activeTab = segments[0] === "about" ? "core" : (segments[0] ?? "");

  return (
    <main className="min-h-screen overflow-x-hidden">
      <h1 className="sr-only">Janya — student founder, AI educator, researcher</h1>
      <Nav activeTab={activeTab} navigate={navigate} />
      {isHome ? (
        <>
          <Hero navigate={navigate} />
          <Marquee items={TICKER_ITEMS} />
        </>
      ) : (
        <DetailPage segments={segments} navigate={navigate} />
      )}
    </main>
  );
}

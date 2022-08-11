import { PageHead } from "@/common/components/PageHead";

export default function Home() {
  return (
    <div className="h-full">
      <PageHead
        append={false}
        description="Mint page description"
        name="Mint"
      />
      <section className="grid place-content-center h-full">
        <span>mint page</span>
      </section>
    </div>
  );
}

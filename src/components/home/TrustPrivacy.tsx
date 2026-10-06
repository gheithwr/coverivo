import Link from "next/link";
import { Container } from "@/components/ui/Container";

const points = [
  { title: "Secure information handling", body: "Customer details should be collected and stored using modern security practices." },
  { title: "Privacy-first experience", body: "We ask only what is needed for the coverage conversation you started." },
  { title: "Transparent AI disclosure", body: "Coverivo AI is educational and organizational. It does not bind coverage." },
  { title: "Human oversight", body: "Licensed professionals remain available for recommendations, placement, and judgment." },
  { title: "Clear consent", body: "Quote and contact forms require consent before Coverivo follows up." },
  { title: "Easy access to privacy policy", body: "You can review how information is used before submitting details." },
];

export function TrustPrivacy() {
  return (
    <section className="section-pad bg-[#F3F7FC]">
      <Container>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-[#071B36] sm:text-4xl">
          Your information deserves protection too.
        </h2>
        <p className="mt-4 max-w-2xl text-[#5b6b82]">
          Insurance involves personal information. Coverivo is designed to handle it carefully, without unsupported
          security claims or guaranteed outcomes.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <article key={point.title} className="surface-card p-5">
              <h3 className="text-base font-semibold text-[#071B36]">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6b82]">{point.body}</p>
            </article>
          ))}
        </div>
        <Link href="/privacy" className="mt-8 inline-block text-sm font-semibold text-[#1769FF]">
          Read the Privacy Policy
        </Link>
      </Container>
    </section>
  );
}

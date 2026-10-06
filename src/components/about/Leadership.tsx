import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LeadershipMessage } from "@/components/about/LeadershipMessage";

const leaders = [
  {
    id: "ceo",
    name: "Fadi Elkhatib",
    title: "Founder & Chief Executive Officer",
    heading: "A Message from Our CEO",
    imageSrc: "/brand/fadi-elkhatib.webp",
    imageAlt: "Fadi Elkhatib, Founder and Chief Executive Officer of Coverivo",
    intro:
      "Fadi leads Coverivo as an independent insurance broker, bringing licensed professionals and intelligent technology together so clients can make informed coverage decisions.",
    paragraphs: [
      "At Coverivo, we believe insurance should provide more than a policy — it should provide confidence.",
      "Our mission is to make the insurance experience simpler, more transparent, and more personal. As an independent insurance broker, our responsibility is to understand the needs of our clients, help them explore appropriate coverage options, and support them in making informed decisions.",
      "We are building Coverivo around the combination of human expertise and intelligent technology. By using modern digital tools and AI capabilities alongside experienced insurance professionals, we aim to reduce complexity, improve the customer experience, and make it easier for individuals and businesses to navigate their insurance needs.",
      "Technology may change how insurance is delivered, but our commitment remains personal. Trust, integrity, transparency, and service are at the center of every client relationship we build.",
      "Whether you are protecting your family, your home, your vehicle, or your business, our goal is to be a brokerage you can rely on today and for the years ahead.",
      "Thank you for placing your trust in Coverivo. We look forward to serving you.",
    ],
  },
  {
    id: "president",
    name: "Mohammed Elkhatib",
    title: "President",
    heading: "A Message from Our President",
    imageSrc: "/brand/moe-president.webp",
    imageAlt: "Mohammed Elkhatib, President of Coverivo",
    intro:
      "Mohammed Elkhatib focuses on putting clients first and building a brokerage experience around service, transparency, and lasting relationships.",
    paragraphs: [
      "At Coverivo, our focus is simple: put our clients first and build an insurance experience around their needs.",
      "Insurance is an important part of protecting what people and businesses have worked hard to build. Our responsibility as a brokerage is to help make that process easier to understand, easier to navigate, and more responsive to each client's individual circumstances.",
      "We are building Coverivo with a strong commitment to service, transparency, and long-term relationships. By combining the knowledge of our insurance professionals with modern digital tools, we can create a more efficient experience while maintaining the personal attention our clients deserve.",
      "Our goal is not simply to help clients find coverage. We want to become a trusted insurance partner they can turn to as their needs change and grow.",
      "Every interaction is an opportunity to earn that trust, and we intend to earn it through professionalism, responsiveness, and a genuine commitment to the people and businesses we serve.",
      "Thank you for choosing Coverivo. We look forward to building a lasting relationship with you.",
    ],
  },
  {
    id: "coo",
    name: "Ragheb Gheith",
    title: "Chief Operating Officer (COO)",
    heading: "A Message from Our Chief Operating Officer",
    imageSrc: "/brand/ragheb-coo.webp",
    imageAlt: "Ragheb Gheith, Chief Operating Officer of Coverivo",
    intro:
      "Ragheb Gheith leads Coverivo operations so every step of the insurance experience is clear, efficient, and dependable.",
    paragraphs: [
      "At Coverivo, great service starts with great operations.",
      "Our responsibility is to make every step of the insurance experience as clear, efficient, and dependable as possible — from the initial request and exploration of coverage options to ongoing policy service and customer support.",
      "We are designing our operations around the client. That means combining knowledgeable people, streamlined processes, automation, and intelligent technology to reduce unnecessary complexity and help our team respond more effectively to our clients' needs.",
      "Technology and AI give us powerful tools to improve speed, consistency, and accessibility, but technology alone does not create an exceptional customer experience. The people behind the technology, the quality of our processes, and our commitment to service are equally important.",
      "As Coverivo grows, we will continue building an organization that values operational excellence, accountability, security, and continuous improvement.",
      "Our goal is to create an insurance brokerage experience that clients can depend on — one that is modern and efficient while remaining personal and service-driven.",
    ],
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="section-pad bg-[#F8FAFC]" aria-labelledby="leadership-heading">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1769FF]">Leadership</p>
        <h2 id="leadership-heading" className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[#071B36] sm:text-4xl">
          People behind the brokerage.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5b6b82] sm:text-lg">
          Coverivo is led by licensed insurance professionals who combine human expertise with intelligent technology.
          We are an independent insurance broker, not an insurance carrier.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {leaders.map((leader) => (
            <Link
              key={leader.id}
              href={`/about#${leader.id}`}
              className="surface-card overflow-hidden transition hover:border-[#1769FF]/40"
            >
              <Image
                src={leader.imageSrc}
                alt={leader.imageAlt}
                width={640}
                height={800}
                className="aspect-[4/5] h-auto w-full object-cover object-[center_18%]"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="p-5">
                <p className="text-base font-semibold text-[#071B36]">{leader.name}</p>
                <p className="mt-1 text-sm text-[#1769FF]">{leader.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#5b6b82]">{leader.intro}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-24">
          {leaders.map((leader, index) => (
            <LeadershipMessage
              key={leader.id}
              id={leader.id}
              heading={leader.heading}
              name={leader.name}
              title={leader.title}
              imageSrc={leader.imageSrc}
              imageAlt={leader.imageAlt}
              paragraphs={leader.paragraphs}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

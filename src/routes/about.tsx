import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { skills, industries } from "@/data/career";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sierra Langford — Strategist, Storyteller, Producer" },
      {
        name: "description",
        content:
          "A songwriter at heart who builds communications, programs and content across healthcare, health technology, AI, cybersecurity and small business.",
      },
      { property: "og:title", content: "About Sierra Langford" },
      {
        property: "og:description",
        content:
          "A songwriter at heart who builds communications, programs and content across healthcare, AI, cybersecurity and small business.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="grid gap-12 md:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="eyebrow">About</p>
          <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
            I have always been interested in the moment when someone stops scrolling and actually cares.
          </h1>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-foreground/85">
            <p>
              I'm a songwriter at heart, which is probably why storytelling has always been at the center of my
              work. I look for the human story underneath the first answer, then translate complicated work into
              something people understand and remember.
            </p>
            <p>
              That instinct has taken me through healthcare and health technology, internal and executive
              communications, AI and emerging technology, cybersecurity, field marketing, events, podcasts,
              newsletters, customer stories, social media and brand work. I also founded and continue to run
              Strive Society, a creative marketing practice built around long-term client partnerships.
            </p>
            <p>
              In practice, that means I have built a podcast that won a Gold Stevie Award, a client newsletter
              that reached 3,307 people at a 70 percent open rate, a company wide event for roughly 1,000
              attendees, an employee advocacy program with 34 members, 18 healthcare case studies, and a
              national roadshow and executive dinner program for an AI product launch.
            </p>
            <p>
              Songwriting is still how I think about structure. Tension, clarity, the turn, the line that makes
              someone lean in. A case study and a chorus are solving the same problem: give a person one true
              thing they will still remember tomorrow.
            </p>
          </div>
        </div>

        <div>
          <img
            src={img.portrait}
            alt="Professional portrait of Sierra Langford"
            className="w-full object-cover"
            width={1000}
            height={1000}
          />
          <div className="mt-8 border-t border-border pt-6">
            <p className="eyebrow">Education</p>
            <p className="mt-3 font-display text-2xl leading-snug">University of Tennessee, Knoxville</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Bachelor of Science in Communication, Journalism and Electronic Media
              <br />
              Creative Media Concentration
              <br />
              Magna Cum Laude · Graduated in three years · GPA 3.81
            </p>
          </div>
        </div>
      </div>

      <section className="mt-20 border-t border-border pt-12">
        <p className="eyebrow">Work Philosophy</p>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          {[
            {
              h: "Start with the person, not the platform",
              p: "Every technical project has someone whose day changes because of it. That person is the story, and usually the reason the work gets funded.",
            },
            {
              h: "Build systems, not one-offs",
              p: "A newsletter, an event or a program should still run when I'm not in the room. I leave behind calendars, templates, briefs and process.",
            },
            {
              h: "Make the result measurable",
              p: "Open rates, views, attendance, adoption, pass rates, hours saved. Creative work earns more room when it can show what it did.",
            },
          ].map((c) => (
            <div key={c.h} className="border-t border-border pt-5">
              <h2 className="text-2xl leading-snug">{c.h}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-border pt-12">
        <p className="eyebrow">Skills</p>
        <div className="mt-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h2 className="text-xl">{group}</h2>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-border pt-12">
        <p className="eyebrow">Industries</p>
        <p className="mt-5 max-w-3xl leading-relaxed text-foreground/85">
          I have built work across {industries.join(", ").toLowerCase()}.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {industries.map((i) => (
            <span key={i} className="border border-border bg-secondary px-3 py-1.5 text-sm">
              {i}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-10 border-t border-border pt-12 md:grid-cols-[1fr_0.9fr] md:items-center">
        <div>
          <p className="eyebrow">Outside the work</p>
          <h2 className="mt-4 text-3xl leading-tight">The creative habits that feed the professional ones.</h2>
          <ul className="mt-6 space-y-3 text-[1.02rem] leading-relaxed text-foreground/85">
            <li>
              <strong>Songwriting and piano.</strong> Where I learned structure, tension and how to cut a line
              that isn't earning its place.
            </li>
            <li>
              <strong>Photography and video.</strong> Shooting my own work means I can see the visual story in a
              project before anyone writes a brief.
            </li>
            <li>
              <strong>Hiking.</strong> Most of my best story angles show up somewhere in the second mile.
            </li>
            <li>
              <strong>Personal development and learning.</strong> Currently focused on practical AI, systems
              design and interviewing.
            </li>
            <li>
              <strong>Community and entrepreneurship.</strong> Running my own practice keeps me close to what
              small teams actually need.
            </li>
          </ul>
          <Link to="/work" className="mt-8 inline-block border border-foreground px-5 py-3 text-sm hover:bg-secondary">
            See the work
          </Link>
        </div>
        <img
          src={img.photographyCanon}
          alt="Sierra Langford holding a Canon camera while photographing on location"
          loading="lazy"
          className="w-full object-cover"
        />
      </section>
    </div>
  );
}

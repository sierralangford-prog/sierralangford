import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/lib/images";

export const Route = createFileRoute("/strengths")({
  head: () => ({
    meta: [
      { title: "Personality and Strengths — Sierra Langford" },
      {
        name: "description",
        content:
          "How I work: Enneagram 3 with a strong 7 wing, ENFP, high I and D on DISC, and what each of those actually looks like on a team.",
      },
      { property: "og:title", content: "Personality and Strengths — Sierra Langford" },
      {
        property: "og:description",
        content: "Enneagram 3w7, ENFP and high I/D on DISC, translated into how I lead projects and teams.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/strengths" },
    ],
    links: [{ rel: "canonical", href: "/strengths" }],
  }),
  component: Strengths,
});

const profiles = [
  {
    label: "Enneagram",
    value: "Type 3, strong 7",
    meaning:
      "The Achiever with the Enthusiast close behind. I am motivated by real, visible results and I move fast, but the 7 keeps the work playful and curious instead of purely competitive.",
    atWork: [
      "I set a measurable target early and hold the team to it",
      "I would rather ship something good and improve it than wait for perfect",
      "I bring energy into rooms that have gone flat",
    ],
    watchFor:
      "I have to make room for rest and for the slower parts of a project, and to measure success by more than output.",
  },
  {
    label: "Myers-Briggs",
    value: "ENFP",
    meaning:
      "People first, possibilities first. I connect ideas across teams that do not usually talk to each other, and I get to the human story quickly because I genuinely like the people in it.",
    atWork: [
      "Strong interviewer: leaders tell me the real version, not the press release",
      "Comfortable in ambiguity and in brand new programs",
      "I turn a loose brief into a concrete concept fast",
    ],
    watchFor:
      "I pair the idea generation with systems, calendars and templates so the vision does not depend on my attention alone.",
  },
  {
    label: "DISC",
    value: "High I, high D",
    meaning:
      "Influence and Drive together. I persuade and build relationships, and I also take ownership and make decisions rather than waiting for permission.",
    atWork: [
      "I can pitch, close and then deliver the work",
      "I get cross functional buy in without formal authority",
      "I take the ambiguous project nobody owns yet",
    ],
    watchFor: "I slow down deliberately for detail-oriented teammates who need the full context before moving.",
  },
];

function Strengths() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="grid gap-12 md:grid-cols-[1fr_0.7fr] md:items-start">
        <div>
          <p className="eyebrow">Personality and Strengths</p>
          <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
            How I work, and why teams tend to hand me the thing nobody owns yet.
          </h1>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-foreground/85">
            I find assessments useful for one reason: they make it easier for a team to work with me quickly.
            Here is the honest version, including what I have to manage.
          </p>
        </div>
        <img
          src={img.connectionStage}
          alt="Sierra Langford presenting on stage at a company wide conference"
          loading="lazy"
          className="w-full object-cover"
        />
      </div>

      <div className="mt-16 space-y-14">
        {profiles.map((p, index) => (
          <section key={p.label} className="rule-top grid gap-8 pt-6 md:grid-cols-[0.6fr_1.4fr]">
            <div>
              <p className="eyebrow">{p.label}</p>
              <p className="mt-3 font-display text-3xl leading-snug">{p.value}</p>
              {index === 0 ? (
                <img
                  src={img.enneagramResults}
                  alt="Sierra Langford's Enneagram assessment chart, led by Type 3 with Type 7 also high"
                  loading="lazy"
                  className="mt-6 w-full border border-border bg-card object-contain"
                />
              ) : null}
            </div>
            <div>
              <p className="leading-relaxed text-foreground/85">{p.meaning}</p>
              <p className="eyebrow mt-6">What that looks like at work</p>
              <ul className="mt-3 space-y-2 text-[1.02rem] leading-relaxed text-foreground/85">
                {p.atWork.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <p className="mt-6 border-l-2 border-border pl-4 text-sm leading-relaxed text-muted-foreground">
                What I watch for: {p.watchFor}
              </p>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-20 border-t border-border pt-12">
        <p className="eyebrow">In short</p>
        <h2 className="mt-4 max-w-3xl text-3xl leading-tight">
          Fast, people driven and results obsessed, with the systems underneath so the work outlasts me.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/work" className="bg-foreground px-5 py-3 text-sm text-primary-foreground hover:opacity-90">
            See the work
          </Link>
          <Link to="/contact" className="border border-foreground px-5 py-3 text-sm hover:bg-secondary">
            Contact me
          </Link>
        </div>
      </section>
    </div>
  );
}

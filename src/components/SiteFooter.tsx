import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Sierra Langford</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Marketing and communications strategist. Franklin, Tennessee.
          </p>
        </div>

        <div>
          <p className="eyebrow">Site</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="link-underline">About</Link></li>
            <li><Link to="/work" className="link-underline">Work</Link></li>
            <li><Link to="/timeline" className="link-underline">Experience</Link></li>
            <li><Link to="/recognition" className="link-underline">Testimonials</Link></li>
            <li><Link to="/strengths" className="link-underline">Strengths</Link></li>
            <li><Link to="/resume" className="link-underline">Resume</Link></li>
            <li><Link to="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Elsewhere</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="https://www.linkedin.com/in/sierralangford1/" target="_blank" rel="noreferrer" className="link-underline">
                Connect on LinkedIn
              </a>
            </li>
            <li>
              <a href="https://podcast.cerecore.net/" target="_blank" rel="noreferrer" className="link-underline">
                Listen to the podcast
              </a>
            </li>
            <li>
              <a href="https://sierralangfordphotography.mypixieset.com/" target="_blank" rel="noreferrer" className="link-underline">
                View photography
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sierra Langford. Private and client materials are shared only with approval.
      </div>
    </footer>
  );
}

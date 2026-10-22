import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Github,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
  Download,
  Send,
  Code2,
  Database,
  Wrench,
  Star,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Heart,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Deliwe Anastacia Klaas | Full-Stack Developer & Data Analytics Specialist",
      },
      {
        name: "description",
        content:
          "Portfolio of Deliwe Anastacia Klaas — Full-Stack Developer & Data Analytics Specialist in Johannesburg, South Africa. Combining clean full-stack code, data analytics, and AI tools into beautiful, high-performing digital experiences.",
      },
      {
        property: "og:title",
        content: "Deliwe Anastacia Klaas | Full-Stack Developer & Data Analytics Specialist",
      },
      {
        property: "og:description",
        content:
          "Combining clean full-stack code, data analytics, and AI tools into beautiful, high-performing digital experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Deliwe Anastacia Klaas — Portfolio" },
      {
        name: "twitter:description",
        content:
          "Full-Stack Developer & Data Analytics Specialist in Johannesburg, South Africa.",
      },
    ],
  }),
  component: Index,
});

// ---------- data ----------

const EMAIL = "deliweanastaciaklaas@gmail.com";
const PHONE = "+27680175451";
const GITHUB = "https://github.com/Anastacia202";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SKILL_GROUPS = [
  {
    icon: Code2,
    title: "Languages & Frameworks",
    skills: ["JavaScript", "PHP", "Python", "HTML5", "CSS3", "Express.js", "SQL"],
  },
  {
    icon: Database,
    title: "Data & AI Tools",
    skills: [
      "Data Querying",
      "Prompt Engineering",
      "Streamlit",
      "Sentiment Analysis",
      "Google AI Skills Acceleration Certified",
    ],
  },
  {
    icon: Wrench,
    title: "Developer & Automation Tools",
    skills: ["GitHub", "GitHub Desktop", "VS Code", "Netlify", "Lovable.dev", "n8n"],
  },
  {
    icon: Star,
    title: "Core Competencies",
    skills: [
      "Full-Stack Web Development",
      "UI/UX Design",
      "Agile Collaboration",
      "API Integration",
      "Relational Data Analytics",
    ],
  },
];

const PROJECTS = [
  {
    title: "AI Content Generator & Prompt Library App",
    description:
      "Built an interactive web application featuring a structured prompt library and AI tools to optimize workflow efficiency.",
    tags: ["JavaScript", "AI Tools", "Prompt Engineering", "Web APIs"],
  },
  {
    title: "Streamlit Sentiment Analysis Dashboard",
    description:
      "Developed an interactive sentiment analysis dashboard interface processing textual data and visualizing sentiment patterns.",
    tags: ["Python", "Streamlit", "Machine Learning / NLP"],
  },
  {
    title: "E-Commerce Clothing Brand Web Application",
    description:
      "Developed a responsive frontend e-commerce platform with dynamic styling, managed version control via GitHub Desktop, and deployed on Netlify.",
    tags: ["HTML5", "CSS3", "JavaScript", "Netlify", "GitHub"],
  },
  {
    title: "NextEdge IT Solutions Client Platform",
    description:
      "Built web interfaces, organized component architectures, and delivered client-facing frontend web applications with cross-device responsiveness.",
    tags: ["HTML5", "CSS3", "JavaScript", "Netlify"],
  },
  {
    title: "Mental Health Chatbot Interface Concept",
    description:
      "Designed and prototyped a user-friendly frontend chatbot interface focused on accessible mental health support.",
    tags: ["UI/UX Design", "JavaScript", "Prototyping"],
  },
];

const EDUCATION = [
  {
    title: "CAPACITI Demand Academy",
    period: "August 2026 – Present (Ongoing)",
    subtitle: "Full Stack Development & Data Analytics — 12-Month Programme, Braamfontein",
    detail:
      "Focus: Advanced full-stack engineering and relational data analytics competencies.",
  },
  {
    title: "CAPACITI Google AI Skills Acceleration Programme",
    period: "June 2026 – August 2026",
    subtitle: "Six professional certifications earned",
    detail:
      "AI tools, prompt engineering, and responsible deployment.",
  },
  {
    title: "IT Varsity / FNB App Academy",
    period: "2025",
    subtitle: "Certificate in Full Stack Development",
    detail:
      "Practical experience in app strategy, API integration, database management (SQL/NoSQL), and version control.",
  },
  {
    title: "South View High School",
    period: "2017 – 2021",
    subtitle: "National Senior Certificate",
    detail: "Majors: History, Mathematical Literacy, English.",
  },
];

const EXPERIENCE = [
  {
    role: "Web Developer (Freelance / Collaborative)",
    company: "NextEdge IT Solutions",
    period: "April 2026 – Present",
    points: [
      "Developed and delivered client-facing frontend web applications using HTML, CSS, JavaScript, and Netlify.",
      "Collaborated with team members to troubleshoot bugs and ensure cross-device responsiveness.",
    ],
  },
  {
    role: "Sales Representative",
    company: "Old Mutual",
    period: "April 2024 – April 2025",
    points: [
      "Analyzed client inquiry patterns to deliver tailored financial solutions, achieving high policy uptake and customer satisfaction with over 100 potential clients.",
    ],
  },
  {
    role: "Till Packer",
    company: "Checkers (Rosebank Mall)",
    period: "June 2023 – March 2024",
    points: [
      "Maintained high performance and professionalism under pressure in a fast-paced retail environment.",
    ],
  },
  {
    role: "Volunteer — Church Development Director",
    company: "Community Church",
    period: "June 2022 – Present",
    points: [
      "Coordinated over 10 large-scale community service events, demonstrating project management and teamwork.",
    ],
  },
];

// ---------- shared bits ----------

function SectionHeading({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <div className="mb-12 text-center">
      <p className="font-mono text-sm text-primary tracking-widest uppercase">
        {"//"} {index}. {kicker}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary-glow" />
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] text-primary-glow transition-colors hover:border-primary/70 hover:bg-primary/20 hover:shadow-[0_0_16px_-4px_var(--color-primary)]">
      {children}
    </span>
  );
}

// ---------- page ----------

function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-primary/15 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-lg font-semibold tracking-tight">
          <span className="text-primary">{"<"}</span>
          DK
          <span className="text-primary">{"/>"}</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary-glow transition-all hover:bg-primary/20 hover:shadow-[0_0_20px_-4px_var(--color-primary)] sm:inline-flex"
        >
          let's talk
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />

      <div className="relative mx-auto w-full max-w-4xl px-6 py-28 text-center">
        <div className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm text-primary-glow backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-primary" />
          Hello, World! I'm Deliwe
        </div>

        <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-gradient-pink animate-shimmer">
            Full-Stack Developer
          </span>
          <br />
          <span className="text-foreground">& Data Analytics Specialist</span>
        </h1>

        <p className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          Johannesburg, South Africa
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Combining clean full-stack code, data analytics, and AI tools into beautiful,
          high-performing digital experiences.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="btn-hero inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
          >
            Explore My Work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-white/5 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_32px_-8px_var(--color-primary)]"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <SocialBadge
            href={GITHUB}
            label="GitHub"
            external
            icon={<Github className="h-4 w-4" />}
          />
          <SocialBadge
            href={`mailto:${EMAIL}`}
            label={EMAIL}
            icon={<Mail className="h-4 w-4" />}
          />
          <SocialBadge
            href={`tel:${PHONE}`}
            label="+27 68 017 5451"
            icon={<Phone className="h-4 w-4" />}
          />
        </div>
      </div>
    </section>
  );
}

function SocialBadge({
  href,
  label,
  icon,
  external,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group inline-flex max-w-[16rem] items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-muted-foreground backdrop-blur-md transition-all hover:border-primary/60 hover:bg-primary/10 hover:text-primary-glow hover:shadow-[0_0_24px_-6px_var(--color-primary)]"
    >
      <span className="text-primary transition-transform group-hover:scale-110">
        {icon}
      </span>
      <span className="truncate">{label}</span>
    </a>
  );
}

function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="01" kicker="about" title="Professional Summary" />
        <div
          data-reveal
          className="glow-border rounded-3xl bg-card/60 p-8 backdrop-blur-xl sm:p-10"
        >
          <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
            Analytical Full-Stack Developer and Data Analytics trainee at{" "}
            <span className="font-semibold text-primary-glow">
              CAPACITI Demand Academy
            </span>{" "}
            (Braamfontein). I combine a solid software development foundation in{" "}
            <span className="font-mono text-sm text-primary">JavaScript</span>,{" "}
            <span className="font-mono text-sm text-primary">PHP</span>,{" "}
            <span className="font-mono text-sm text-primary">Python</span>, and{" "}
            <span className="font-mono text-sm text-primary">SQL</span> with hands-on AI
            tools proficiency and a strong background in customer-centric roles. Eager to
            bring technical versatility and problem-solving skills to a forward-thinking
            tech host company.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" kicker="skills" title="Core Technical Skills" />
        <div className="grid gap-6 sm:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              data-reveal
              className="glow-card rounded-3xl p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <group.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-foreground">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" kicker="projects" title="Featured Projects" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <article
              key={project.title}
              data-reveal
              className={`glow-card group flex flex-col rounded-3xl p-7 ${
                i === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-4xl font-bold text-primary/25 transition-colors group-hover:text-primary/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="mt-4 text-lg font-bold leading-snug text-foreground">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading index="04" kicker="education" title="Education & Training" />
        <div className="relative pl-10">
          {/* glowing timeline spine */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
          {EDUCATION.map((item) => (
            <div key={item.title} data-reveal className="relative pb-10 last:pb-0">
              <span className="absolute -left-10 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-primary/50 bg-background shadow-[0_0_18px_-2px_var(--color-primary)]">
                <GraduationCap className="h-4 w-4 text-primary" />
              </span>
              <div className="glow-card rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <span className="font-mono text-xs text-primary-glow">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1.5 text-sm font-semibold text-foreground/85">
                  {item.subtitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="05" kicker="experience" title="Professional Experience" />
        <div className="grid gap-6 md:grid-cols-2">
          {EXPERIENCE.map((job) => (
            <div key={job.company} data-reveal className="glow-card rounded-3xl p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-foreground">{job.role}</h3>
                  <p className="text-sm text-primary-glow">{job.company}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {job.period}
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `Hi Deliwe,\n\n${message}\n\n— ${name}\n${email}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl" data-reveal>
        <SectionHeading index="06" kicker="contact" title="Let's Work Together" />
        <div className="overflow-hidden rounded-3xl border border-primary/25 shadow-[0_0_60px_-20px_var(--color-primary)]">
          <div className="bg-gradient-to-r from-primary via-primary-glow to-primary px-8 py-6 text-center">
            <h3 className="text-xl font-extrabold text-primary-foreground">
              Ready to build something beautiful?
            </h3>
          </div>
          <div className="grid gap-10 bg-card/70 p-8 backdrop-blur-xl sm:p-10 md:grid-cols-2">
            {/* contact details */}
            <div className="space-y-5">
              <ContactRow
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={EMAIL}
                href={`mailto:${EMAIL}`}
              />
              <ContactRow
                icon={<Phone className="h-4 w-4" />}
                label="Phone"
                value="+27 68 017 5451"
                href={`tel:${PHONE}`}
              />
              <ContactRow
                icon={<MapPin className="h-4 w-4" />}
                label="Location"
                value="Johannesburg, South Africa"
              />
              <ContactRow
                icon={<Github className="h-4 w-4" />}
                label="GitHub"
                value="github.com/Anastacia202"
                href={GITHUB}
                external
              />
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent("Resume request")}`}
                className="btn-hero mt-2 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            {/* form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block font-mono text-xs text-muted-foreground">
                  name
                </label>
                <input
                  id="contact-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:shadow-[0_0_20px_-6px_var(--color-primary)]"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block font-mono text-xs text-muted-foreground">
                  email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:shadow-[0_0_20px_-6px_var(--color-primary)]"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block font-mono text-xs text-muted-foreground">
                  message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:shadow-[0_0_20px_-6px_var(--color-primary)]"
                />
              </div>
              <button
                type="submit"
                className="btn-hero inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="block truncate text-sm font-medium text-foreground">
          {value}
        </span>
      </span>
    </>
  );
  if (!href) {
    return <div className="flex items-center gap-3">{content}</div>;
  }
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="flex items-center gap-3 rounded-xl transition-all hover:bg-primary/5"
    >
      {content}
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-primary/15 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">{"<"}</span>
          DK
          <span className="text-primary">{"/>"}</span> © {new Date().getFullYear()} Deliwe
          Anastacia Klaas
        </p>
        <p className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          Designed & built with
          <Heart className="h-3.5 w-3.5 fill-primary text-primary" />
          in Johannesburg
        </p>
      </div>
    </footer>
  );
}

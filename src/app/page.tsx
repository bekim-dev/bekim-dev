import Image from "next/image";

const CONTACT_EMAIL = "bekim.developer@gmail.com";

const SkillItem = ({ text = "" }) => (
  <div className="skill-wrapper animate-up">
    <div className="skill">{text}</div>
  </div>
)

const SocialIcon = ({ url = "", iconSrc = "" }) => (
  <a href={url} target="_blank" className="social-icon animate-up">
    <Image src={iconSrc} width={30} height={30} alt="" />
  </a>
)

export default function Home() {
  return (
    <div className="page">
      <main className="main-content">
        <h1 className="name">BEKIM<span>REXHEPI</span></h1>
        <h2 className="description">Front-end Developer</h2>

        <div className="skills">
          <SkillItem text="Html" />
          <SkillItem text="Css/Sass" />
          <SkillItem text="Javascript" />
          <SkillItem text="Typescript" />
          <SkillItem text="Next.js" />
          <SkillItem text="React" />
          <SkillItem text="React Native" />
          <SkillItem text="Expo" />
          <SkillItem text="Node.js" />
        </div>

        <a className="contact-email animate-underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </main>

      <footer className="footer">
        <SocialIcon url="https://linkedin.com/in/bekim-r" iconSrc="/social/linkedin.svg" />
        <SocialIcon url="https://github.com/bekim-dev" iconSrc="/social/github.svg" />
      </footer>
    </div>
  )
}
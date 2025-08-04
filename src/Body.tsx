// SkillCard component for skill cards
const SkillCard = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow p-4">
      <img src={logo} alt={name} className="w-10 h-10 mb-2" />
      <span className="text-base font-medium text-blue-700 text-center">{name}</span>
    </div>
  );
};

const sections = [
  {
    id: "about",
    title: "About",
    content: (
      <div className="bg-white rounded-xl shadow-lg p-8">
        <p className="text-gray-700 text-lg mb-2">
          Senior Software Developer with over 7 years of experience designing and delivering scalable, high-quality software solutions. Proven expertise in cloud technologies, microservices architecture, leading cross-functional teams, and full-stack development. Driven by a passion for creating innovative systems that optimize user experiences and deliver measurable business outcomes.
        </p>
      </div>
    )
  },
  {
    id: "experience",
    title: "Experience",
    content: (
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-6">
          <h4 className="font-bold text-blue-600">Senior Software Developer <span className="text-gray-500">(Feb 2020 - Current)</span></h4>
          <p className="text-gray-600 mb-1">Meridian Credit Union, Toronto, ON</p>
          <ul className="list-disc list-inside text-gray-700 text-base mb-2">
            <li>Developed scalable and maintainable banking mobile applications for Android and iOS using React Native and Asp .Net Core that support millions of users.</li>
            <li>Mentored and trained 3+ junior developer, improving team efficiency and ensuring adherence to best practices.</li>
            <li>Collaborated with product and QA teams to deliver high-quality features on schedule.</li>
            <li>Monitored deployment pipelines, overseeing the smooth and efficient delivery of software updates and releases.</li>
            <li>Created technical documentation, system diagrams, and API documentation that support developers.</li>
            <li>Developed a user-friendly web application for retail lending products using React and Asp .Net Core, improving customer engagement by 50% and facilitating $10K+ in new financial system.</li>
            <li>Designed microservices-based REST APIs, reducing system downtime by 25% with RabbitMQ integration.</li>
            <li>Enhanced code quality by implementing robust Jest unit tests and Cypress end-to-end testing, reducing post-deployment defects by 30%.</li>
            <li>Developed a React Native mobile banking app, resulting in a 4.6/5 app store rating.</li>
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="font-bold text-blue-600">Software Programmer <span className="text-gray-500">(May 2019 - Aug 2019)</span></h4>
          <p className="text-gray-600 mb-1">Ministry of the Solicitor General, Hamilton, ON</p>
          <ul className="list-disc list-inside text-gray-700 text-base mb-2">
            <li>Reduced data loss by 50% by developing C# REST APIs for audio sync with Azure cloud storage.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-blue-600">Junior Software Developer <span className="text-gray-500">(Jan 2018 - Dec 2018)</span></h4>
          <p className="text-gray-600 mb-1">Health Hub Solutions, Mississauga, ON</p>
          <ul className="list-disc list-inside text-gray-700 text-base mb-2">
            <li>Developed patient’s entertainment application using React and NodeJS, used by multiple patients in hospitals.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "skills",
    title: "Skills",
    content: (
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {/* Languages */}
          <SkillCard name="C#" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
          <SkillCard name="JavaScript" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <SkillCard name="TypeScript" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          <SkillCard name="Python" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          <SkillCard name="Java" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
          <SkillCard name="Ruby" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" />
          <SkillCard name="HTML5" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <SkillCard name="CSS3/SCSS" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <SkillCard name="PHP" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
          <SkillCard name="GraphQL" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />
          {/* Frameworks */}
          <SkillCard name="React" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <SkillCard name="Asp .Net Core" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" />
          <SkillCard name="Node.js" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          <SkillCard name="Angular" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
          <SkillCard name="Vue.js" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
          <SkillCard name="Drupal" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg" />
          <SkillCard name="Flask" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
          <SkillCard name="Django" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
          <SkillCard name="Ruby on Rails" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" />
          <SkillCard name="NextJS" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
          {/* Database / Cloud */}
          <SkillCard name="MySQL" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          <SkillCard name="MongoDB" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
          <SkillCard name="PostgreSQL" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
          <SkillCard name="AZURE" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" />
          <SkillCard name="AWS" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
          <SkillCard name="Docker" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
          {/* Testing */}
          <SkillCard name="Cypress" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg" />
          <SkillCard name="Jest" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
          <SkillCard name="NUnit" logo="src/assets/Nunit.png" />
          {/* Tools */}
          <SkillCard name="RabbitMQ" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg" />
          <SkillCard name="Git" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        </div>
      </div>
    )
  },
  {
    id: "projects",
    title: "Projects",
    content: "This is the Projects section. Showcase your projects here."
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="fullname" className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input type="text" id="fullname" name="fullname" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea id="message" name="message" rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>
    )
  }
];

const Body = () => {
  return (
    <div>
      <main className="pt-20 px-4 max-w-6xl mx-auto space-y-24">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex-1 text-left">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">Hello, I'm Riket.</h1>
            <h2 className="text-2xl text-gray-700 mb-2">I'm a Senior Software Developer</h2>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="/vite.svg" // Replace with your actual image path, e.g. "/assets/your-image.jpg"
              alt="Riket Patel"
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
            />
          </div>
        </section>
        {/* Existing sections */}
        {sections.map((section) => (
          <section id={section.id} key={section.id} className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">{section.title}</h2>
            {typeof section.content === "string" ? (
              <p className="text-lg text-gray-700">{section.content}</p>
            ) : (
              section.content
            )}
          </section>
        ))}
      </main>
      <footer className="mt-16 py-8 bg-white border-t border-gray-200 flex flex-col items-center">
        <div className="flex items-center space-x-4 mb-2">
          <a href="https://github.com/riketpatel123" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg className="w-7 h-7 text-gray-700 hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.175 22 16.427 22 12.012 22 6.484 17.523 2 12 2z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/riketpatel123" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg className="w-7 h-7 text-blue-700 hover:text-blue-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z" />
            </svg>
          </a>
          <a href="mailto:riketpatel123@gmail.com" aria-label="Email">
            <svg className="w-7 h-7 text-gray-700 hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" />
            </svg>
          </a>
        </div>
        <div className="text-gray-600 text-sm">&copy; 2025 Riket Patel. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Body;

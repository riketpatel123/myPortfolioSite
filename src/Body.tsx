const sections = [
  {
    id: "about",
    title: "About",
    content: (
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Summary</h3>
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
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Work Experience</h3>
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
        <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-4">Core Skills</h3>
        <ul className="list-disc list-inside text-gray-700 text-base mb-2">
          <li><span className="font-bold">Languages:</span> C#, JavaScript, TypeScript, Python, Java, C++, Ruby, HTML5, CSS3/SCSS, PHP, ES6, GraphQL</li>
          <li><span className="font-bold">Frameworks:</span> React, Asp .Net Core, Node.js, Angular, Vue.js, Drupal, Flask, Django, Ruby on Rails, NextJS</li>
          <li><span className="font-bold">Database / Cloud:</span> MySQL, MongoDB, PostgreSQL, Redis, AZURE, AWS, Docker</li>
          <li><span className="font-bold">Testing:</span> Cypress, Jest, Detox, NUnit, Specflow</li>
          <li><span className="font-bold">Tools:</span> RabbitMQ, Jira, Visual Studio, Xcode, Git</li>
        </ul>
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
    content: "This is the Contact section. Add your contact details or a form here."
  }
];

const Body = () => {
  return (
    <main className="pt-20 px-4 max-w-4xl mx-auto space-y-24">
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
  );
};

export default Body;

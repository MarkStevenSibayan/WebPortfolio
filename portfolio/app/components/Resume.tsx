export default function Resume() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        My Resume
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">Education</h3>
          <p className="text-gray-300">Bachelor of Science in Computer Science, University of Technology, 2018-2022</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">Work Experience</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Senior Web Developer at TechCorp, 2022-Present</li>
            <li>Junior Developer at StartUp Inc., 2020-2022</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">Achievements</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>First Place, National Coding Competition 2021</li>
            <li>Open Source Contributor of the Year, GitHub 2022</li>
            <li>Speaker at ReactConf 2023</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">Certifications</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>AWS Certified Developer - Associate</li>
            <li>Google Cloud Professional Cloud Architect</li>
            <li>Microsoft Certified: Azure Developer Associate</li>
          </ul>
        </div>
      </div>
    </section>
  )
}


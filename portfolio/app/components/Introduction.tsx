import Image from "next/image"

export default function Introduction() {
  return (
    <section className="mb-12 text-center">
      <div className="relative w-40 h-40 mx-auto mb-6">
        <Image
          src="/placeholder.svg?height=160&width=160"
          alt="Profile Picture"
          width={160}
          height={160}
          className="rounded-full"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-75 animate-pulse"></div>
      </div>
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Mark Steven B. Sibayan
      </h1>
      <p className="text-xl text-gray-400 mb-4">Web Developer & Designer</p>
      <p className="max-w-2xl mx-auto text-gray-300">
        I am a 3rd-year IT student passionate about technology and problem-solving. Skilled in programming, web development, and system administration, I am eager to gain hands-on experience and grow in the IT industry.
      </p>
    </section>
  )
}


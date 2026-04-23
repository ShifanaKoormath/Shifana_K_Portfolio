import { useParams } from "react-router-dom";
import { projects } from "./projects";
import Carousel from "./Carousel";

export default function Project() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return <div className="p-10">Not Found</div>;
  }

  return (
    <div className="bg-[#F9FAFB] min-h-screen px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <div className="mb-16">

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl">
            {project.description}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags?.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-gray-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

        {/* IMAGE SHOWCASE */}
    {/* CAROUSEL */}
  <Carousel images={project.images} />

        {/* CASE STUDY */}
        <div className="space-y-10 text-gray-700">

          <div>
            <h3 className="text-lg font-semibold mb-2">Problem</h3>
            <p>{project.problem}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Solution</h3>
            <p>{project.solution}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Core Logic</h3>
            <p>{project.logic}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Architecture</h3>
            <p>{project.architecture}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Impact</h3>
            <p>{project.impact}</p>
          </div>

        </div>

        {/* HIGHLIGHTS */}
        {project.highlights && (
          <div className="mt-16 p-6 bg-gray-50 rounded-xl">
            <h3 className="font-semibold mb-3">
              Key Highlights
            </h3>

            <ul className="text-sm text-gray-700 space-y-2">
              {project.highlights.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        )}


{project.demo && (
  <div className="mt-20 p-6 bg-gray-50 border border-gray-200 rounded-xl">

    <h3 className="font-semibold mb-5">
      Explore the System
    </h3>

    {/* LINKS */}
   <div className="mb-6 text-sm">

  <p className="font-medium mb-3 text-gray-900">
    Access
  </p>

  <div className="space-y-2">

    <a
      href={project.demo.links.public}
      target="_blank"
      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-100 transition"
    >
      <span className="text-gray-700">Public Booking</span>
      <span className="text-gray-400">↗</span>
    </a>

    <a
      href={project.demo.links.operator}
      target="_blank"
      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-100 transition"
    >
      <span className="text-gray-700">Operator Dashboard</span>
      <span className="text-gray-400">↗</span>
    </a>

  </div>

</div>

    {/* CREDENTIALS */}
    <div className="mb-6 text-sm text-gray-700">

      <p className="font-medium mb-2 text-gray-900">
        Demo Login
      </p>

      <p>Phone: {project.demo.credentials.phone}</p>
      <p>OTP: {project.demo.credentials.otp}</p>

    </div>

    {/* STEPS */}
    <div className="space-y-3 text-sm text-gray-700">

      {project.demo.steps.map((step, i) => (
        <div key={i} className="flex gap-3">
          <span className="font-medium">{i + 1}.</span>
          <p>{step}</p>
        </div>
      ))}

    </div>

  </div>
)}
        {/* CTA */}
        <div className="mt-16 flex flex-wrap gap-4">

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-5 py-2.5 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition">
                View Live
              </button>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-5 py-2.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition">
                GitHub
              </button>
            </a>
          )}

        </div>

      </div>
    </div>
  );
}
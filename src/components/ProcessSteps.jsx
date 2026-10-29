export default function ProcessSteps({ steps }) {
  return (
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="border-t-2 border-imperial pt-5">
          <span className="font-display text-4xl font-bold text-imperial" aria-hidden="true">
            {i + 1}
          </span>
          <h3 className="mt-2 text-xl font-semibold">
            <span className="sr-only">Step {i + 1}: </span>
            {step.title}
          </h3>
          <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  )
}

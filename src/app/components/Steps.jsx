import ProcessSteps from "@/app/components/ProcessSteps"
import ProcessStepsParallax from "./ProcessSteps1"

export default function Steps() {
  const steps = [
    {
      number: 1,
      title: "Eure Idee",
      description: "Erklärt uns eure Vorstellungen. Wir hören zu.",
    },
    {
      number: 2,
      title: "Unser Konzept",
      description:
        "Wir machen aus euren Vorstellungen und Ideen ein Konzept z.B. in Form von Skripts, Moodboards, Storyboards etc. Auch hier passen wir unsere Arbeit euren Vorstellungen, den Anforderungen und der Grösse des Projekts an.",
    },
    {
      number: 3,
      title: "Die Produktion",
      description:
        "Beleuchten, verkabeln, filmen, inszenieren, Klappen schlagen, pudern, versprechen, üben und wiederholen – Drehtage bedeuten Spass und viel Arbeit! Wir lieben es. Vom kleinen One-Man Projekt bis zur grossen Produktion.",
    },
    {
      number: 4,
      title: "Die Postproduktion",
      description:
        "Das Produkt kommt im Schnittraum zusammen. Nötige Anpassungen werden in Absprache mit euch angefertigt.",
    },
    {
      number: 5,
      title: "Das Produkt",
      description: "Ihr erhält das visuelle Produkt, das euch als Firma weiterbringt.",
    },
  ]

  return (
    <div className="min-h-screen py-32">
      <h1 className="text-5xl md:text-8xl font-bold text-center mb-16" style={{ color: "#FF7F50" }}>
        Der Prozess
      </h1>
      <ProcessSteps steps={steps} />
    </div>
  )
}


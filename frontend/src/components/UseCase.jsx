
import {  FaHeartbeat,FaPills,FaTint,FaAllergies,FaBrain,FaBug,} from "react-icons/fa";

const RealLifeCases = () => {
  const cases = [
    {
      title: "Peanut Allergy Emergency",
      scenario: "Child collapses at school after a snack.",
      action: "Thinks it’s choking — delays EpiPen.",
      by: "Teacher",
      risk: "Delayed treatment could cause suffocation.",
      medvault: "QR reveals peanut allergy + EpiPen location in lunchbox pocket.",
      icon: <FaAllergies />,
      iconBg: "bg-blue-100 text-blue-700",
    },
    {
      title: "Penicillin Allergy",
      scenario: "Accident victim rushed to hospital.",
      action: "Starts IV penicillin.",
      by: "Doctor",
      risk: "Can cause anaphylaxis, difficulty breathing, possibly death.",
      medvault: "QR warns ⚠️ Allergic to penicillin – use alternative.",
      icon: <FaPills />,
      iconBg: "bg-indigo-100 text-indigo-700",
    },
    {
      title: "Low Blood Sugar Emergency",
      scenario: "Diabetic teen faints at sports practice.",
      action: "Assumes it's exhaustion — delays sugar intake.",
      by: "Coach",
      risk: "Blood sugar crash could lead to seizure or coma.",
      medvault: "QR reveals Type 1 diabetes + glucose tablets in gym bag.",
      icon: <FaTint />,
      iconBg: "bg-sky-100 text-sky-700",
    },
    {
      title: "Latex Allergy",
      scenario: "Patient comes in for emergency surgery.",
      action: "Uses latex gloves, catheters, tubing.",
      by: "Staff",
      risk: "Severe rashes, difficulty breathing, or internal reactions.",
      medvault: 'Warns: “Use only latex-free medical equipment.”',
      icon: <FaAllergies />,
      iconBg: "bg-blue-200 text-blue-800",
    },
    {
      title: "Epilepsy",
      scenario: "Man collapses and starts convulsing.",
      action: "Tries to restrain him, calls ambulance.",
      by: "Bystander",
      risk: "Head injury or mistreatment during seizure.",
      medvault:
        'QR reveals epilepsy + instructions: “Do not restrain, turn the patient sideways.”',
      icon: <FaBrain />,
      iconBg: "bg-purple-100 text-purple-700",
    },
    {
      title: "Bee Sting Allergy",
      scenario: "Boy stung during park picnic.",
      action: "Thinks it’s just a sting — gives ice.",
      by: "Friend",
      risk: "Swelling blocks airway within minutes.",
      medvault: "QR shows bee allergy + EpiPen in backpack.",
      icon: <FaBug />,
      iconBg: "bg-yellow-100 text-yellow-700",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-blue-900 mb-16 leading-tight">
          Real-Life Medical Emergencies <br />
          
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <div
              key={i}
              className="backdrop-blur-md bg-white/70 border border-blue-100 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div
                className={`w-14 h-14 mb-4 flex items-center justify-center rounded-full shadow-inner ${c.iconBg}`}
              >
                <span className="text-2xl">{c.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong className="text-gray-700">Scenario:</strong> {c.scenario}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong className="text-gray-700">{c.by}’s Action:</strong> {c.action}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong className="text-gray-700">Risk:</strong> {c.risk}
              </p>
              <p className="text-sm text-red-600 font-medium mt-3">
                MedVault Insight: {c.medvault}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealLifeCases;

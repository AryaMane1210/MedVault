const UseCase =() =>{
  return (
    <section className="px-16 py-16">
      <p> Real - Life Cases</p>
      <div className="flex flex-wrap justify-center gap-10">
        <div className=" max-w-sm px-4 py-4 bg-blue-100 rounded-2xl border-4 border-blue-200 sm:w-[400px] hover:bg-blue-200">
          <h2 className="text-xl font-bold text-blue-900 leading-snug">Peanut Allergy Emergency</h2>
           <p ><strong>Scenario:</strong> Child collapses at school after a snack</p>
            <p><strong>Teacher’s Action:</strong> Thinks it’s choking — delays EpiPen.</p>
            <p><strong>Risk:</strong> Delayed treatment could cause suffocation.</p>
            <p className="font-semibold text-red-600">
              MedVault: QR reveals peanut allergy + EpiPen location in lunchbox pocket.
            </p>
        </div>

  

        <div className=" max-w-sm px-4 py-4 bg-blue-100 rounded-2xl border-4 border-blue-200 sm:w-[400px] hover:bg-blue-200">
          <h3 className="text-xl font-bold text-blue-900 leading-snug">Penicillin Allergy</h3>
           <p><strong>Scenario:</strong> Accident victim rushed to hospital.</p>
            <p><strong>Doctor’s Action:</strong> Starts IV penicillin (a common first-line drug).</p>
            <p><strong>Risk:</strong> Can cause anaphylaxis, difficulty breathing,  possibly death.
</p>
            <p className="font-semibold text-red-600">
              MedVault: QR warns ⚠️ Allergic to penicillin – use alternative.

            </p>
        </div>

        <div className=" max-w-sm px-4 py-4 bg-blue-100 rounded-2xl border-4 border-blue-200 sm:w-[400px] hover:bg-blue-200">
          <h3 className="text-xl font-bold text-blue-900 leading-snug"> Low Blood Sugar Emergency</h3>
           <p><strong>Scenario:</strong> Diabetic teen faints at sports practice.</p>
            <p><strong>Coach’s Action:</strong> Assumes it's exhaustion — delays sugar intake.</p>
            <p><strong>Risk:</strong> Blood sugar crash could lead to seizure or coma.</p>
            <p className="font-semibold text-red-600">
              MedVault: QR reveals Type 1 diabetes + glucose tablets in gym bag.
            </p>
        </div>

        <div className=" max-w-sm px-4 py-4 bg-blue-100 rounded-2xl border-4 border-blue-200 sm:w-[400px] hover:bg-blue-200">
          <h3 className="text-xl font-bold text-blue-900 leading-snug">Latex Allergy</h3>
           <p><strong>Scenario:</strong>  Patient comes in for emergency surgery.</p>
            <p><strong>Staff’s Action:</strong> Latex gloves, catheters, tubing.</p>
            <p><strong>Risk:</strong> Can cause severe rashes, difficulty breathing, or internal reactions during surgery.
.</p>
            <p className="font-semibold text-red-600">
              MedVault: Warns: “Use only latex-free medical equipment.”
            </p>
        </div>

        

        <div className=" max-w-sm px-4 py-4 bg-blue-100 rounded-2xl border-4 border-blue-200 sm:w-[400px] hover:bg-blue-200">
          <h3 className="text-xl font-bold text-blue-900 leading-snug">Epilepsy</h3>
           <p><strong>Scenario:</strong> Man collapses and starts convulsing.</p>
            <p><strong>Bystander’s Action:</strong> Tries to restrain him, calls ambulance.</p>
            <p><strong>Risk:</strong> Head injury or mistreatment during seizure.</p>
            <p className="font-semibold text-red-600">
              MedVault:  QR reveals epilepsy + instructions: "Do not restrain, turn the patient sideways."
            </p>
        </div>

        <div className=" max-w-sm px-4 py-4 bg-blue-100 rounded-2xl border-4 border-blue-200 sm:w-[400px] hover:bg-blue-200">
          <h3 className="text-xl font-bold text-blue-900 leading-snug">Bee Sting Allergy/Emergency</h3>
           <p><strong>Scenario:</strong> Boy stung during park picnic.</p>
            <p><strong>Friend’s Action:</strong> Thinks it’s just a sting — gives ice.</p>
            <p><strong>Risk:</strong> Swelling blocks airway within minutes.</p>
            <p className="font-semibold text-red-600">
              MedVault: QR shows bee allergy + EpiPen in backpack.
            </p>
        </div>
      </div>
    </section>
  )
}
export default UseCase;
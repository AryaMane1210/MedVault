const Works = () => {
  return (
    <section id="how-it-works" className="p-4">
    <div>
      <div className="w-full px-4 py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto space-y-12 md:space-y-0 md:space-x-8">
          
          
          <div className="flex flex-col items-center text-center w-full md:w-1/4">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-lg font-bold">1</div>
            <h3 className="text-xl font-semibold mb-2">Add Your Medical Info</h3>
            <p className="text-gray-600 text-sm">Securely enter details like allergies, medications, and emergency contacts.</p>
          </div>

          
          <div className="hidden md:block h-1 bg-gray-300 w-full md:w-10"></div>

          
          <div className="flex flex-col items-center text-center w-full md:w-1/4">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-lg font-bold">2</div>
            <h3 className="text-xl font-semibold mb-2">QR Code is Generated</h3>
            <p className="text-gray-600 text-sm">Your health info is linked to a scannable QR code (offline) — ready for emergencies.</p>
          </div>

          <div className="hidden md:block h-1 bg-gray-300 w-full md:w-10"></div>

          
          <div className="flex flex-col items-center text-center w-full md:w-1/4">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-lg font-bold">3</div>
            <h3 className="text-xl font-semibold mb-2">QR is Scanned</h3>
            <p className="text-gray-600 text-sm">Doctors or first responders scan it — no app needed — and get instant info.</p>
          </div>

          <div className="hidden md:block h-1 bg-gray-300 w-full md:w-10"></div>

          
          <div className="flex flex-col items-center text-center w-full md:w-1/4">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-lg font-bold">4</div>
            <h3 className="text-xl font-semibold mb-2">Life-Saving Action</h3>
            <p className="text-gray-600 text-sm">They make informed decisions instantly, avoiding allergic reactions & delays.</p>
          </div>

        </div>
      </div>
      <div className="h-12"></div>
    </div>
    </section>
  );
};

export default Works;

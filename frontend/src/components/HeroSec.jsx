

const Hero =() =>{
    return(
<section id="sign-up" className="bg-blue-50 text-center py-20 px-6  min-h-[85vh] items-center">
  <h1 className="text-4xl md:text-4xl font-bold text-blue-900 mb-4 leading-snug">
  Every second counts. <br />
  Give doctors instant access — only when it matters.
</h1>
<p className="text-base md:text-lg text-blue-800 mb-6">
  Your critical medical info, securely stored and shared during emergencies.
</p>


  <div className="flex justify-center gap-4 flex-wrap">
    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg transition">
      Sign Up Now!
    </button>
    <a href="#how-it-works">
    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg transition">
       How it Works
    </button> </a>
  </div>
</section>
)
}
export default Hero;

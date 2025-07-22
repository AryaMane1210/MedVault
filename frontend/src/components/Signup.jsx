const SignUp = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md p-6 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Create an account</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
            <input type="email" id="email" className="w-full p-2.5 rounded-lg border" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
            <input type="password" id="password" className="w-full p-2.5 rounded-lg border" required />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium">Confirm password</label>
            <input type="password" id="confirm-password" className="w-full p-2.5 rounded-lg border" required />
          </div>
          <div className="flex items-start">
            <input type="checkbox" id="terms" className="w-4 h-4 mt-1 mr-2" required />
            <label htmlFor="terms" className="text-sm text-gray-500">I accept the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a></label>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition">Create an account</button>
          <p className="text-sm text-gray-500">Already have an account? <a href="#" className="text-blue-600 hover:underline">Login here</a></p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;

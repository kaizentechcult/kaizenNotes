

const Register = () => {
  return (
    <div class="flex h-screen" style={{ "background-color": '#E7F0FF' }}>
      <div class="w-1/2 flex flex-col justify-center items-center px-12">
        <h2 class="text-4xl font-semibold mb-8 text-center">Register</h2>
        <form class="w-full max-w-md mx-auto">

        <div class="mb-4">
            <label for="email" class="block text-lg font-medium mb-2">
            </label>
            <input
              type="name"
              id="mane"
              placeholder="Name"
              class="w-full p-3 border border-gray-300 rounded-3xl placeholder-gray-700 italic"
            />
          </div>



          <div class="mb-4">
            <label for="email" class="block text-lg font-medium mb-2">
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              class="w-full p-3 border border-gray-300 rounded-3xl placeholder-gray-700 italic"
            />
          </div>

          <div class="mb-6">
            <label for="password" class="block text-lg font-medium mb-2">
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              class="w-full p-3 border border-gray-300 rounded-3xl placeholder-gray-700 italic"
            />
          </div>

        

          <button
            type="submit"
            class="w-full bg-DarkBlue hover:bg-blue-600 text-white font-semibold py-3 rounded-3xl"
          >
            <b>Register</b>
          </button>

          <div class="flex justify-end mt-3 mb-6">
            Alredy have an account?
            <a href="#" class="text-linkBlue hover:underline">
              Log in
            </a>
          </div>
        </form>
      </div>

      <div class="w-1/2 flex items-center justify-center">
        <img
          src="./register-img-removebg-preview.png"
          alt="Login-img"
          class="object-contain h-3/4 w-auto"
        />
      </div>
    </div>
  );
};

export default Register;

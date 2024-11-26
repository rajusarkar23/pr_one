export default function SigninForm() {
  return (
    <form>
      <div className="flex flex-col space-y-3 items-center justify-center mt-24">
        <div>
          <label className="flex">Email</label>
          <input
            type="email"
            id="emai"
            placeholder="Email"
            className="border px-1"
          />
        </div>
        <div>
          <label className="flex">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="border px-1"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 px-10 py-1 rounded-full text-white hover:bg-blue-500 transition-all"
        >
          Signup
        </button>
      </div>
    </form>
  );
}

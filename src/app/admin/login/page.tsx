import { login } from "@/services/Auth/login";

export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto mt-24 px-4">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h1 className="text-xl font-semibold mb-6">Área Administrativa</h1>

        <form action={login} className="space-y-6">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-md bg-primary text-white font-medium hover:opacity-90 transition-opacity"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-500">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          Sorry, the page you are looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded-xl bg-blue-500 px-6 py-3 text-white font-medium shadow-md hover:bg-blue-600 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

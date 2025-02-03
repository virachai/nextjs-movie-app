import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="space-y-6 text-center">
        {/* 404 Illustration or Icon */}
        <div className="font-bold text-9xl text-gray-800">404</div>
        <h1 className="font-semibold text-4xl text-gray-800">
          Oops! Page Not Found
        </h1>
        <p className="max-w-md text-gray-600 text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 shadow-md px-6 py-3 rounded-lg font-semibold text-white transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

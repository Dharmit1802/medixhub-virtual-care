import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full text-center">
        <div className="rounded-full bg-medical-100 text-medical-500 w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <span className="text-6xl font-bold">4</span>
          <span className="text-6xl font-bold">0</span>
          <span className="text-6xl font-bold">4</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          We couldn't find the page you were looking for. It might have been
          moved or deleted.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-medical-500 hover:bg-medical-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}

import Link from 'next/link';


const NotFound = () => {
    return (
        <div>
             <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mt-4">
          Page Not Found
        </p>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
        </div>
    );
};

export default NotFound;
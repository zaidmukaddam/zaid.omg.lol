export default function Slogan() {
  return (
    <div className="mt-6 w-full">
      <ol className="grid grid-cols-1 divide-gray-100 overflow-hidden rounded-lg border border-orange-100 text-sm sm:grid-cols-3">
        <li className="flex items-center justify-center p-4  text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.4}
            stroke="currentColor"
            className="h-9 w-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>

          <p className="pl-1.5 leading-none">
            <strong className="block text-base font-semibold">Think</strong>
            <small className="mt-1 text-sm text-gray-600">
              Innovative idea&apos;s.
            </small>
          </p>
        </li>

        <li className="relative flex items-center justify-center bg-orange-50 p-4  text-gray-900">
          <span className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45  bg-orange-50 sm:block"></span>
          <span className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 bg-orange-50 sm:block"></span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.4}
            stroke="currentColor"
            className="h-9 w-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
            />
          </svg>

          <p className="pl-1.5 leading-none">
            <strong className="block text-base font-semibold">Code</strong>
            <small className="mt-1 text-sm text-gray-600">
              Utilize on VSCode.
            </small>
          </p>
        </li>

        <li className="flex items-center justify-center p-4 text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.4}
            stroke="currentColor"
            className="h-9 w-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
            />
          </svg>

          <p className="pl-1.5 leading-none">
            <strong className="block text-base font-semibold">Deploy</strong>
            <small className="mt-1 text-sm text-gray-600">
              Push it on Server.
            </small>
          </p>
        </li>
      </ol>
    </div>
  );
}

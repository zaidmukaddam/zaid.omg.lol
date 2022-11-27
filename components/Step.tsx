import { FiFeather } from 'react-icons/fi';
import { ReactNode } from 'react';

export default function Step({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <li className="mb-4 ml-2">
      <div className="mb-2 flex items-center text-orange-300">
        <span className="sr-only">Check</span>
        <FiFeather className="mr-2 h-5 w-5" />
        <p className="font-medium text-gray-900">{title}</p>
      </div>
      <p className="ml-6 text-gray-700">{children}</p>
    </li>
  );
}

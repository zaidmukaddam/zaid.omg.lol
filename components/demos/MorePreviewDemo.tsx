import LinkPreview from '../LinkPreview';
import DemoLayout from './DemoLayout';
import { FiFeather } from 'react-icons/fi';

export default function LinkPreviewDemo() {
  return (
    <DemoLayout demoName="Cool Stack">
      <div className="mb-2 flex items-center justify-center text-orange-200">
        <h1 className="mb-2 text-center text-4xl font-bold">Built with</h1>
        <FiFeather className="mb-3 ml-1 h-8 w-8" />
      </div>

      <div
        // center the location on every page
        className="flex justify-center break-words text-sm text-[#5d676a]"
      >
        <LinkPreview href="https://nextjs.org/">Next.js</LinkPreview>
        <span aria-hidden className="select-none px-1">
          ·
        </span>
        <LinkPreview href="https://tailwindcss.com/">Tailwind CSS</LinkPreview>
        <span aria-hidden className="select-none px-1">
          ·
        </span>
        <LinkPreview href="https://vercel.com">Vercel</LinkPreview>
        <span aria-hidden className="select-none px-1">
          ·
        </span>
        <LinkPreview href="https://www.radix-ui.com/">Radix UI</LinkPreview>
      </div>
    </DemoLayout>
  );
}

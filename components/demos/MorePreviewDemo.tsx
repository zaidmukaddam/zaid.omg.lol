import LinkPreview from '../LinkPreview';
import DemoLayout from './DemoLayout';

export default function LinkPreviewDemo() {
  return (
    <DemoLayout
        demoName="Cool Stuff"
    >
      <h1 className="text-4xl font-bold text-center mb-2">Built with 🪶</h1>
      <div
      // center the location on every page
        className="text-sm text-[#5d676a] flex justify-center break-words"
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

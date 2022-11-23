import Link from '@/components/Link';
import Location from '@/components/Location';
import MarqueeLocation from '@/components/MarqueeLocation';
import useWindowSize from '@/lib/useWindowSize';

export default function Footer() {
  const { width } = useWindowSize();
  return (
    <footer>
      <hr className="mt-12 text-[#5d676a]" />

      <div className="mt-12 break-words">
        <Link href="https://twitter.com/zaidmukaddam">Twitter</Link>
        <span aria-hidden className="select-none px-1">
          ·
        </span>
        <Link href="https://instagram.com/zaidmukaddam">Instagram</Link>
        <span aria-hidden className="select-none px-1">
          ·
        </span>
        <Link href="https://github.com/zaidmukaddam">GitHub</Link>
        <span aria-hidden className="select-none px-1">
          ·
        </span>
        <Link href="mailto:zaid@omg.lol">zaid@omg.lol</Link>
      </div>

      <div className="mt-28">
        {width > 639 ? <Location /> : <MarqueeLocation />}
      </div>
    </footer>
  );
}

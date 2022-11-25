import Container from '@/layouts/Container';
import Link from 'next/link';

export default function Custom418(){
    return (
        <Container
            title="418 | Zaid Mukaddam"
            description="I'm a teapot."
            className="flex flex-col items-center justify-center"
        >
            <h1 className="mt-10 text-4xl tracking-[-0.02em] [font-variation-settings:'wght'_700] -sm:text-3xl -sm:leading-[1.1111]">418 - I&apos;m a teapot</h1>
            <p className="mt-3 text-sm opacity-70 mb-3">The server refuses to brew coffee because it is, permanently, a teapot.</p>
            {/* back to home button */}
            <Link href="/" className="px-4 py-2 text-white bg-[#1da1f2] rounded-md hover:bg-[#1a91da]">Back to Home</Link>
        </Container>
    );
}

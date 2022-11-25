import Container from '@/layouts/Container';
import Link from 'next/link';

export default function Custom404() {
    return (
        <Container
            title="404 | Zaid Mukaddam"
            description="Page not found."
            className="flex flex-col items-center justify-center"
        >
            <h1 className="mt-10 text-4xl tracking-[-0.02em] [font-variation-settings:'wght'_700] -sm:text-3xl -sm:leading-[1.1111]">404 - Page Not Found</h1>
            <p className="mt-3 text-sm opacity-70 mb-3">The page you are looking for does not exist.</p>
            {/* back to home button */}
            <Link href="/" className="px-4 py-2 text-white bg-[#1da1f2] rounded-md hover:bg-[#1a91da]">Back to Home ←</Link>
        </Container>
    );
}

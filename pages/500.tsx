import Container from '@/layouts/Container';
import Link from 'next/link';

export default function Custom500() {
    return (
        <Container
            title="500 | Zaid Mukaddam"
            description="Internal server error."
            className="flex flex-col items-center justify-center"
        >
            <h1 className="mt-10 text-4xl tracking-[-0.02em] [font-variation-settings:'wght'_700] -sm:text-3xl -sm:leading-[1.1111]">500 - Internal Server Error</h1>
            <p className="mt-3 text-sm opacity-70 mb-3">The server encountered an unexpected condition that prevented it from fulfilling the request.</p>
            {/* back to home button */}
            <Link href="/" className="px-4 py-2 text-white bg-[#1da1f2] rounded-md hover:bg-[#1a91da]">Back to Home ←</Link>
        </Container>
    );
}

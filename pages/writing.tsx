import { allWritings } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Container from '@/layouts/Container';
import NextLink from 'next/link';
import { compareDesc } from 'date-fns';
import { getFormattedWriting } from '@/lib/getFormattedWriting';
import useIsMounted from '@/lib/useIsMounted';

export default function AllWritings({
  writings,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isMounted = useIsMounted()();

  return (
    <Container
      title="Writing | Zaid Mukaddam"
      description="Zaid Mukaddam's thoughts and writings."
    >
      <ul className="mt-10">
        {writings.map(writing => (
          <li key={writing.slug} className="">
            <NextLink
              href={{
                pathname: `/writing/[slug]`,
                query: { slug: writing.slug },
              }}
              className="flex items-baseline text-[#111827] no-underline transition-colors duration-100 ease-in-out hover:no-underline hover:opacity-70"
            >
              <h3 className="flex-1 py-1 pr-4 text-[1.1rem] font-medium tracking-tight [font-variation-settings:'wght'_500]">
                {writing.title}
              </h3>
              <time
                dateTime={writing.formatedDate}
                className="date text-sm text-[#9ca3af]"
              >
                {writing.formatedDate}
              </time>
            </NextLink>
            <h4 className="mt-1 text-sm text-[#9ca3af]">{writing.summary}</h4>
            {isMounted && writings.indexOf(writing) !== writings.length - 1 ? (
              <hr className="my-4" />
            ) : null}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export const getStaticProps: GetStaticProps<{
  writings: ReturnType<typeof getFormattedWriting>[];
}> = async ctx => {
  const data = allWritings
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .filter(writing => writing.status === 'published');

  return {
    props: {
      writings: data.map(getFormattedWriting),
    },
  };
};

import Image from 'next/image';
import Container from '@/layouts/Container';
import { allWritings } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { formatDate, formatDateFull } from '@/lib/formatDate';
import { getFormattedWriting } from '@/lib/getFormattedWriting';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlock from '@/components/CodeBlock';
import Link from '@/components/Link';

export default function Post({
  writing,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXComponent = useMDXComponent(writing.body.code);

  return (
    <Container
      title={`${writing.title} | Zaid Mukaddam`}
      description={writing.summary}
      keywords={writing.keywords}
      date={formatDate(writing.date)}
      image={`https://zaid.omg.lol/api/og?title=${writing.title}&summary=${writing.summary}&date=${writing.formatedDate}`}
    >
      <article className="font-main prose mt-10 text-[#313233]">
        <div>
          <h1 className="mb-0 tracking-[-0.02em] [font-variation-settings:'wght'_700] -sm:text-3xl -sm:leading-[1.1111]">
            {writing.title}
          </h1>
          <div className="mt-3 mb-10 flex items-center gap-1.5 text-sm opacity-70">
            {writing.author}

            <span aria-hidden className="whitespace-nowrap">
              ·
            </span>
            <time>{writing.formatedDate}</time>
          </div>
        </div>

        {writing.headings ? (
          <div className="mb-10">
            <h4 className="mt-0">Table of Contents</h4>
            <ol className="list-inside pl-0">
              {writing.headings.map(heading => (
                <li key={heading.slug}>
                  <a href={`#${heading.slug}`} className="no-underline">
                    {heading.text}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        <MDXComponent
          components={{
            li: (props: any) => <li className="[&>p]:m-0">{props.children}</li>,
            a: (props: any) => {
              return (
                <>
                  {props.className || props.href.includes('twitter.com') ? (
                    <>
                      {props.href.includes('twitter.com') ? (
                        <>
                          <a
                            className={`${props.className} font-bold`}
                            href={props.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {props.children}
                          </a>
                        </>
                      ) : (
                        <>
                          <a
                            className={`${props.className} font-bold`}
                            href={props.href}
                          >
                            {props.children}
                          </a>
                        </>
                      )}
                    </>
                  ) : (
                    <Link href={props.href}>{props.children}</Link>
                  )}
                </>
              );
            },
            pre: (props: any) => <>{props.children}</>,
            code: (props: any) => {
              const isInlineCode = !props.className;
              return (
                <>
                  {isInlineCode ? (
                    <code className="[white-space:break-spaces]">
                      {props.children}
                    </code>
                  ) : (
                    <CodeBlock {...props}>{props.children}</CodeBlock>
                  )}
                </>
              );
            },
            img: (props: any) => {
              return (
                <div className="h-[300px] w-full sm:h-[400px] md:h-[500px]">
                  <Image
                    src={props.src}
                    alt={props.alt}
                    sizes="100%"
                    width={props.width}
                    height={props.height}
                    className="absolute rounded-xl"
                  />
                </div>
              );
            },
            em: (props: any) => {
              return (
                <em className="text-sm italic text-slate-500">
                  {props.children}
                </em>
              );
            },
          }}
        />
      </article>
    </Container>
  );
}

export async function getStaticPaths() {
  return {
    paths: allWritings.map(writing => ({
      params: {
        slug: writing.slug,
      },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{
  writing: ReturnType<typeof getFormattedWriting>;
}> = async ({ params }) => {
  const data = allWritings.find(writing => writing.slug === params?.slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      writing: getFormattedWriting(data),
    },
  };
};

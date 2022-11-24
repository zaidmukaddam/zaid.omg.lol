import Container from '@/layouts/Container';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Guestbook } from '@prisma/client';
import prisma from '@/lib/prisma';
import GuestbookComp from '@/components/GuestbookComp';
import { format } from 'date-fns';
import GuestbookForm from '@/components/Guestbook/GuestbookForm';

export default function GuestbookPage({
  fallbackData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Guestbook | Zaid Mukaddam"
      description="Zaid Mukaddam's guestbook."
    >
      <h1 className="mb-0 mt-10 text-4xl tracking-[-0.02em] [font-variation-settings:'wght'_700] -sm:text-3xl -sm:leading-[1.1111]">
        Guestbook
      </h1>
      <p className="mt-2">
        Feel free to share a message with a future visitor or tell me what you like the most about my website.
      </p>
      <GuestbookForm />
      <p className="mt-3 text-sm">
        Your information is only used to display your name and reply by email{' '}
      </p>
      <GuestbookComp fallbackData={fallbackData} />
    </Container>
  );
}

export const getStaticProps: GetStaticProps<{
  fallbackData: Guestbook[];
}> = async ctx => {
  const fallbackData = await prisma.guestbook.findMany({
    orderBy: {
      created_at: 'desc',
    },
  });
  return {
    props: {
      fallbackData: JSON.parse(JSON.stringify(fallbackData)).map(
        (message: Guestbook) => {
          return {
            id: message.id.toString(),
            created_by: message.created_by,
            body: message.body,
            created_at: format(
              new Date(message.updated_at),
              "d MMM yyyy 'at' h:mm bb"
            ),
          };
        }
      ),
    },
    revalidate: 60,
  };
};

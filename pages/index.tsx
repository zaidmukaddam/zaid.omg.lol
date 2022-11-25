import type { NextPage } from 'next';
import Link from '../components/Link';
import Container from '@/layouts/Container';
import LinkPreview from '@/components/LinkPreview';


const Home: NextPage = () => {
  return (
    <Container>
      <article>
        <div className="mt-10 text-base leading-[26`px] text-[#313233]">
          <p>
            I&apos;m an Indie Software Developer interested in web development,
            open source, design, cybersecurity, technical writing and cloud
            computing based in India. I enjoy visualizing problems
            and writing code to solve them.
          </p>
          <p className="mt-5">
            I came across computer kinds of stuff in junior college. Taken
            programming more seriously after joining college, worked as a
            freelance developer, and I am pursuing a BTech degree in
            Cyber Security. Building projects and experimenting
            with new technologies is what I do in my free time.
          </p>

          <p className="mt-5">
            My goal is to build cool things that make people&apos;s lives easier
            or more interesting—whether that&apos;s through building an app or
            writing code for other people.
          </p>

          <div className="mt-5">
            <ul className="list-disc space-y-1 pl-6 marker:text-[#5d676a]">
              <li className="pl-1.5">
                Built a{' '}
                <Link href="https://play.google.com/store/apps/details?id=com.zaid.ttt">
                  Tic Tac Toe game
                </Link>
                , which works on a peer to peer connection between two players.{' '}
                <span className="whitespace-nowrap font-medium leading-none tracking-tight text-[#313233]/70">
                  (cooked!)
                </span>
              </li>
              <li className="pl-1.5">
                Created{' '}
                <LinkPreview href="https://adabutbetter.space/">Ada But Better</LinkPreview>,
                which is chatbot using OpenAI&apos;s GPT-3 engine. I&apos;s not
                the brightest, but it&apos;s definitely smarter than Ada. Never
                refer to Ada but better as Ada!{' '}
                <span className="whitespace-nowrap font-medium leading-none tracking-tight text-[#313233]/70">
                  (cooked!)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default Home;

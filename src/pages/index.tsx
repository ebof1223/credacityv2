import { type NextPage } from 'next';
import Head from 'next/head';
import DatapointsModal from '~/components/DatapointsModal';
import Display from '~/components/Display';

import Navbar from '~/components/Navbar';
import Sidebar from '~/components/Sidebar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Churn.io</title>
        <meta name="Churn.io" content="Credit card datapoints" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main className="drawer-mobile drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Navbar />
          <Display />
        </div>
        <Sidebar />
      </main>
      <DatapointsModal />
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

// const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//   undefined, // no input
//   { enabled: sessionData?.user !== undefined }
// );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };

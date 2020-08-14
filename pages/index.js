import Link from "next/link";
import Layout from "../components/layout";

function IndexPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src="/assets/team-of-critters.svg"
          className="mt-8 w-full max-w-xl"
          alt="Four one-eyed aliens playing"
        />

				<h2 className="mt-8 md:text-3xl sm:text-xl">Selamat datang di Buku Saku Pramuka</h2>
				<Link href="/daftar-isi/">
					<button className="m-8 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
						Mulai baca
					</button>
				</Link>
      </div>
    </Layout>
  );
}

export default IndexPage;

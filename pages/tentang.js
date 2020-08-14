import Layout from "../components/layout";

function AboutPage() {
  return (
    <Layout>
      <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
        <div className="space-y-6 md:w-1/2">
          {[
            {
              heading: `Apa sebenarnya website ini?`,
              body: `Website ini merupakan Buku Saku Pramuka digital berupa website, berisikan materi yang telah dikumpulkan dari berbagai sumber.`,
            },
          ].map((section) => (
            <div key={section.heading}>
              <h2 className="mb-3 text-xl font-bold">{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>

        <div className="md:w-1/2">
          <img
            alt="A one-eyed alien holding a broken cable connected between a server and a desktop computer"
            className="w-full"
            src="/assets/critter.svg"
          />
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;

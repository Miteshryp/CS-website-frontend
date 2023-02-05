import TypeAnimatedText from "@/components/animation/TypingAnimation";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>IEEE Computer Society MUJ</title>
        <meta
          name="description"
          content="IEEE Computer Society MUJ description"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-2 w-screen h-screen flex flex-row bg-gray-800">
        <div className="flex-1 m-20 justify-start">
          <h1 className="text-6xl font-[poppins] font-semibold">
            {" "}
            Some Catchy Headline a little text
          </h1>
        </div>

        <div className="h-96 flex-1 inline-flex justify-center my-16 mx-12">
          <div className="mockup-code w-full m-auto h-96">
            <pre className="mt-10 flex justify-center" data-prefix="$">
              <TypeAnimatedText
                text={["Welcome to IEEE CS MUJ", "Promotional text number 2"]}
                textBg="bg-red-500"
                size="text-md"
                textClassName="text-red-500"
              />
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>NexLevel Fitness</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col flex-1 justify-center items-center min-h-screen">
        <h1 className="text-blue-600 text-2xl">Welcome to NextLevel Fitness</h1>

        <p className="text-gray-500 text-xl">
          Get started in <em>minutes</em>.
        </p>

        <div className="grid grid-cols-2 max-w-md gap-2">
          <Link
            href="/profile"
          >
            <a className="shadow m-4 p-4 text-left border rounded hover:text-blue-600 hover:border-blue-600">
              <h2 className="text-lg">My Profile</h2>
              <p>View my wellness profile.</p>
            </a>
          </Link>

          <Link
            href="/"
          >
            <a className="shadow m-4 p-4 text-left border rounded hover:text-blue-600 hover:border-blue-600">
              <h2 className="text-lg">Lorum Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </a>
          </Link>

          <Link
            href="/"
          >
            <a className="shadow m-4 p-4 text-left border rounded hover:text-blue-600 hover:border-blue-600">
              <h2 className="text-lg">Lorum Ipsum</h2>
              <p>A pellentesque sit amet porttitor eget dolor.</p>
            </a>
          </Link>

          <Link
            href="/"
          >
            <a className="shadow m-4 p-4 text-left border rounded hover:text-blue-600 hover:border-blue-600">
              <h2 className="text-lg">Lorum Ipsum</h2>
              <p>Nunc pulvinar sapien et ligula ullamcorper malesuada.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className="flex flex-1 px-1 border-t justify-center items-center">
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a className="flex justify-center items-center flex-grow">
            Powered by{" "}
            <span className="h-4 ml-2">
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </Link>
      </footer>
    </div>
  );
}

import Image from 'next/image';
  
  export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Ciao! This is Marco.</h1>
      <p className="prose prose-neutral dark:prose-invert">
        I am computer scientist, computer engineer. After traveling the world for two years I am now ready to start a new chapter.

        At the time I am writing I am setting up a freelance career, wish me luck! Feel free to look around and have fun!
      </p>
      <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt=""
            src={"public/images/home/avatar.jpg"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt=""
            src={"public/images/home/mountain.jpg"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative">
          <Image
            alt=""
            src={"public/images/home/aikido-kyoto.jpg"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt=""
            src={"public/images/home/antaiji-rice.jpg"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt=""
            src={"public/images/home/calligraphy.jpg"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt=""
            src={"public/images/home/risotto-dja.jpg"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>

    </section>
  );
}

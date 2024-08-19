import Image from 'next/image';
  import aikidoibaraki from 'public/images/home/aikido-ibaraki.jpg'
  import aikidokyoto from 'public/images/home/aikido-kyoto.jpg'
  import aikidospain from 'public/images/home/aikido-spain.jpg'
  import antaijirice from 'public/images/home/antaiji-rice.jpg'
  import avatar from 'public/images/home/avatar.jpg'
  import calligraphy from 'public/images/home/calligraphy.jpg'
  import mountain from 'public/images/home/mountain.jpg'
  import mountain2 from 'public/images/home/mountain2.jpg'
  import ordination from 'public/images/home/ordination.jpg'
  import risottodja from 'public/images/home/risotto-dja.jpg'

  export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Ciao! It's Marco!</h1>
      <p className="prose prose-neutral dark:prose-invert">
        I am a computer scientist, and computer engineer with a specialization in High Performance Computing (HPC). 
        After traveling the world for two years I am now ready to start a new chapter.

        At the time I am writing I am setting up a freelance career, wish me luck! Feel free to look around and have fun!
      </p>
      <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="In China"
            src={avatar}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt="On the Himalayas"
            src={mountain}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative">
          <Image
            alt="My ordination as a bodhisattva in the Soto Zen tradition"
            src={ordination}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Rice field work in a zen temple in Japan"
            src={antaijirice}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Practicing calligraphy in Korea"
            src={calligraphy}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Cooking risotto in the UNESCO Dja reserve forest, Camerun"
            src={risottodja}
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

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <p className="prose prose-neutral dark:prose-invert">
        PhD in Computer Science, I worked as a doctoral researcher and research engineer at the Barcelona Supercomputing Center. I participated in different European projects, like the Human Brain Project and DEEP-EST. I had two internships, in a research lab and a big tech company. I published and presented my work to the main HPC conferences and journals.
        My PhD Thesis proposes malleable job scheduling and energy-aware job scheduling policies for HPC.
        In the recent years, I have been living as a freelancer by teaching computer science to the younger generations.
      </p>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Freelance teacher and tutor</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
           Since Mar 2021: Transfering wisdom through knowledge and experience.
        </p>
        <p>
          After my PhD, I closed a big chapter of my life. At that point, I started to see everything 
          from a different perspective, and I started questioning the implications of technology in our society. 
          Some sort of crisis developed. As a big fan of martial arts, the way of transforming war into a life path, 
          I wondered if the same could happen with technology. How can I cultivate it to bring benefits to the human experience?
          In the midst of these thoughts, I discovered how beautiful is to teach, tutor and mentor people. 
          I started teaching computer science, engineering, programming: C, C++, Java, Python, OS, system programming, 
          parallel and distributed systems, digital electronics, signal processing, and DBMS to individuals and groups. 
          Every class also helps me strengthen my knowledge of the basics. Teaching and learning are strictly related.
        </p>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Barcelona Supercomputer Center (BSC)</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Apr 2016 - Apr 2021: PHD Researcher / Research Software Engineer
        </p>
        <p>
          The topic of my research was Dynamic Resource Management for High Performance Computing. I did research in Job 
          scheduling for malleable jobs. With a team we implemented an interface for changing the number of CPUs an application 
          is using inside a computational node. I used this library to enable efficient and transparent malleability for applications. 
          I exploited malleability in job scheduling, developing new algorithms, fed by runtime information gathered from applications 
          and systems, with the objective of improving system utilization and user experience on Supercomputers. 
          I contributed to improving SLURM Simulator accuracy and performance. I also researched the integration of power, 
          performance and energy models into the Job scheduling layer, to optimize the scheduling of jobs on clusters with 
          multiple heterogeneous architectures.
        </p>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Intel Corporation</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
           Jan 2019 - Jun 2019: Internship on Hardware design with Movidus R&D team
        </p>
        <p>
          R&D in sparse Neural Networks memory hardware for 
          <a href="https://www.intel.com/content/www/us/en/products/details/processors/movidius-vpu.html">Intel Movidius</a> 
          hardware architectures.
        </p>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">LRZ: Leibniz-Rechenzentrum</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
           Sep 2018 - Oct 2018: Intern Researcher on the energy awareness for HPC
        </p>
        <p>
          I worked on the integration of energy, power, and runtime prediction model into the logic of the SLURM job scheduler. 
          This work later was published in a paper and in my PhD thesis.
        </p>
        
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Barcelona Supercomputing Center (BSC)</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
           Apr 2015 - Oct 2015 Undergraduate Researcher on dynamic GPU scheduling
        </p>
        <p>
          Master thesis on extension of DEEP-DEEPER Programming Model in an HPC environment.
          The thesis aimed to integrate the DEEP Programming Model with a Resource Manager (SLURM), 
          enabling the possibility to dynamically allocate new resources on demand by the Programming Model 
          and spawn MPI processes on it, instead of statically allocating them at launch time.
        </p>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Politecnico di Torino</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
           Oct 2013 - Nov 2014: Teaching Assistant
        </p>
        <p>
          While completing my master degreer, I worked part-time in teaching and assisting students in programming classes 
          for basic and advanced courses of C and Java.
        </p>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">synArea Consultants Srl</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
           Sep 2013 - Mar 2014: Software developer
        </p>
        <p>
          Initially as an intern, later as a software developer, I worked on the parallelization on GPU of a scientific algorithm 
          simulating a crowd in panic in an indoor enviroment. I developed OpenCL and CUDA kernels, and integrated, tested, and 
          evaluated the code.
          Finally, I worked on the integration of the algorithm in 3Doors Framework, developing a 3D graphical version of the 
          simulation in C++.
        </p>
    </section>
  );
}

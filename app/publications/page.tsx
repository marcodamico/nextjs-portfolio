export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">publications</h1>
      <p className="prose prose-neutral dark:prose-invert">
        Here you can find a list of my publications and academic achievements:

      </p>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">synArea Consultants Srl</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
           Sep 2013 - Mar 2014: Intern and Software developer
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

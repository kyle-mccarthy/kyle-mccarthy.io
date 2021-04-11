const tags = {
  programming: { title: "Programming", slug: "programming" },
  theory: { title: "Theory", slug: "theory" },
  algorithms: { title: "Algorithms", slug: "algorithms" },
};

const posts = [
  {
    id: 1,
    title: "Turing completeness In Computability Theory",
    slug: "turing-completeness-in-computability-theory",
    tags: [tags.programming],
    createdAt: new Date("2021-03-21T16:00:00").toJSON(),
    summary: [
      "In computability theory, a system of data-manipulation rules (such as a computer's instruction set, a programming language, or a cellular automaton) is said to be Turing-complete or computationally universal if it can be used to simulate any Turing machine. This means that this system is able to recognize or decide other data-manipulation rule sets.",
    ],
    content: [
      "In computability theory, a system of data-manipulation rules (such as a computer's instruction set, a programming language, or a cellular automaton) is said to be Turing-complete or computationally universal if it can be used to simulate any Turing machine. This means that this system is able to recognize or decide other data-manipulation rule sets. Turing completeness is used as a way to express the power of such a data-manipulation rule set. Virtually all programming languages today are Turing-complete. The concept is named after English mathematician and computer scientist Alan Turing.",
      "A related concept is that of Turing equivalence – two computers P and Q are called equivalent if P can simulate Q and Q can simulate P. The Church–Turing thesis conjectures that any function whose values can be computed by an algorithm can be computed by a Turing machine, and therefore that if any real-world computer can simulate a Turing machine, it is Turing equivalent to a Turing machine. A universal Turing machine can be used to simulate any Turing machine and by extension the computational aspects of any possible real-world computer.",
    ],
  },

  {
    id: 2,
    title: "P versus NP problem",
    slug: "p-vs-np-problem",
    tags: [tags.theory, tags.algorithms],
    createdAt: new Date("2021-03-21T16:00:00").toJSON(),
    summary: [
      "The P versus NP problem is a major unsolved problem in computer science. It asks whether every problem whose solution can be quickly verified can also be solved quickly. An answer to the P versus NP question would determine whether problems that can be verified in polynomial time can also be solved in polynomial time. If it turned out that P ≠ NP, which is widely believed, it would mean that there are problems in NP that are harder to compute than to verify: they could not be solved in polynomial time, but the answer could be verified in polynomial time.",
    ],
    content: [
      "The P versus NP problem is a major unsolved problem in computer science. It asks whether every problem whose solution can be quickly verified can also be solved quickly.",
      "It is one of the seven Millennium Prize Problems selected by the Clay Mathematics Institute, each of which carries a US$1,000,000 prize for the first correct solution.",
      'The informal term quickly, used above, means the existence of an algorithm solving the task that runs in polynomial time, such that the time to complete the task varies as a polynomial function on the size of the input to the algorithm (as opposed to, say, exponential time). The general class of questions for which some algorithm can provide an answer in polynomial time is called "class P" or just "P". For some questions, there is no known way to find an answer quickly, but if one is provided with information showing what the answer is, it is possible to verify the answer quickly. The class of questions for which an answer can be verified in polynomial time is called NP, which stands for "nondeterministic polynomial time"',
      "An answer to the P versus NP question would determine whether problems that can be verified in polynomial time can also be solved in polynomial time. If it turned out that P ≠ NP, which is widely believed, it would mean that there are problems in NP that are harder to compute than to verify: they could not be solved in polynomial time, but the answer could be verified in polynomial time.",
    ],
  },
  {
    id: 3,
    title: "Rust: Performance, Reliability, and Productivity",
    slug: "rust-performance-reliability-and-productivity",
    tags: [tags.programming],
    createdAt: new Date("2021-03-21T16:00:00").toJSON(),
    summary: [
      "A language empowering everyone to build reliable and efficient software.",
    ],
    content: [
      "Performance: Rust is blazingly fast and memory-efficient: with no runtime or garbage collector, it can power performance-critical services, run on embedded devices, and easily integrate with other languages.",
      "Reliability: Rust’s rich type system and ownership model guarantee memory-safety and thread-safety — enabling you to eliminate many classes of bugs at compile-time.",
      "Productivity: Rust has great documentation, a friendly compiler with useful error messages, and top-notch tooling — an integrated package manager and build tool, smart multi-editor support with auto-completion and type inspections, an auto-formatter, and more.",
    ],
  },

  // {
  //   id: 1,
  //   title: "",
  //   slug: "",
  //   tags: [tags.programming],
  //   createdAt: new Date("2021-03-21T16:00:00"),
  //   summary: "",
  //   content: ["", ""],
  // },
];

export default posts;

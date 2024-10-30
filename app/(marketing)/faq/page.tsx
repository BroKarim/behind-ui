import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WordPullUp } from "@/components/text-animation";
import Link from "next/link";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "What tech do you use?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://google.com",
  },
  {
    question: "One of your component is broker!!",
    answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What do I get when I purchase?",
    answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Do you provide design file?",
    answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "What exactly can I use these components for?",
    answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Do you offer technical support?",
    answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "What is your refund policy?",
    answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function FAQ() {
  return (
    <>
      <main className="container relative z-10 mx-auto mb-12 min-h-[calc(100vh_-_64px_-_108px)] max-w-7xl grow p-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            {/* <h1 className="max-w-9xl inline-block text-4xl font-bold tracking-tight lg:text-8xl">Frequently Ask Question</h1> */}
            <WordPullUp className="max-w-9xl text-left text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-8xl md:leading-[5rem]" words="Frequently Ask Question" />
            <p className=" text-base">Ask everything you need to know about our services</p>
          </div>
        </div>
        <hr className="my-8" />
        <Accordion type="single" collapsible className=" w-full  ">
          {content.map((item, index) => (
            <AccordionItem key={index} className="mt-4 rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50" value={`item-${index}`}>
              <AccordionTrigger className="text-xl hover:no-underline">{item.question}</AccordionTrigger>
              <AccordionContent>
                {item.answer}
                {item.link && (
                  <Link href={item.link} className="text-blue-500 hover:underline">
                    Read more
                  </Link>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </>
  );
}

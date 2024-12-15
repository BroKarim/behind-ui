import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WordPullUp } from "@/components/text-animation";
import Link from "next/link";
import { Icons } from "@/components/icons";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "What tech do you use?",
    answer: "Our website components are crafted using React (TypeScript), Tailwind CSS, and Shadcn. Most animations are powered by Framer Motion, although we occasionally incorporate other animation libraries",
  },
  {
    question: "One of your component is broker!!",
    answer: "We always ensure thorough testing before publishing our components. However, mistakes can still happen. You can contact us through our social media channels like Twitter and Instagram for any issues.",
  },
  {
    question: "How do custom components work?",
    answer:
      "It's simple! Just provide a reference link and a description of the component design. We'll do our best to create a similar component and publish it on the explore page. Currently, we're focusing solely on website hero sections.",
  },
  // {
  //   question: "What do I get when I purchase?",
  //   answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  // },
  {
    question: "Do you provide design file?",
    answer: "Yes, we offer Figma files that you can clone or use as needed. However, they are currently still under development.",
  },
  {
    question: "What exactly can I use these components for?",
    answer:
      "From the get-go, we've aimed to provide aesthetic hero components ready to shine across various fields like eCommerce, portfolios, agencies, AI, and beyond. We're also working tirelessly to develop mobile and desktop components, along with production-standard templates to meet all your needs.",
  },
  {
    question: "Do you offer technical support?",
    answer:
      "Yes, we provide technical support through collaboration, similar to how an agency operates. However, this feature is currently unavailable as we're focusing on developing the website and adding more content. Stay tuned for updates!.",
  },
  // {
  //   question: "What is your refund policy?",
  //   answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  // },
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

import { HyperText } from "@/components/ui/hyper-text";
import { changelogData } from "./data";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ChangelogPage() {
  return (
    <>
      <div className="container mx-auto  max-w-4xl py-6 lg:py-10">
        <div className="text-left mb-12">
          <h1 className="text-5xl font-bold mb-4">What's New</h1>
          <p className="text-gray-400 text-lg mb-8">View the latest updates and features on PostSpark.</p>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-start">
            <Button variant="secondary" className="bg-gray-700 hover:bg-gray-600 text-white">
              Follow us
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">Roadmap</Button>
          </div>
        </div>
        <div className="flex items-center flex-col justify-center">
          {changelogData.map((entry, index) => (
            <div key={index} className="space-y-4 mb-8">
              <h2 className="text-2xl font-semibold mb-4 ">{entry.date}</h2>
              <ul className="list-disc list-inside space-y-2 mb-8 ">
                {entry.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="rounded-xl overflow-hidden border">
                <Image src={entry.image} alt={`Changelog entry from ${entry.date}`} width={800} height={600} className="w-full h-auto" />
              </div>
            </div>
          ))}
        </div>

        {/* <HyperText>Coming Soon</HyperText> */}
      </div>
    </>
  );
}

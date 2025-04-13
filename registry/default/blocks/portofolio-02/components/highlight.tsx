import {
  LinkIcon,
  MapPinIcon,
  MailIcon,
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  LightbulbIcon,
  PhoneIcon,
} from "lucide-react";

import { USER } from "../data/USER";
import { Panel, PanelContent } from "./panel";
import { IntroItem } from "./intro-item";

export function Highlight() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
            />
          );
        })}

        <IntroItem icon={<MapPinIcon />} content={USER.address} />

        <PhoneItem phoneNumber={USER.phoneNumber} />

        <EmailItem email={USER.email} />

        <IntroItem
          icon={<LinkIcon />}
          content={USER.website}
          href={USER.website}
        />
      </PanelContent>
    </Panel>
  );
}

function EmailItem({ email }: { email: string }) {
  return <IntroItem icon={<MailIcon />} content={email} href="#" />;
}

function getJobIcon(title: string) {
  if (/(developer|engineer)/i.test(title)) {
    return <CodeXmlIcon />;
  }

  if (/(founder|co-founder)/i.test(title)) {
    return <LightbulbIcon />;
  }

  return <BriefcaseBusinessIcon />;
}

export function JobItem({
  title,
  company,
  website,
}: {
  title: string;
  company: string;
  website: string;
}) {
  return (
    <IntroItem
      icon={getJobIcon(title)}
      content={
        <>
          {title} @
          <a
            className="ml-0.5"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {company}
          </a>
        </>
      }
    />
  );
}

export function PhoneItem({ phoneNumber }: { phoneNumber: string }) {
  return <IntroItem icon={<PhoneIcon />} content={phoneNumber} href="/" />;
}

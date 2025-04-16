import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React from "react";

import { EXPERIENCES } from "../data/career-path";
import { Prose } from "./typhography";
import { Panel, PanelHeader, PanelTitle } from "./panel";
import {
  CareerPath,
  CareerPathPositionIcon,
  CareerPathPosition,
} from "../type/career-path";
import {
  ChevronDownIcon,
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  LightbulbIcon,
  LucideProps,
  SchoolIcon,
} from "lucide-react";
import { Tag } from "./tag";

export function CareerPaths() {
  const defaultValue = EXPERIENCES.flatMap((exp) =>
    exp.positions.filter((pos) => pos.expanded).map((pos) => pos.id),
  );

  return (
    <Panel id="experience" className="scroll-mt-[4.75rem]">
      <PanelHeader>
        <PanelTitle>Experience</PanelTitle>
      </PanelHeader>

      <AccordionPrimitive.Root
        type="multiple"
        defaultValue={defaultValue}
        asChild
      >
        <div className="px-4">
          {EXPERIENCES.map((experience, index) => {
            return <ExperienceItem key={index} experience={experience} />;
          })}
        </div>
      </AccordionPrimitive.Root>
    </Panel>
  );
}

function ExperienceItem({ experience }: { experience: CareerPath }) {
  return (
    <div className="screen-line-after space-y-4 py-4">
      <div className="flex items-center gap-3">
        <h3 className="font-heading text-lg font-medium leading-snug">
          {experience.company}
        </h3>

        {experience?.current && (
          <span className="relative flex items-center justify-center">
            <span className="bg-success-foreground absolute inline-flex size-3 animate-ping rounded-full opacity-50"></span>
            <span className="bg-success-foreground relative inline-flex size-2 rounded-full"></span>
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position, index) => {
          return <CareerPathPositionItem key={index} position={position} />;
        })}
      </div>
    </div>
  );
}

function CareerPathPositionItem({
  position,
}: {
  position: CareerPathPosition;
}) {
  return (
    <AccordionPrimitive.Item value={position.id} asChild>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <AccordionPrimitive.Trigger className="group/experience block w-full select-none text-left [&[data-state=open]_.lucide-chevron-down]:rotate-180">
          <div className="z-1 relative mb-1 flex items-center gap-3 bg-background">
            <div className="shadow-xs flex size-6 shrink-0 items-center justify-center rounded-lg border bg-accent/50 text-muted-foreground">
              <ExperienceIcon className="size-4" icon={position.icon} />
            </div>

            <h4 className="font-heading flex-1 text-balance font-medium underline-offset-4 group-hover/experience:underline">
              {position.title}
            </h4>

            <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-300" />
          </div>

          <p className="flex items-center gap-2 pl-9 font-mono text-xs text-primary/70">
            {position.employmentType && (
              <>
                <span>{position.employmentType}</span>
                <span className="flex h-4 w-px shrink-0 bg-border" />
              </>
            )}

            <span>{position.year}</span>
          </p>
        </AccordionPrimitive.Trigger>

        <AccordionPrimitive.Content className="overflow-hidden transition-all duration-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          {position?.description && (
            <Prose className="pl-9 pt-2 text-primary ">
              {position?.description}
            </Prose>
          )}

          {Array.isArray(position.skills) && position.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pl-9 pt-2">
              {position.skills.map((skill, index) => (
                <Tag key={index}>{skill}</Tag>
              ))}
            </div>
          )}
        </AccordionPrimitive.Content>
      </div>
    </AccordionPrimitive.Item>
  );
}

const iconMap: Record<
  CareerPathPositionIcon,
  React.ComponentType<LucideProps>
> = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  education: GraduationCapIcon,
  business: BriefcaseBusinessIcon,
  school: SchoolIcon,
  idea: LightbulbIcon,
};

function ExperienceIcon({
  icon,
  ...props
}: {
  icon: CareerPathPositionIcon | undefined;
} & LucideProps) {
  const IconComponent = icon ? iconMap[icon] : BriefcaseBusinessIcon;
  return <IconComponent {...props} />;
}

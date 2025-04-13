export type CareerPathPositionIcon =
  | "code"
  | "design"
  | "education"
  | "business"
  | "school"
  | "idea";

export type CareerPathPosition = {
  id: string;
  title: string;
  year: string;
  employmentType?: string;
  description?: string;
  icon?: CareerPathPositionIcon;
  skills?: string[];
  expanded?: boolean;
};

export type CareerPath = {
  company: string;
  companyLogo?: string;
  positions: CareerPathPosition[];
  current?: boolean;
};

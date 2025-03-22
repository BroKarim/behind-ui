import type React from "react";

const Wrapper = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}: {
  className: string;
  id: string;
  crosses?: boolean;
  crossesOffset: string;
  customPaddings: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      id={id}
      className={`
      relative
      ${customPaddings || `py-10 lg:py-16  ${crosses ? "" : ""}`}
      ${className || " "}`}
    >
      {children}

      <div className="lg:left-7.5 pointer-events-none absolute left-5 top-0 hidden h-[calc(100%_+_30px)] w-[0.0625rem]  bg-stone-200 dark:bg-[#26242C] md:block xl:left-16" />
      <div className="lg:right-7.5 pointer-events-none absolute right-5 top-0 hidden  h-[calc(100%_+_30px)] w-[0.0625rem]  bg-stone-200 dark:bg-[#26242C] md:block xl:right-14" />

      {crosses && (
        <>
          <div
            className={`left-7.5 right-7.5 h-0.25 absolute top-0 hidden bg-[#26242C] ${crossesOffset && crossesOffset} pointer-events-none right-16 lg:block xl:left-16`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Wrapper;

export const SectionSvg = ({ crossesOffset }: { crossesOffset: string }) => {
  return (
    <>
      <PlusSvg
        className={`absolute -top-[0.3125rem] left-[1.5625rem] hidden ${crossesOffset && crossesOffset} pointer-events-none lg:block xl:left-[3.6825rem]`}
      />

      <PlusSvg
        className={`absolute -top-[0.3125rem]  right-[1.4625rem] hidden ${crossesOffset && crossesOffset} pointer-events-none lg:block xl:right-[3.25rem]`}
      />
    </>
  );
};

export const PlusSvg = ({ className = "" }) => {
  return (
    <svg className={`${className} || ""`} width="11" height="11" fill="none">
      <path
        d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
        fill="#ada8c4"
      />
    </svg>
  );
};

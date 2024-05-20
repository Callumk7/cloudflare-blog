import { ReactNode } from "react";
import { Card } from "../layout/card";
import { H2 } from "../layout/headers";

interface WorkExperienceProps {
  institution: string;
  dateFrom: Date;
  dateTo: Date | "current";
  title: string;
  children?: ReactNode;
}

export function WorkExperience({
  institution,
  dateFrom,
  dateTo,
  title,
  children,
}: WorkExperienceProps) {
  return (
    <Card>
      <TimeWorked dateFrom={dateFrom} dateTo={dateTo} />
      <H2 primary>{institution}</H2>
      <h3 className="pb-3 pt-1 text-lg font-semibold">{title}</h3>
      <p className="leading-loose">{children}</p>
    </Card>
  );
}

interface TimeWorkedProps {
  dateFrom: Date;
  dateTo: Date | "current";
}

function TimeWorked({ dateFrom, dateTo }: TimeWorkedProps) {
  return (
    <div className="text-sm font-light">
      <span>
        {dateFrom.toLocaleString("default", { month: "long" })} {dateFrom.getFullYear()}
      </span>{" "}
      {dateTo === "current" ? (
        <span>(active)</span>
      ) : (
        <>
          <span>to</span>{" "}
          <span>
            {dateTo.toLocaleString("default", { month: "long" })} {dateTo.getFullYear()}
          </span>
        </>
      )}
    </div>
  );
}

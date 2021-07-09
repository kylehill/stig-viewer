import parser from "fast-xml-parser";
import fs from "fs/promises";
import { Vulnerability, XMLVulnerability } from "types/vulnerability";

export const parseChecklist = async (
  filename: string
): Promise<Vulnerability[]> => {
  const fileContents = await fs.readFile(
    `${process.cwd()}/checklists/${filename}`,
    "utf-8"
  );
  const parsed = parser.parse(fileContents);

  const rawVulns = parsed.CHECKLIST.STIGS.iSTIG.VULN;

  const vulns: Vulnerability[] = rawVulns.map((vuln: XMLVulnerability) => {
    return {
      status: vuln.STATUS,
      finding_details: vuln.FINDING_DETAILS,
      comments: vuln.COMMENTS,
      severity_override: vuln.SEVERITY_OVERRIDE,
      severity_justification: vuln.SEVERITY_JUSTIFICATION,
      stig_data: vuln.STIG_DATA.reduce((mem, pair) => {
        return {
          ...mem,
          [pair.VULN_ATTRIBUTE]: pair.ATTRIBUTE_DATA,
        };
      }, {} as Record<string, string>),
    };
  });

  return vulns;
};

export const getChecklists = async (): Promise<Vulnerability[]> => {
  const files = await fs.readdir(`${process.cwd()}/checklists`);

  return (
    await Promise.all(
      files.map(async (filepath) => {
        try {
          const checklist = await parseChecklist(filepath);
          return checklist;
        } catch (e) {
          return [];
        }
      })
    )
  ).flat();
};

import VulnerabilityDetail from "components/VulnerabilityDetail";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Vulnerability } from "types/vulnerability";
import { getChecklists } from "util/parseChecklist";

type Props = {
  vuln?: Vulnerability;
};

const Page = ({ vuln }: Props) => {
  if (!vuln) {
    return <div>not found</div>;
  }

  return <VulnerabilityDetail vuln={vuln} />;
};

export default Page;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const checklist = await getChecklists();

  const vulnerability = checklist.find(
    (vuln) => vuln.stig_data["Vuln_Num"] === id
  );
  return {
    props: {
      vuln: vulnerability,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const checklist = await getChecklists();

  return {
    fallback: false,
    paths: checklist.map((vuln) => {
      return {
        params: {
          id: vuln.stig_data["Vuln_Num"],
        },
      };
    }),
  };
};

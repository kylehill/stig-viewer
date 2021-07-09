import VulnerabilityList from "components/VulnerabilityList";
import { GetStaticProps } from "next";
import React from "react";
import { Vulnerability } from "types/vulnerability";
import { getChecklists } from "util/parseChecklist";

type Props = {
  vulns: Vulnerability[];
};

const Page = ({ vulns }: Props) => {
  return <VulnerabilityList vulns={vulns} />;
};

export default Page;

export const getStaticProps: GetStaticProps = async () => {
  const checklist = await getChecklists();

  return {
    props: {
      vulns: checklist,
    },
  };
};

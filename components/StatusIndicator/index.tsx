import { VulnerabilityStatus } from "types/vulnerability";

import styles from "./index.module.css";

type Props = {
  status: VulnerabilityStatus;
};

const StatusIndicator = ({ status }: Props) => {
  switch (status) {
    case VulnerabilityStatus.NotAFinding:
      return (
        <div className={`${styles.StatusIndicator} ${styles.NotFound}`}>
          Not Found
        </div>
      );

    case VulnerabilityStatus.Open:
      return (
        <div className={`${styles.StatusIndicator} ${styles.Open}`}>Open</div>
      );

    case VulnerabilityStatus.NotApplicable:
      return (
        <div className={`${styles.StatusIndicator} ${styles.NotApplicable}`}>
          Not Applicable
        </div>
      );

    default:
      return (
        <div className={`${styles.StatusIndicator} ${styles.Unknown}`}>
          Unknown
        </div>
      );
  }
};

export default StatusIndicator;

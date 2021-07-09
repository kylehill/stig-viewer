import styles from "./index.module.css";

type Props = {
  property: string;
  value: string;
};

const DataField = ({ property, value }: Props) => {
  return (
    <div className={styles.DataField}>
      <dt>{property}</dt>
      <dd>{value}</dd>
    </div>
  );
};

export default DataField;

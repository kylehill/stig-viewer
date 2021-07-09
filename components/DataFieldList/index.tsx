import DataField from "components/DataField";

type Props = {
  data: Record<string, string>;
};

const DataFieldList = ({ data }: Props) => {
  const sortedKeys = Object.keys(data).sort();

  return (
    <dl>
      {sortedKeys
        .filter((key) => !!data[key])
        .map((key, idx) => {
          return <DataField key={idx} property={key} value={data[key]} />;
        })}
    </dl>
  );
};

export default DataFieldList;

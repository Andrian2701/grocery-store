import { useEffect, useState } from "react";

export const useFormatQuantity = (q: number, units: string) => {
  const [formattedQuantity, setFormattedQuantity] = useState<string>("");

  useEffect(() => {
    const handleFormatQ = (q: number) => {
      if (units === "g-kg") {
        return q && q >= 1000 ? `${(q / 1000).toFixed(1)}kg` : `${q}g`;
      }
      return `${q}pcs`;
    };

    setFormattedQuantity(handleFormatQ(q));
  }, [q, units]);

  return formattedQuantity;
};

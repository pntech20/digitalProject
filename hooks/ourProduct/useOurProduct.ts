import { useCallback, useMemo, useState } from "react";
import { ItemOurProduct } from "../../constant/interfaces";
import Rec from "../../public/img/Rec.png";
import Rectangle from "../../public/img/Rectangle.png";
import Rec12 from "../../public/img/Rec12.png";
export const useOurProduct = () => {
  const listOurProduct: ItemOurProduct[] = useMemo(
    () => [
      {
        img: Rec12,
        tittle: "PT. ABCDE",
        text: "Web Development",
        button: "See Details",
      },
      {
        img: Rec,
        tittle: "Rose Wood",
        text: "Seo",
        button: "See Details",
      },
      {
        img: Rectangle,
        tittle: "CoSpace",
        text: "Presentation Template",
        button: "See Details",
      },
    ],
    []
  );
  return {
    listOurProduct,
  };
};

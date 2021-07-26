import { useMemo } from "react";
import { ItemSolution } from "../../constant/interfaces";
import Framme from "../../public/img/Frame.png";
import Framme1 from "../../public/img/Frame1.png";
import Framme2 from "../../public/img/Frame2.png";
import Primarystroke from "../../public/img/primarystroke.png";

export const useSolution = () => {
  const listSolutions: ItemSolution[] = useMemo(
    () => [
      {
        img: Framme,
        tittle: "Web & Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        img: Primarystroke,
        tittle: "Design Services",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        img: Framme1,
        tittle: "SEO",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        img: Framme2,
        tittle: "Security Tester",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    []
  );
  return {
    listSolutions,
  };
};

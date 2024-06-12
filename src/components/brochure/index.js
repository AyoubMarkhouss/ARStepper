import React from "react";
import Models from "./Models";
import Form from "./Form";
import { cn } from "../../utils/cn";
import { useCarStore } from "../../store/brochure/car";
import Merci from "./merci";
import { useStatusStore } from "../../store/status";
import { useInfoStore } from "../../store/brochure/carInfo";

const Index = () => {
  const { car } = useCarStore();
  const { done } = useInfoStore();
  return (
    <div className="relative overflow-y-clip h-screen">
      <div className="max-w-2xl relative mx-auto">
        <div className="flex z-20  justify-between">
          {stepsLabel.map((lab, idx) => {
            return (
              <div key={idx} className="relative shrink-0">
                <div
                  className={cn(
                    "bg-zinc-500 z-20 w-10 h-10 relative rounded-full",
                    car !== "" && idx === 1 ? "bg-zinc-900" : "",
                    idx === 0 ? "bg-zinc-900" : ""
                  )}
                >
                  <p className="semi absolute left-1/2 top-1/2 text-white -translate-x-1/2 -translate-y-1/2">
                    {idx + 1}
                  </p>
                </div>
                <p className="semi text-center mt-3 text-sm shrink-0 absolute left-1/2 -translate-x-1/2">
                  {lab.label}
                </p>
              </div>
            );
          })}
        </div>
        <div className="h-[2px] w-full top-1/2 z-10 -translate-y-1/2 absolute bg-zinc-950" />
      </div>
      <Models />
      <Form />
      {done && <Merci />}
    </div>
  );
};

export default Index;

const stepsLabel = [{ label: "MODÈLE" }, { label: "VOS COORDONNÉES" }];

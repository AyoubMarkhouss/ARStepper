import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInfoStore } from "../../store/devis/carInfo";
import { cityInfo } from "../../data/address";
import { mapStore } from "../../store/devis/map";
const Map = () => {
  const {
    address,

    done,
    sec,

    map,
  } = useInfoStore();
  const { updateMapClicked } = mapStore();
  const { updateAddress } = useInfoStore();
  const [selectedMap, setSelectedMap] = useState("");
  return (
    <motion.div
      initial={{
        position: "absolute",
        top: "100%",
        left: "0px",
        opacity: 0,
      }}
      animate={{
        top: done ? "-3%" : "100%",
        opacity: done ? 1 : 0,
      }}
      className="relative bg-[#F4F4F4] w-full h-full -z-10 md:z-10 py-3 mt-20 md:mt-32"
    >
      <p className="semi bg-[#F4F4F4] md:text-2xl pl-5 pb-5">
        SÉLECTIONNEZ UN DE NOS DISTRIBUTEURS
      </p>
      <iframe
        src={selectedMap === "" ? map : selectedMap}
        className="  w-full h-screen md:h-[40rem]"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="bg-[#F4F4F4] left-3 absolute top-12 md:top-6 md:h-[40rem] w-[23rem] md:w-[28rem] mt-10">
        <p className="semi text-center border-b border-black text-sm py-5">
          {address}
        </p>
        <div className="flex flex-col gap-4">
          {cityInfo[sec - 1]?.sections.map((bb, ik) => (
            <div
              onClick={() => {
                setSelectedMap(bb.map);
                updateAddress(bb.address);
              }}
              key={bb.sec}
              className="hover:bg-white pl-5 md:w-[28rem] py-5"
            >
              <p className="semi ">
                {ik + 1}-{bb.label}
              </p>
              <p className="text-sm">
                Services : Business Center | Spécialiste
              </p>
              <p className="pb-3">{bb.address}</p>
              <button
                onClick={() => updateMapClicked(true)}
                className="semi bg-[#292B35] text-white px-4 py-2"
              >
                SÉLECTIONNER
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Map;

import { motion } from "framer-motion";
import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useCarStore } from "../../store/essai/car";
import { cityInfo } from "../../data/address";
import { cn } from "../../utils/cn";
import { useInfoStore } from "../../store/essai/carInfo";
const Form = () => {
  const { car, updateCar } = useCarStore();
  const [query, setQuery] = useState("");
  const [clicked, setClicked] = useState("");
  const {
    civilité,
    prénom,
    nom,
    email,
    tel,
    address,
    callType,
    siren,
    marketing,
    communication,
    profilage,
    done,
    map,
    label,
    updateCivilité,
    updatePrénom,
    updateNom,
    updateEmail,
    updateTel,
    updateAddress,
    updateCallType,
    updateLabel,
    updateSiren,
    updateMarketing,
    updateCommunication,
    updateProfilage,
    updateDone,
    setSec,
    setMap,
  } = useInfoStore();

  const fixedData = cityInfo.flatMap((items) => items.sections);
  const filteredPeople =
    query === ""
      ? []
      : fixedData.filter((person) => {
          return person.address.toLowerCase().includes(query.toLowerCase());
        });
  console.log(query);
  async function onSubmit(event) {
    event.preventDefault();
    // Set loading to true when the request starts

    try {
      const formData = new FormData(event.currentTarget);
      console.log("hi");
      updateDone(true);
      console.log(event.currentTarget);
      await fetch(
        // "https://script.google.com/macros/s/AKfycbwQjZ2n7D7NcoqcpK-emOsNa65pTsU0joo_oT6PYl45zgwaPnQ21lmUlN15bO24p4YPGw/exec",
        "https://script.google.com/macros/s/AKfycbyaA5XF4HcydyK57rqbLJnWYf6Yzrxl58N1Io7krnCq-lXu8iSegfvRofuyw6bsLTck/exec",
        {
          method: "POST",
          body: formData,
          cache: "no-cache",
        }
      );

      // Handle response if necessary
    } catch (error) {
      // Handle error if necessary
      console.error(error);
    } finally {
      // setTimeout(() => {
      //   router.refresh();
      // }, 3000);
    }
  }

  return (
    // <motion.div
    //   initial={{
    //     position: "absolute",
    //     top: "100%",
    //     left: "0px",
    //     opacity: 0,
    //   }}
    //   animate={{
    //     top: car !== "" ? "10%" : "100%",
    //     opacity: car !== "" ? 1 : 0,
    //   }}
    //   className="grid z-40 bg-[#F4F4F4] w-full h-full grid-cols-1 md:grid-cols-3 px-10  md:px-20 pb-20 pt-2"
    // >
    //   <div className="col-span-3 md:col-span-1">
    //     <h2>Votre sélection:</h2>
    //     <h2 className="semi text-lg">
    //       {cars.filter((cr) => cr.label === car)[0]?.label}
    //     </h2>
    //     <img
    //       src={cars.filter((cr) => cr.label === car)[0]?.image}
    //       className="w-80"
    //       alt="info"
    //     />
    //     <button
    //       onClick={() => updateCar("")}
    //       className="semi h-12 px-7 border border-black text-black mt-14 flex items-center justify-center"
    //     >
    //       CHANGER DE MODÈLE
    //     </button>
    //   </div>
    //   <div className="col-span-3 md:col-span-2 ">
    //     <div>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-10">
    //         <div className="flex flex-col">
    //           <select
    //             onChange={(e) => updateCivilité(e.target.value)}
    //             className="semi  border border-black h-12"
    //           >
    //             <option className="semi pl-2" value="" hidden>
    //               Civilité*
    //             </option>
    //             <option className="semi" value="Mr.">
    //               M.
    //             </option>
    //             <option className="semi" value="MME.">
    //               MME.
    //             </option>
    //             <option className="semi" value="MLLE.">
    //               MLLE.
    //             </option>
    //           </select>
    //         </div>
    //         <div></div>

    //         <input
    //           type="text"
    //           onChange={(e) => updatePrénom(e.target.value)}
    //           placeholder="PRÉNOM*"
    //           className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
    //         />
    //         <input
    //           onChange={(e) => updateNom(e.target.value)}
    //           type="text"
    //           placeholder="NOM*"
    //           className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
    //         />
    //         <input
    //           onChange={(e) => updateEmail(e.target.value)}
    //           type="email"
    //           placeholder="E-MAIL*"
    //           className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
    //         />
    //         <input
    //           onChange={(e) => updateTel(e.target.value)}
    //           type="tel"
    //           placeholder="TELEPHONE*"
    //           className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
    //         />
    //         <div className="relative w-full border">
    //           <input
    //             onClick={() => setClicked(true)}
    //             onChange={(e) => {
    //               setQuery(e.target.value);
    //               updateAddress(e.target.value);
    //             }}
    //             type="text"
    //             value={query}
    //             placeholder="CODE POSTAL*"
    //             className="semi bg-[#F4F4F4] w-full border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
    //           />
    //           {clicked && query !== "" && (
    //             <div
    //               className={cn(
    //                 "z-50 absolute divide-y w-full bg-white",
    //                 filteredPeople.length > 0 && clicked
    //                   ? "border-2 border-black"
    //                   : ""
    //               )}
    //             >
    //               {filteredPeople.map((file) => {
    //                 return (
    //                   <p
    //                     onClick={() => {
    //                       setQuery(file.address);
    //                       setClicked(false);
    //                       updateAddress(file.address);
    //                       setSec(file.sec);
    //                       setMap(file.map);
    //                       updateLabel(file.label);
    //                     }}
    //                     key={file.label}
    //                     className="semi text-xs text-start cursor-pointer pl-2 py-4 line-clamp-1 bg-[#F4F4F4]"
    //                   >
    //                     {file.address}
    //                   </p>
    //                 );
    //               })}
    //             </div>
    //           )}
    //         </div>
    //         <select
    //           onChange={(e) => updateCallType(e.target.value)}
    //           className="semi bg-[#F4F4F4] border border-black h-12 "
    //         >
    //           <option hidden className="pl-2">
    //             MOYENNE DE CONTACT SOUHAITÉ
    //           </option>
    //           <option className="semi">TÉLÉPHONE</option>
    //           <option className="semi">APPÉL VIDEO</option>
    //         </select>
    //       </div>
    //       <div className="pt-10">
    //         <label className="semi text-sm">
    //           POSSÉDEZ-VOUS UN NUMÉRO DE SIREN?
    //         </label>
    //         <div className="flex pt-3">
    //           <div className="flex items-center">
    //             <input
    //               onClick={() => updateSiren(true)}
    //               value="oui"
    //               type="radio"
    //               name="siren"
    //               className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
    //             />
    //             <label className="semi pl-2">OUI</label>
    //           </div>
    //           <div className="flex items-center pl-20">
    //             <input
    //               onClick={() => updateSiren(false)}
    //               type="radio"
    //               name="siren"
    //               value="non"
    //               className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
    //             />
    //             <label className="semi pl-2">NON</label>
    //           </div>
    //         </div>
    //         <p className="italic text-sm pt-10">
    //           * Tous les champs sont obligatoires
    //         </p>
    //       </div>
    //       <div className="pt-10">
    //         <div className="pb-5">
    //           <label className="semi ">CONSENTEMENT</label>
    //           <p>
    //             Après avoir lu la
    //             <a href="" className="underline pl-1 cursor-pointer ">
    //               Note d&apos;information*
    //             </a>
    //           </p>
    //         </div>
    //         <div className="flex md:flex-row pt-3 flex-col md:items-center">
    //           <div className="flex md:items-center">
    //             <input
    //               value=""
    //               type="radio"
    //               name="A"
    //               onClick={() => updateMarketing(true)}
    //               className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
    //             />
    //             <label className="semi pl-2">J&apos;ACCEPTE</label>
    //           </div>
    //           <div className="flex items-center md:pl-20">
    //             <input
    //               type="radio"
    //               name="A"
    //               onClick={() => updateMarketing(false)}
    //               value=""
    //               className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
    //             />
    //             <label className="semi pl-2">JE REFUSE</label>
    //           </div>
    //           <a className="semi max-w-96 underline text-[7px] md:pl-20">
    //             LES ACTIVITÉS DE MARKETING
    //           </a>
    //         </div>
    //         <div className="flex md:flex-row pt-3 flex-col md:items-center">
    //           <div className="flex items-center">
    //             <input
    //               onClick={() => updateProfilage(true)}
    //               value=""
    //               type="radio"
    //               name="B"
    //               className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
    //             />
    //             <label className="semi pl-2">J&apos;ACCEPTE</label>
    //           </div>
    //           <div className="flex items-center md:pl-20">
    //             <input
    //               onClick={() => updateProfilage(false)}
    //               type="radio"
    //               name="B"
    //               value=""
    //               className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
    //             />
    //             <label className="semi pl-2">JE REFUSE</label>
    //           </div>
    //           <a className="semi max-w-96 underline text-[7px] md:pl-20">
    //             LES ACTIVITÉS DE PROFILAGE
    //           </a>
    //         </div>
    //         <div className="flex md:flex-row pt-3 flex-col md:items-center">
    //           <div className="flex items-center">
    //             <input
    //               value=""
    //               type="radio"
    //               onClick={() => updateCommunication(true)}
    //               name="C"
    //               className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
    //             />
    //             <label className="semi pl-2">J&apos;ACCEPTE</label>
    //           </div>
    //           <div className="flex items-center md:pl-20">
    //             <input
    //               type="radio"
    //               name="C"
    //               onClick={() => updateCommunication(false)}
    //               value=""
    //               className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
    //             />
    //             <label className="semi pl-2">JE REFUSE</label>
    //           </div>
    //           <a className="semi max-w-96 underline text-[7px] md:pl-20">
    //             LA COMMUNICATION DE MES DONNÉES À DES TIERS POUR LEURS ACTIVITÉS
    //             DE MARKETING
    //           </a>
    //         </div>
    //       </div>
    //       <button
    //         onClick={() => updateDone(true)}
    //         className="semi h-12 text-white px-7 bg-[#ba0816] mt-14 flex items-center justify-center"
    //       >
    //         ÉTAPE SUIVANTE
    //         <RiArrowRightSLine size={23} />
    //       </button>
    //     </div>
    //   </div>
    // </motion.div>
    <motion.div
      initial={{
        position: "absolute",
        top: "100%",
        left: "0px",
        opacity: 0,
      }}
      animate={{
        top: car !== "" ? "10%" : "100%",
        opacity: car !== "" ? 1 : 0,
      }}
      className="grid bg-[#F4F4F4] w-full grid-cols-3 px-10 md:px-20 py-28 md:py-20"
    >
      <div className="col-span-3 md:col-span-1 mb-5 md:mb-0">
        <h2>Votre sélection:</h2>
        <h2 className="semi text-lg">
          {" "}
          {cars.filter((cr) => cr.label === car)[0]?.label}
        </h2>
        <img
          src={cars.filter((cr) => cr.label === car)[0]?.image}
          className="w-80"
        />
        <button
          onClick={() => updateCar("")}
          className="semi h-12 px-7 border border-black text-black mt-14 flex items-center justify-center"
        >
          CHANGER DE MODÈLE
        </button>
      </div>
      <div className="col-span-3 md:col-span-2">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-10">
            <div className="flex flex-col">
              <select
                name="Civilite"
                id="Civilite"
                onChange={(e) => updateCivilité(e.target.value)}
                className="semi bg-[#F4F4F4] border border-black h-12"
              >
                <option className="semi pl-2" value="" hidden>
                  Civilité*
                </option>
                <option className="semi" value="Mr.">
                  M.
                </option>
                <option className="semi" value="MME.">
                  MME.
                </option>
                <option className="semi" value="MLLE.">
                  MLLE.
                </option>
              </select>
            </div>
            <div></div>

            <input
              type="text"
              hidden
              id="Model"
              name="Model"
              value={car}
              defaultValue={car}
            />
            <input
              type="text"
              hidden
              id="Mode"
              name="Mode"
              value="Essai"
              defaultValue="Essai"
            />

            <input
              name="Prenom"
              id="Prenom"
              onChange={(e) => updatePrénom(e.target.value)}
              type="text"
              placeholder="PRÉNOM*"
              className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
            />
            <input
              name="Nom"
              id="Nom"
              onChange={(e) => updateNom(e.target.value)}
              type="text"
              placeholder="NOM*"
              className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
            />
            <input
              name="Email"
              id="Email"
              onChange={(e) => updateEmail(e.target.value)}
              type="email"
              placeholder="E-MAIL*"
              className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
            />
            <input
              name="Telephone"
              id="Telephone"
              onChange={(e) => updateTel(e.target.value)}
              type="tel"
              placeholder="TELEPHONE*"
              className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
            />
            <div className="relative w-full border">
              <input
                name="Codepostal"
                id="Codepostal"
                onClick={() => setClicked(true)}
                onChange={(e) => {
                  setQuery(e.target.value);
                  updateAddress(e.target.value);
                }}
                type="text"
                value={query}
                placeholder="CODE POSTAL*"
                className="semi bg-[#F4F4F4] w-full border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
              />
              {clicked && query !== "" && (
                <div
                  className={cn(
                    "z-50 absolute divide-y w-full bg-white",
                    filteredPeople.length > 0 && clicked
                      ? "border-2 border-black"
                      : ""
                  )}
                >
                  {filteredPeople.map((file) => {
                    return (
                      <p
                        onClick={() => {
                          setQuery(file.address);
                          setClicked(false);
                          updateAddress(file.address);
                          setSec(file.sec);
                          setMap(file.map);
                          updateLabel(file.label);
                        }}
                        key={file.label}
                        className="semi text-xs text-start cursor-pointer pl-2 py-4 line-clamp-1 bg-[#F4F4F4]"
                      >
                        {file.address}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
            <select
              name="Moyenne"
              id="Moyenne"
              onChange={(e) => updateCallType(e.target.value)}
              className="semi bg-[#F4F4F4] border border-black h-12 "
            >
              <option hidden className="pl-2" value="">
                MOYENNE DE CONTACT SOUHAITÉ
              </option>
              <option className="semi" value="Telephone">
                TÉLÉPHONE
              </option>
              <option className="semi" value="Appel video">
                APPÉL VIDEO
              </option>
            </select>
          </div>
          <div className="pt-10">
            <label className="semi text-sm">
              POSSÉDEZ-VOUS UN NUMÉRO DE SIREN?
            </label>
            <div className="flex pt-3">
              <div className="flex items-center">
                <input
                  onClick={() => updateSiren(true)}
                  value="oui"
                  type="radio"
                  name="Siren"
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">OUI</label>
              </div>
              <div className="flex items-center pl-20">
                <input
                  onClick={() => updateSiren(false)}
                  type="radio"
                  name="Siren"
                  value="non"
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">NON</label>
              </div>
            </div>
            <p className="italic text-sm pt-10">
              * Tous les champs sont obligatoires
            </p>
          </div>
          <div className="pt-10">
            <div className="pb-5">
              <label className="semi ">CONSENTEMENT</label>
              <p>
                Après avoir lu la
                <a href="" className="underline pl-1 cursor-pointer ">
                  Note d&apos;information*
                </a>
              </p>
            </div>

            <div className="grid md:grid-cols-3 pt-3 items-center mb-3">
              <div className="flex items-center">
                <input
                  onClick={() => updateMarketing(true)}
                  value=""
                  type="radio"
                  name="x"
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">J&apos;ACCEPTE</label>
              </div>
              <div className="flex items-center ">
                <input
                  onClick={() => updateMarketing(false)}
                  type="radio"
                  name="x"
                  value=""
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">JE REFUSE</label>
              </div>
              <a className="semi max-w-96 underline text-[7px] ">
                LA COMMUNICATION DE MES DONNÉES À DES TIERS POUR LEURS ACTIVITÉS
                DE MARKETING
              </a>
            </div>
            <div className="pt-3 items-center grid md:grid-cols-3 mb-3">
              <div className="flex items-center">
                <input
                  onClick={() => updateProfilage(true)}
                  value=""
                  type="radio"
                  name="B"
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">J&apos;ACCEPTE</label>
              </div>
              <div className="flex items-center ">
                <input
                  onClick={() => updateProfilage(false)}
                  type="radio"
                  name="B"
                  value=""
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">JE REFUSE</label>
              </div>
              <a className="semi max-w-96 underline text-[7px] ">
                LES ACTIVITÉS DE PROFILAGE
              </a>
            </div>
            <div className="grid md:grid-cols-3 pt-3 items-center mb-3">
              <div className="flex items-center">
                <input
                  onClick={() => updateCommunication(true)}
                  value=""
                  type="radio"
                  name="C"
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">J&apos;ACCEPTE</label>
              </div>
              <div className="flex items-center">
                <input
                  onClick={() => updateCommunication(false)}
                  type="radio"
                  name="C"
                  value=""
                  className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                />
                <label className="semi pl-2">JE REFUSE</label>
              </div>
              <a className="semi max-w-96 underline text-[7px] ">
                LA COMMUNICATION DE MES DONNÉES À DES TIERS POUR LEURS ACTIVITÉS
                DE MARKETING
              </a>
            </div>
          </div>
          <button
            type="submit"
            // onClick={() => }
            className="semi h-12 text-white px-7 bg-[#ba0816] mt-14 flex items-center justify-center"
          >
            ÉTAPE SUIVANTE
            <RiArrowRightSLine size={23} />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Form;

const cars = [
  { image: "/Giulia.png", label: "Giulia" },
  { image: "/Stelvio.png", label: "Stelvio" },
  { image: "/Tonale.png", label: "Tonale" },
  { image: "/Stelvio-Q.png", label: "Stelvio Quadrifoglio" },
  { image: "/Giulia-Q.png", label: "Giulia Quadrifoglio" },
];

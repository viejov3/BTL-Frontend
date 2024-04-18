import React from "react";
import Team from "../image/firm.jpg";

const Firm = () => {
  return (
<div>
  <div>
    <div className="relative w-full h-[500px] sm:h-500px">
      <img
        src={Team}
        alt="your browser does not support "
        className="rounded-xl mt-2 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 p-4 md:p-8 text-white font-bold text-lg md:text-2xl mt-12 md:mt-2 ">
        <h1 className="text-3xl md:mt-20 sm:text-6xl lg:text-4xl  text-center">
          OUR{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            FIRM
          </span>
        </h1>
      </div>
    </div>
  </div>
  <div className="text-center text-8xl ">
    <span className="bg-neutral-900 text-orange-500 text-xl rounded-full h-6 px-2 py-1 uppercase">
      ABOUT US
    </span>
    <p className="mt-8 text-lg text-neutral-400 m-8 md:m-12 ">
      We pride ourselves for our excellent work for some of the largest
      clients in the CCC. BTL, established in 2021, is an award-winning
      Architect and Lead Consultant in Chennai.
    </p>
    <ul className="mt-8 text-lg text-neutral-300 m-8 md:m-20 gap-10 ">
      <li className="list-disc pl-4 py-2">
        "BTL Beyond The Line" is an esteemed architectural firm nestled in the
        vibrant city of Chennai, renowned for its innovative designs and
        transformative architectural solutions. With a vision to redefine urban
        landscapes and create spaces that inspire, BTL stands at the forefront
        of architectural excellence.
      </li>
      <li className="list-disc pl-4 py-2">
        Driven by a passion for creativity and a commitment to quality, BTL
        offers a comprehensive range of architectural services tailored to meet
        the diverse needs of clients across residential, commercial, and
        institutional sectors. From concept development to project completion,
        the firm emphasizes a collaborative approach, ensuring that each design
        reflects the unique vision and aspirations of the client.
      </li>
      <li className="list-disc pl-4 py-2">
        At BTL, every project is a testament to meticulous attention to detail
        and a dedication to pushing the boundaries of conventional design. With
        a team of highly skilled architects, engineers, and designers, the firm
        combines technical expertise with artistic flair to deliver
        architectural marvels that stand the test of time.
      </li>
      <li className="list-disc pl-4 py-2">
        With a rich portfolio of successful projects spanning across Chennai
        and beyond, BTL has earned a reputation for excellence, earning the
        trust and admiration of clients and peers alike. Whether it's crafting
        elegant residential spaces, innovative commercial complexes, or
        sustainable institutional buildings, BTL remains committed to creating
        environments that foster harmony, functionality, and aesthetic appeal.
      </li>
      <li className="list-disc pl-4 py-2">
        Beyond just architectural design, BTL is deeply committed to
        sustainability and environmental stewardship. Embracing eco-friendly
        practices and innovative construction techniques, the firm strives to
        minimize its ecological footprint while maximizing the efficiency and
        longevity of its designs.
      </li>
      <li className="list-disc pl-4 py-2">
        As a cornerstone of Chennai's architectural landscape, BTL continues to
        push boundaries, inspire imagination, and shape the future of urban
        living. With a relentless pursuit of excellence and a dedication to
        client satisfaction, the firm remains poised to leave a lasting legacy
        of innovation and beauty in every project it undertakes.
      </li>
    </ul>
  </div>
</div>

  );
};

export default Firm;

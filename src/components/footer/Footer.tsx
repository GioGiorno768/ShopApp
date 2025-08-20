import BrandFooter1 from "../Svg/BrandFooter1";
import BrandFooter2 from "../Svg/BrandFooter2";
import BrandFooter3 from "../Svg/BrandFooter3";
import BrandFooter4 from "../Svg/BrandFooter4";
import BrandFooter5 from "../Svg/BrandFooter5";

export default function Footer() {
  return (
    <div className="pt-10">
      {/* Hero */}
      <div className="overflow-hidden bg-neutral-900">
        <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
          <h1 className="font-semibold text-white text-5xl md:text-6xl">
            <span className="text-[#ff0] ">Preline Agency:</span> Transforming
            ideas into reality
          </h1>
          <div className="mt-5 max-w-4xl">
            <p className="text-neutral-400 text-lg">
              It is a creative hub where imagination meets craftsmanship to
              transform ideas into tangible realities. At Preline Agency, we
              specialize in turning conceptual visions into concrete forms,
              whether it be through design, artistry, or technological
              innovation.
            </p>
          </div>
        </div>
      </div>
      {/* End Hero */}

      {/* Clients */}
      <div className="relative overflow-hidden pt-4 bg-neutral-900">
        <div className="relative z-10">
          <div className="max-w-5xl px-4 xl:px-0 mx-auto">
            <div className="mb-4">
              <h2 className="text-neutral-400">
                Trusted by Open Source, enterprise, and more than 99,000 of you
              </h2>
            </div>

            <div className="flex justify-between gap-6">
              <BrandFooter1 />
              <BrandFooter2 />
              <BrandFooter3 />
              <BrandFooter4 />
              <BrandFooter5 />
            </div>
          </div>
        </div>
      </div>
      {/* End Clients */}
    </div>
  );
}

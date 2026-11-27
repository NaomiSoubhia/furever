import { BiSupport } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { MdOutlinePets } from "react-icons/md";
import SectionHeader from "../ui/SectionHeader";

const benefits = [

  {
    icon: MdOutlinePets,
    title: "Health Checked & Vaccinated",
    description:
      "All pets receive health assessments and age-appropriate vaccinations before adoption.",
  },
  {
    icon: BiSupport,
    title: "Support Throughout the Process",
    description:
      "Our team is here to help you find the right match and answer any questions after adoption.",
  },
  {
    icon: FaHeart,
    title: "Save a Life",
    description:
      "Every adoption creates space for us to rescue and care for more animals.",
  },
];


export default function AdoptWithUs() {
  return (
    <section className="py-12 ">
    <SectionHeader title="Why Adopt With Us" subtitle="Discover the benefits of adopting through our caring and dedicated rescue community"></SectionHeader>
      <div className="container mx-auto px-4">
        <div className="grid grid-3 sm:grid-cols-2 lg:grid-cols-3 ">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div key={benefit.title} className="rounded-2xl  p-8 text-center transition-all duration-300 hover:-translate-y-1" >
                <div className="mx-auto flex mb-4 h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Icon className=" text-primary" size={30}/>
                </div>
                
                <h3 className="my-2 text-xl font-semibold">
                  {benefit.title}
                </h3>

                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

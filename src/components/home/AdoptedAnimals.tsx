import { DummyAnimals } from "@/constants/DummyAnimals";
import SectionHeader from "../ui/SectionHeader";
import AnimalCard from "../animals/AnimalCard";

export default function AdoptedAnimals() {
  return (
     <section className="px-4">
                    <SectionHeader title="Adopted Animals" subtitle="Meet Our Recently Adopted Pets" />
    
                <div className="my-10">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4
                xl:grid-cols-5">
                        {DummyAnimals
                            .filter((animal) => animal.status === "Adopted")
                            .map((animal) => (
                                <AnimalCard animal={animal} key={animal.id} />
                            ))}
                    </div>
                </div>
            </section>
  )
}

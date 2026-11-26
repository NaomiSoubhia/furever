import { dummyAnimals } from "@/constants/dummyAnimals";
import SectionHeader from "./ui/SectionHeader";

export default function LatestAdoptions() {
  return (
    <section className="px-4">
        <SectionHeader title="Latest Available Pets" subtitle="Meet loving pets waiting for their forever homes!" />
    
        <div className="my-10">   
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4
            xl:grid-cols-5">
                {dummyAnimals.map((animal) => (
                    <div key={animal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={animal.image} alt={animal.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">{animal.name}</h3>
                            <p className="text-gray-600">{animal.species} • {animal.breed}</p>
                            <p className="text-gray-500">Age: {animal.age}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

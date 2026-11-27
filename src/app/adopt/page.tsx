import FilterOptions from "@/components/adopt/FilterOptions";
import FrontendLayout from "@/components/navbar/layouts/FrontendLayout";


export default function page() {
  return (
    <FrontendLayout>
        <div className="flex flex-col sm:flex-row gap-5 my-10">
            <FilterOptions/>
        </div>
    </FrontendLayout>

  )
}

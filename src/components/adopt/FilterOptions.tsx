"use client"

import { useState } from "react";
import { RiArrowRightDoubleFill } from "react-icons/ri";


export default function FilterOptions() {
    // This line uses React's useState hook to create a piece of state and a function to update it
    const [showFilter, setShowFilter] = useState(false);
    return (
        <aside className="w-full sm:min-w-60 sm:max-w-60">
            <button onClick={() => setShowFilter((prev) => !prev)} className="mb-4 flex items-center gap-2 text-xl
        font-semibold sm:cursor-default">
                FILTERS
                <RiArrowRightDoubleFill className={`transition-transform duration-300 
                sm:hidden ${showFilter ? "rotate-90" : ""}`} />
            </button>

            {/* Filters */}
            <div className={`space-y-6 sm:block ${showFilter ? "block" : "hidden"}`}>
                {/* Categories */}
                <div className="rounded-xl border border-border p-5">
                    <h3 className="mb-4 text-sm font-semibold tracking-wide">
                        SPECIES
                    </h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                        <label className="flex items-center gap-3">
                            <input type="checkbox" />
                            <span>Dog</span>
                        </label>
                        <label className="flex items-center gap-3">
                            <input type="checkbox" />
                            <span>Cat</span>
                        </label>
                        <label className="flex items-center gap-3">
                            <input type="checkbox" />
                            <span>Bird</span>
                        </label>
                    </div>
                    </div>
                    
                    {/* Status */}

                     <div className="rounded-xl border border-border p-5">
                    <h3 className="mb-4 text-sm font-semibold tracking-wide">
                        STATUS
                    </h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                        <label className="flex items-center gap-3">
                            <input type="checkbox" />
                            <span>Available</span>
                        </label>
                        <label className="flex items-center gap-3">
                            <input type="checkbox" />
                            <span>Pending</span>
                        </label>
                        <label className="flex items-center gap-3">
                            <input type="checkbox" />
                            <span>Adopted</span>
                        </label>
                    </div>
                    
                </div>

            </div>


        </aside>
    )
}

import React, { useState } from 'react'
import { categories, stores } from '../data';

function Listing({ onStoreClick }) {
    const [selectedCategory, setSelectedCategory] = useState("Potato");

    // stores that carry the chosen category
    const filteredStores = stores.filter((s) =>
        s.items.some((i) => i.name === selectedCategory)
    );

    return (
        <div className="max-w-5xl mx-auto py-8 px-4">
            {/* Search bar */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search for Rate, Potato, cheese..."
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
            </div>

            <section className="mb-6">
                <h2 className="font-semibold text-slate-700 mb-3">Categories</h2>
                <div className="flex gap-3 overflow-x-auto pb-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition
                ${selectedCategory === cat
                                    ? "bg-emerald-600 text-white"
                                    : "bg-white border text-slate-700 hover:bg-emerald-50"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Store Cards */}
            <section>
                <h2 className="font-semibold text-slate-700 mb-3">
                    Stores with {selectedCategory}
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                    {filteredStores.map((store) => {
                        // pick the product inside this store that matches category
                        const product = store.items.find((i) => i.name === selectedCategory);

                        return (
                            <div
                                key={store.id}
                                onClick={() => onStoreClick({ store, product })}
                                className="bg-white rounded-xl shadow p-4 cursor-pointer hover:shadow-lg transition"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-14 h-14 bg-slate-200 rounded-md shrink-0" />
                                    <div className="flex-1">
                                        <h3 className="font-bold text-slate-800">{store.name}</h3>
                                        <p className="text-sm text-slate-500">{store.address}</p>
                                        <p className="text-xs text-slate-400">{store.distance}</p>
                                        {store.verified && (
                                            <span className="text-xs text-green-600 font-medium">
                                                ✓ Verified
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-3 flex justify-between items-end">
                                    <div>
                                        <span className="text-lg font-bold text-emerald-600">
                                            ₹{product.price}
                                        </span>
                                        <span className="text-xs text-slate-400 ml-1">
                                            /{product.unit}
                                        </span>
                                    </div>
                                    <button className="px-3 py-1.5 bg-emerald-600 text-white text-xs rounded-md">
                                        View
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    )
}

export default Listing
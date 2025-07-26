import React from 'react'

function Details({store, product, onBack }) {
  return (
   <div className="max-w-3xl mx-auto py-6 px-4">
    {/* Back */}
    <button
      onClick={onBack}
      className="mb-4 text-emerald-600 font-semibold flex items-center gap-2"
    >
      ← Back to stores
    </button>

    {/* Store Header */}
    <div className="bg-white rounded-lg shadow p-4 mb-4 flex items-start gap-4">
      <div className="w-20 h-20 bg-slate-200 rounded-md" />
      <div>
        <h2 className="font-bold text-lg">{store.name}</h2>
        {store.verified && (
          <p className="text-sm text-green-600">✓ Verified</p>
        )}
        <p className="text-sm text-slate-500">{store.address}</p>
        <p className="text-sm text-slate-500">{store.distance}</p>
      </div>
    </div>

    {/* Product Card */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-xl font-bold text-slate-800">{product.name}</h3>
      <p className="text-sm text-slate-500 mb-2">
        Minimum order {product.minQty} kg · Bulk {product.bulkQty} kg
      </p>
      <p className="text-3xl font-bold text-emerald-600">₹{product.price}</p>
      <p className="text-sm text-slate-500">/{product.unit}</p>

      <p className="mt-2 text-sm">{product.description}</p>
      <p className="text-sm mt-2 text-slate-600">{product.delivery}</p>

      <button className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-md">
        Add to Cart
      </button>
    </div>
  </div>
  )
}

export default Details
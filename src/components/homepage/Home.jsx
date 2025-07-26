import React, { useState } from 'react'
import Listing from '../Listing'
import Details from '../Details';

function Home() {
  const [view, setView] = useState("list"); // list | detail
  const [payload, setPayload] = useState(null); // {store, product}

  const openDetail = ({ store, product }) => {
    setPayload({ store, product });
    setView("detail");
  };

  const goBack = () => {
    setView("list");
    setPayload(null);
  };
  return (
    <div>
      {view === "list" ? (
        <Listing onStoreClick={openDetail} />
      ) : (
        <Details
          store={payload.store}
          product={payload.product}
          onBack={goBack}
        />
      )}
    </div>
  )
}

export default Home
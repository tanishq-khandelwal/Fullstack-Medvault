import React, { useEffect } from "react";
import Layout from "../../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getDocuments } from "../../Redux/patientListSlice";

const PatientDocuments = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const patient = location.state;
  const id = patient._id;

  useEffect(() => {
    (async () => {
      await dispatch(getDocuments(id));
    })();
  }, [dispatch, id]);

  const { documents } = useSelector((state) => state.patient.documents);

  return (
    <Layout>
      <div className="flex items-center justify-center">
        <h1 className="font-sans font-semibold text-4xl text-[#A09E93] mt-6">
          Patient Documents
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10">
        
        {documents?.map((document) => (
          <div key={document._id} className="card w-96 h-96 bg-base-100 shadow-xl border border-[#6666] ml-16">
            <figure className="px-5 pt-10">
              <img
                src={document.thumbnail.secure_url} // Use the actual document image URL
                alt={document.title} // Use the actual document title
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{document.title}</h2>{" "}
              {/* Use the actual document title */}
              <p>{document.description}</p>{" "}
              {/* Use the actual document description */}
              <div className="card-actions">
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    window.open(document.thumbnail.secure_url, "_blank")
                  }
                >
                  View Document
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default PatientDocuments;

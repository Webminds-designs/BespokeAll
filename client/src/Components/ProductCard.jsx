// ProductCard.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import SkeletonLoader from "./SkeletonLoader";

export default function ProductCard({ products }) {
  const user = useSelector((state) => state.Auth.user);
  const userId = user ? user._id : null;

  return (
    <>
      {products.map((product) => (
        <motion.div
          key={product._id} // ← use unique id as key
          className="relative rounded-lg overflow-hidden bg-secondary-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            gridColumn: `span ${product.colSpan}`,
            gridRow: `span ${product.rowSpan}`,
          }}
        >
          <ProductImage
            imageUrl={product.image}
            productName={product.name}
            id={product._id}
          />

          <div className="absolute bottom-0 left-0 right-0 h-fit bg-secondary-100-low px-4 py-2 flex justify-between items-center">
            <p className="text-white w-4/5 font-semibold text-lg lg:text-xl tracking-widest">
              {product.name}
            </p>

            <div className="bg-white p-2 w-16 h-16 rounded-tl-2xl absolute right-0 bottom-0 shadow-lg cursor-pointer flex justify-center items-center">
              <div className="bg-secondary-100 w-10 h-10 absolute rounded-md flex items-center justify-center">
                <FaPlusCircle className="text-white text-xl m-auto" />
              </div>
              <div className="absolute -top-6 right-0">
                <div id="curved-corner-bottomright"></div>
              </div>
              <div className="absolute bottom-0 -left-6">
                <div id="curved-corner-bottomright"></div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}

// Separate component for the image + skeleton
const ProductImage = ({ imageUrl, productName, id }) => {
  const [loading, setLoading] = useState(true);

  // Reset loader whenever the URL changes
  useEffect(() => {
    setLoading(true);
  }, [imageUrl]);

  return (
    <div className="w-full h-full relative">
      {loading && <SkeletonLoader />}
      <Link to={`/product-description/${id}`}>
        <img
          src={imageUrl}
          alt={productName}
          className={`w-full h-full object-cover cursor-pointer transition duration-300 ease-in-out hover:opacity-50 ${
            loading ? "hidden" : "block"
          }`}
          onLoad={() => setLoading(false)}
        />
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      colSpan: PropTypes.number.isRequired,
      rowSpan: PropTypes.number.isRequired,
    })
  ).isRequired,
};

ProductImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

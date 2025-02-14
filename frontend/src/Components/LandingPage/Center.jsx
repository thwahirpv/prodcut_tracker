import React from "react";
import product_track from "../../assets/Images/tracking_product.png";
import { motion } from "framer-motion";

const Center = () => {
  return (
    <div className="w-full h-fit md:h-[550px] flex justify-center items-center">
      <div className="w-[70% h-[60%] md:flex">
        <div className="w-full md:w-[50%] h-[90%] flex justify-center items-center px-2 md:px-0 py-[170px] md:p-0">
          <div className="w-[100%] md:w-[60%] text-wrap px-2 md:px-0 md:block flex flex-col items-center">
            <h1 className="text-2xl font-[750] text-secondary">Track your Product</h1>
            <p className="text-sm md:text-[16px] mt-3 leading-relaxed max-w-5xl text-center md:text-start mx-auto text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              inventore fugiat mollitia eaque provident, ab quaerat facere velit
              sint consectetur ut distinctio, ea id eligendi? Dolorem debitis
              ipsa nihil distinctio.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[50%] h-[90%] flex justify-center items-center py-[30px] md:p-0">
          <div>
            <motion.img
              src={product_track}
              alt="Tracking"
              className="w-[300px] md:w-[350px]"
              animate={{
                y: [0, -10, 0], 
              }}
              transition={{
                duration: 2, 
                repeat: Infinity, 
                repeatType: "reverse", 
                ease: "easeInOut", 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;

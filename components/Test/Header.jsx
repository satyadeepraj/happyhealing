import React from "react";

const Header = () => (
  <div>
   <div className="relative h-[400px] mx-auto w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://res.cloudinary.com/dzkpb9csm/image/upload/v1719749277/HappyHealingDiagnostic/istockphoto-1437830105-612x612_gh0hli.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
        <h1 className="text-white text-5xl font-bold w-[50%] text-center">For Us, CARE means bringing precision and automation in our lab operations</h1>
      </div>
    </div>
  </div>
);

export default Header;

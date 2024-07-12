import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="text-center my-8">
      <h2 className="text-4xl mobile:text-3xl font-bold mb-4 py-4">Why Choose Us?</h2>
      <div className="grid grid-cols-1 w-[80%] mx-auto  md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center">
        <div className="space-y-4 font-semibold font-serif">
          <div className="flex items-center">
            <span className="text-2xl mr-2 ">📊</span>
            <p>Fast & Accurate Results</p>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">✔️</span>
            <p>Trusted & Ethical</p>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">💰</span>
            <p>Affordable</p>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">🌐</span>
            <p>World Class Technology</p>
          </div>
        </div>
        <div className="mb-4 mobile:mt-4">
          <Image
            src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1719750887/HappyHealingDiagnostic/gettyimages-1178873673-612x612_jpyk2y.jpg"
            alt="Holding hands"
            width={600}
            height={500}
            className="rounded"
          />
        </div>
        <div className="space-y-4 font-semibold font-serif">
          <div className="flex items-center">
            <span className="text-2xl mr-2">👨‍⚕️</span>
            <p>Skillful & Talented Team</p>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">🏢</span>
            <p>One Stop Hub</p>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">🌟</span>
            <p className="mobile:mr-12">More Than 1 Million Patients Satisfied</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

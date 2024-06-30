import Footer from "./Footer";
import Image from "next/image";
export function Aboutfirst() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[400px] ">
        <div className="mb-4">
          <img
            className="w-[14%] mx-auto"
            alt="Cremica Food Industries Limited"
            width={100}
            height={100}
            src="https://www.cremica.com/wp-content/uploads/2023/05/CREMICA-LOGO-1.png"
          />
        </div>
        <h2 className="text-[#444444] font-serif text-2xl font-bold">
          Cremica Food Industries Limited
        </h2>
        <div className="border border-r-[50px] border-gray-400 mt-8"></div>
        <div className="flex flex-row items-center justify-center gap-10 ml-14 mt-5">
          <div className="w-[267px] h-[150px] ">
            <iframe
              width="267"
              height="150"
              src="https://www.youtube.com/embed/cHhKmTkYgOU?start=22"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            
            ></iframe>
          </div>
          <div className="p-4 w-[1000px] font-sans flex-wrap">
            <p className="text-[#444444] text-justify px-4 leading-relaxed ">
              Cremica, a name that has always spelt quality, practical and great
              tasting food, is fast becoming a household name in India. Its vast
              array of products has been carefully selected to provide the best
              food processing industry has to offer. Today, Cremica is known for
              its unique recipes, health oriented ingredients and state-of-the
              art standards. Cremica manufactures high quality condiments,
              Indian Gravies/Curries, Tomato Ketchup, Sauces, Sandwich Spreads,
              Mayonnaise, Sandwich Mayonnaise, Syrups, Toppings, Salad
              Dressings, Indian Snack dips, and Opera Crisps made with Olive Oil
              for retail and food service customers.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start w-[88%] mx-auto text-[#444444] font-sans mb-16">
        <h1 className="py-8 font-semibold text-3xl">History</h1>
        <div className="flex gap-6 mb-4">
          <div className="w-[88%] text-justify leading-relaxed">
            <p className="mb-4">
              The Cremica Group was established in 1978 by Mrs Rajni Bector
              turning her passion for ice cream making into a small backyard
              enterprise. That was just the beginning and in the course of the
              past three decades, The Cremica Group has established itself as a
              huge food products conglomerate, leading the food processing
              business through its range of products, innovative flavours and
              fillings, it’s internationally certified production facilities,
              the consistency of its quality, and its unmatched expertise in the
              industry.
            </p>
            <p className=" mb-4">
              Cremica Foods has established itself as a huge food products
              conglomerate, leading the food processing business through its
              range of products, innovative flavours, it’s internationally
              certified production facilities, the consistency of its quality,
              and its unmatched expertise in the industry. Cremica Food has
              always stood for unparalleled quality, great taste and world class
              innovative products, customized for local taste buds.
            </p>
            <p className="">
              Cremica has been a brand leader in the industry with focus on
              Quality and Innovation, these key factors led to the JV with two
              companies, One with Quaker oats company (USA) for manufacturing of
              ketchup, mayonnaise along with liquid condiments and the other
              with EBI foods (UK) for manufacturing of battering and breading
              pre-mixtures. The company then joined hands with Mc Donald’s to
              become one of their biggest suppliers in India. This brought in
              new competencies within the Group and strengthened the brand
              ‘Cremica’.
            </p>
          </div>
          <div>
            <img
              className="w-[400px] h-[327px]"
              src="https://www.cremica.com/wp-content/uploads/2023/05/rajni-bector.jpg"
            />
          </div>
        </div>
        <p className="text-justify leading-relaxed">
          Cremica Food Industries ltd. launched India’s first Vegetarian
          Mayonnaise, as well as Opera crisps which are India’s first cottage
          style potato crisps. Even the recently launched Sandwich Mayonnaise
          with Indian flavours like tandoori, mint, tangy pickle and korma are
          very popular among the customers. Today, Cremica Food is known for
          product innovations as well as offering customized and localized food
          products, they have an extensive product range including Tomato
          Ketchup, Sauces, Mayonnaise, Sandwich Spreads, Salad Dressings, Syrups
          and Dessert Toppings. Cremica Food has striven to maintain the passion
          and today the group operates India’s largest tomato ketchup line and
          is the country’s largest producer of ketchup portion packs capable of
          packing 4 million sachets per day! These high-quality products have
          made a mark and are even exported to Europe Africa, Middle East, US
          and Australia.
        </p>
        <div className="flex flex-col justify-center items-start  mx-auto text-[#444444] font-sans">
          <h1 className=" py-8 font-semibold text-3xl">
            Akshay Bector Chairman & Managing Director Cremica Food Industries
            Ltd.
          </h1>
          <div className="flex gap-6 mb-4">
            <div className="w-[75%] text-justify leading-relaxed">
              <p className="">
                Mr Bector holds a Bachelor in Engineering from MIT Manipal.
                Akshay started his career by setting up an automatic bread plant
                in 1989. He quickly expanded into biscuits, signed JV for sauces
                & dry blends with Quaker oats USA & EBI Foods U.K, including
                signing up with McDonalds for supply of these products & buns to
                become leading supplier to McDonalds by 1991. Akshay’s efforts
                have been crucial to keep the business together by championing
                various family businesses & have therefore successfully
                concluded the family separation, creating value for all. He has
                been Chairman CII Punjab Chapter & founding chairman of YPO –
                Punjab chapter. He has been vastly responsible for changing the
                face of Indian food industry. He has been personally involved in
                various facets of food processing and has deep experience and
                knowledge in this field.
              </p>
            </div>
            <div>
              <img
                className="w-[294px] h-[231px]"
                src="https://www.cremica.com/wp-content/uploads/2023/05/akshay-200x158-1.jpg"
              />
            </div>
          </div>
        </div>
      </div>
     
      <Footer />
    </>
  );
}



const Contact = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md pb-24 pt-20 font-poppins">
      <div className="md:flex md:items-center md:justify-center">
        <div className="md:mb-2 md:w-1/3 ">
          <h2 className="text-2xl font-bold mb-6">Contact me</h2>
          <p className="font-bold mb-2">Ph: +37060574525 </p>
          <p className="font-bold">Email: tomaskls@hotmail.com </p>
        </div>
        <div className="md:w-1/3">
          <div className="flex justify-center space-x-4 mt-16 md:gap-6">
            <a href="https://www.linkedin.com/in/tomas-kls" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              LinkedIn
            </a>
            <a href="https://wa.me/+37060574525" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
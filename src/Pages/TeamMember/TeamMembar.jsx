import SectionTitle from "../../components/SectionTitle/SectionTitle";

const TeamMembar = () => {
  return (
    <>
      <SectionTitle
        subHeading={"Team members"}
        heading={"Our Master CHEF's"}
      ></SectionTitle>

      <div className="flex flex-wrap justify-center items-center gap-16 p-4">
        {/* First Team Member */}
        <div className="relative flex flex-col items-center justify-center bg-gray-100 w-60 h-96 shadow-md rounded-lg group overflow-hidden">
          <div className="w-full h-4/5 mb-4 rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/YLx613w/team-1.jpg"
              alt="Team Member 1"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold">Gordon Ramsay</h2>
            <p className="text-blue-500 font-mono text-lg font-semibold">
              Executive Chef
            </p>
          </div>
        </div>

        {/* Second Team Member */}
        <div className="relative flex flex-col items-center justify-center bg-gray-100 w-60 h-96 shadow-md rounded-lg group overflow-hidden">
          <div className="w-full h-4/5 mb-4 rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/5s9Lt9N/team-2.jpg"
              alt="Team Member 2"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold">Massimo Bottura</h2>
            <p className="text-blue-500 font-mono text-lg font-semibold">
              Sous Chef
            </p>
          </div>
        </div>

        {/* Third Team Member */}
        <div className="relative flex flex-col items-center justify-center bg-gray-100 w-60 h-96 shadow-md rounded-lg group overflow-hidden">
          <div className="w-full h-4/5 mb-4 rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/5hD3YTC/team-3.jpg"
              alt="Team Member 3"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold">Alice Waters</h2>
            <p className="text-blue-500 font-mono text-lg font-semibold">
              Pastry Chef
            </p>
          </div>
        </div>

        {/* Fourth Team Member */}
        <div className="relative flex flex-col items-center justify-center bg-gray-100 w-60 h-96 shadow-md rounded-lg group overflow-hidden">
          <div className="w-full h-4/5 mb-4 rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/5cWr91s/team-4.jpg"
              alt="Team Member 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold">Rene Redzepi</h2>
            <p className="text-blue-500 font-mono text-lg font-semibold">
              Line Chef
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMembar;

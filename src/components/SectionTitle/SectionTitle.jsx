/* eslint-disable react/prop-types */

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div>
            <h1  className="text-orange-400 text-2xl font-bold text-center"  style={{ fontFamily: 'Sofia, cursive' }}>—— {subHeading} ——</h1>
            <p className="font-bold text-4xl text-center my-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;

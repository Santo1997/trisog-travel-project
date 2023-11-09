import { Link } from "react-router-dom";

const ShareBanner = ({ header, paths }) => {
  return (
    <div className="text-center border border-black p-10 bannerBG bgFormat text-white">
      <h1 className="text-3xl font-bold">{header}</h1>
      <p className="flexs justify-center text-[10px] font-bold mt-1">
        {paths.map((breadcrumb, index) => (
          <span key={index}>
            <Link to={breadcrumb.to}>{breadcrumb.label}</Link>
            {index < paths.length - 1 && <span className="mx-1">/</span>}
          </span>
        ))}
      </p>
    </div>
  ); 
};

export default ShareBanner;

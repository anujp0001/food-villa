import { IMG_CDN_URL } from "../utils/Constant";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,


}) => {
  return (

    // <div className="w-64 m-4 p-3  rounded-lg  hover:scale-110 shadow-zinc-500  shadow-lg flex-wrap justify-start">
    //   <img className="w-full  rounded-lg align-middle" src={IMG_CDN_URL + cloudinaryImageId} />
    //   <h2 className="font-bold text-lg bg-clip-content truncate break-words ">{name}</h2>
    //   <h6 className="cuisines flex-wrap bg-clip-content truncate ">{cuisines.join(", ")}</h6>
    //   <span className="flex flex-wrap ">
    //     <div className="m-1 justify-center">{
    //       avgRating < 4.2
    //         ? <h4 className="heading pt-0 pr-5 text-base w-12 h-6 bg-red-600 text-white font-medium rounded-md">⭐{avgRating}</h4>
    //         : <h4 className="heading pt-0 pr-5 text-base w-12 h-6 bg-green-600 text-white font-medium rounded-md">⭐{avgRating}</h4>
    //     }
    //     </div>
    //     <h2 className="justify-center m-1">•</h2>
    //     <h4 className="heading text-sm justify-center text-black font-bold m-1.5"> {costForTwo ?? '₹200 for two'}</h4>
    //     {/* // <h4>{lastMileTravelString} minutes</h4> */}
    //   </span>
    // </div>
//   <div className="w-64 h-80 m-4 p-3 rounded-lg hover:scale-110 shadow-zinc-500 shadow-lg flex flex-col justify-start">
//   <div className="w-full h-40 overflow-hidden rounded-lg">
//     <img className="w-full h-full object-cover" src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
//   </div>
//   <h2 className="font-bold text-lg truncate break-words mt-2">{name}</h2>
//   <h6 className="cuisines truncate mt-1">{cuisines.join(", ")}</h6>
//   <div className="flex items-center mt-auto">
//     <div className="m-1 flex items-center">
//       <h4 className={`heading text-base w-12 h-6 ${avgRating < 4.2 ? 'bg-red-600' : 'bg-green-600'} text-white font-medium rounded-md`}>
//         ⭐{avgRating}
//       </h4>
//     </div>
//     <h2 className="m-1">•</h2>
//     <h4 className="heading text-sm text-black font-bold m-1.5">{costForTwo ?? '₹200 for two'}</h4>
//   </div>
// </div>
<div className="w-64 h-80 m-4 p-3 rounded-lg hover:scale-110 shadow-zinc-500 shadow-lg flex flex-col justify-start">
  <div className="w-full h-40 rounded-lg overflow-hidden">
    <img className="w-full h-60 object-cover" src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
  </div>
  <h2 className="font-bold text-lg truncate break-words mt-2">{name}</h2>
  <h6 className="cuisines truncate mt-1">{cuisines.join(", ")}</h6>
  <div className="flex items-center mt-auto">
    <div className="m-1 flex items-center">
      <h4 className={`heading text-base w-12 h-6 ${avgRating < 4.2 ? 'bg-red-600' : 'bg-green-600'} text-white font-medium rounded-md`}>
        ⭐{avgRating}
      </h4>
    </div>
    <h2 className="m-1">•</h2>
    <h4 className="heading text-sm text-black font-bold m-1.5">{costForTwo ?? '₹200 for two'}</h4>
  </div>
</div>
   )
}
export default RestrauntCard;


//w-60  m-6 p-20 border-r-6 inline-grid hover:scale-110 transition duration-500 align-baseline shadow
import { useNavigate } from 'react-router-dom';
import img from './images/img1.jpg';

useNavigate;

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-grab"
      onClick={() => navigate(`/artists/}${track?.artists[0].adamid}`)}
    >
      <img
        /* src={track?.images?.coverart} */
        src={img}
        className="w-full h-50 rounded-lg"
        alt="track"
      />
      <p className="mt-4 text-lg font-semibold text-white truncate">
        Artist Name {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;

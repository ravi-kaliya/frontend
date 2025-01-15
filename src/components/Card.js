

const Card = ({ image, location, type, price, email }) => {
  return (
    <div className='bg-white rounded-lg relative shadow-md overflow-hidden max-w-sm'>
      {/* Card Image */}
      <div className='relative'>
        <img
          src={image}
          // src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt={location}
          className='w-full h-56 object-cover'
          width={400}
          height={250}
        />
        <button className='absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100'>
          ❤️
        </button>
      </div>

      {/* Card Content */}
      <div className='p-4 relative'>
        <h3 className='text-sm text-gray-600'>{location}</h3>
        <h4 className='text-lg font-semibold'>{type}</h4>
        <p className='text-gray-800 font-medium'>{price} CAD / night</p>
        <p className='text-gray-600 text-sm top-4 right-2 w-auto rounded-full font-medium'>{email}</p>
        
      </div>
    </div>
  );
};

export default Card;

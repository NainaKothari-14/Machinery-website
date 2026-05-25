function MachineGallery({ image, name }) {
  return (
    <div className="image-frame w-full">
      <img
        src={image}
        alt={name}
        className="h-64 w-full object-cover sm:h-80 lg:h-[28rem]"
      />
    </div>
  );
}

export default MachineGallery;

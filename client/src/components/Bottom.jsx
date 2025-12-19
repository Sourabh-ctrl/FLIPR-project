const Bottom = () => {
  return (
    <section
      className="relative h-[50vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let’s Build Something Amazing
        </h3>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Join our community and stay updated with the latest projects,
          innovations, and updates from our team.
        </p>
      </div>
    </section>
  );
};

export default Bottom;

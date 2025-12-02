function MeshGradientPattern() {
  return (
    <div className="relative h-screen w-full bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 p-10">
        <h1 className="text-4xl font-bold">Mesh Gradient</h1>
      </div>
    </div>
  );
}

export default MeshGradientPattern;

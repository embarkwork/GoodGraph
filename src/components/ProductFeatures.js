const features = [
    {
      title: "Advanced Analytics",
      description: "Powerful AI-driven insights that uncover hidden patterns in your data.",
      icon: "📊"
    },
    {
      title: "Real-time Processing",
      description: "Instant data analysis with our high-performance machine learning models.",
      icon: "⚡"
    },
    {
      title: "Intuitive Visualization",
      description: "Transform complex data into clear, actionable visual representations.",
      icon: "📈"
    }
  ]
  
  export default function ProductFeatures() {
    return (
      <section id="features" className="container mx-auto py-16">
        <h2 className="text-center text-3xl font-bold mb-12">
          Our Powerful Features
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
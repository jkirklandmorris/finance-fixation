const testimonials = [
  {
    quote: "This platform has transformed how I manage my freelance business. The tax calculations alone have saved me hours of work.",
    author: "Sarah Johnson",
    role: "Graphic Designer",
  },
  {
    quote: "The invoice and quote system is incredibly intuitive. My clients are impressed with the professional look of every document.",
    author: "Michael Chen",
    role: "Web Developer",
  },
  {
    quote: "As a sole trader, keeping track of expenses was always a hassle. Now it's automated and I can focus on growing my business.",
    author: "Emma Thompson",
    role: "Marketing Consultant",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <blockquote className="mb-4">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-600">
                    {testimonial.author[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
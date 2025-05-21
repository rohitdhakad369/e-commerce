import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sdgGoals = [
  {
    id: 1,
    title: "No Poverty",
    content: `We enable income generation via micro-commerce and local seller tools.`,
    category: "Equality",
    extended: `Our platform supports low-income communities through affiliate opportunities, free seller kits, and remote onboarding.`,
    color: "bg-red-600",
    details: [
      { title: "Key Feature", description: "Affiliate opportunities and free seller kits for low-income communities." },
      { title: "Action Step", description: "Join our program to create income streams for underserved populations." },
    ],
  },
  {
    id: 4,
    title: "Quality Education",
    content: `We train sellers on pricing, digital skills, and sustainability.`,
    category: "Education",
    extended: `Our e-learning modules cover e-commerce, packaging, customer care, and using tech for better outreach.`,
    color: "bg-blue-500",
    details: [
      { title: "Key Feature", description: "Comprehensive e-learning modules on e-commerce and sustainability." },
      { title: "Action Step", description: "Sign up for a free training session to upskill in digital commerce." },
    ],
  },
  {
    id: 5,
    title: "Gender Equality",
    content: `Special programs for women-led businesses.`,
    category: "Equality",
    extended: `Zero commission for women entrepreneurs, mentorship programs, and community support systems are in place.`,
    color: "bg-pink-500",
    details: [
      { title: "Key Feature", description: "Zero commission and mentorship for women entrepreneurs." },
      { title: "Action Step", description: "Start your business today with our women’s entrepreneurship support program." },
    ],
  },
  {
    id: 13,
    title: "Climate Action",
    content: `EV delivery and eco-packaging lead our green efforts.`,
    category: "Environment",
    extended: `We collaborate with carbon-neutral vendors, use biodegradable packaging, and plant trees for every 1000 orders.`,
    color: "bg-lime-600",
    details: [
      { title: "Key Feature", description: "EV delivery, biodegradable packaging, and tree planting initiatives." },
      { title: "Action Step", description: "Support eco-friendly initiatives by buying green products today." },
    ],
  },
  {
    id: 9,
    title: "Industry, Innovation & Infrastructure",
    content: `AI tools and cloud logistics enhance e-commerce infrastructure.`,
    category: "Innovation",
    extended: `Our backend uses smart routing, predictive inventory, and seller analytics to ensure sustainable scaling.`,
    color: "bg-orange-500",
    details: [
      { title: "Key Feature", description: "Smart routing and AI-driven logistics for sustainable scaling." },
      { title: "Action Step", description: "Leverage our AI tools to optimize your business operations." },
    ],
  },
  {
    id: 12,
    title: "Responsible Consumption & Production",
    content: `Promote green products, reduce waste.`,
    category: "Environment",
    extended: `We highlight eco-certified products and provide buyers with a carbon score on their order.`,
    color: "bg-yellow-500",
    details: [
      { title: "Key Feature", description: "Carbon footprint tracking and eco-certified products." },
      { title: "Action Step", description: "Make greener choices with our eco-friendly products." },
    ],
  },
];

const categories = ["All", "Environment", "Equality", "Innovation", "Education"];

const SustainableDevelopmentGoals = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const filteredGoals =
    selectedCategory === "All"
      ? sdgGoals
      : sdgGoals.filter((goal) => goal.category === selectedCategory);

  return (
    <div className="p-6 md:p-12 bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white rounded-xl space-y-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        🌍 Sustainable Development Goals <br />Powered by Our E-Commerce Platform
      </h2>

      {/* Filter */}
      <div className="flex justify-center flex-wrap gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-3 rounded-full font-medium border ${
              selectedCategory === cat
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-white  text-black dark:bg-gray-700 dark:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SDG Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGoals.map((goal) => (
          <motion.div
            key={goal.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedGoal(goal)}
            className={`cursor-pointer rounded-xl p-8 shadow-xl transition-all duration-300 ${goal.color} dark:bg-opacity-80`}
          >
            <div className="text-xl font-bold text-white mb-3">
              SDG {goal.id}: {goal.title}
            </div>
            <p className="text-sm text-white/90 mb-4">{goal.content}</p>
            <button className="px-4 py-2 text-sm rounded bg-white text-black hover:bg-gray-200 shadow-md">
              Learn More
            </button>

            {/* SDG Detailed Information */}
            <div className="mt-6 space-y-4">
              <h4 className="font-semibold text-lg text-white">SDG {goal.id} Details</h4>
              {goal.details.map((detail, index) => (
                <div key={index} className="text-sm text-white/80">
                  <strong>{detail.title}: </strong>{detail.description}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Explore More SDG Initiatives 3.0 */}
      <div className=" text-slate-50 mt-44">.</div>
<div className=" my-32">
  <motion.div
    className="text-center mb-12"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
      🚀 Explore More SDG Initiatives
    </h2>
    <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-xl mx-auto text-sm">
      Beyond our core goals, we’re building pathways to a more sustainable, inclusive, and equitable digital economy.
    </p>
  </motion.div>

  {/* Feature Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "🌊 Life Below Water",
        desc: "Join marine cleanup efforts, eco-friendly fishing, and ocean-safe packaging drives.",
        btn: "Support Ocean Health",
        color: "bg-sky-500",
      },
      {
        title: "🌾 Life on Land",
        desc: "Promote reforestation, ethical farming, and plant-based product awareness.",
        btn: "Plant a Tree",
        color: "bg-cyan-500",
      },
      {
        title: "💼 Decent Work & Growth",
        desc: "Support fair-wage sellers, green startups, and jobs in the ethical economy.",
        btn: "Explore Opportunities",
        color: "bg-indigo-600",
      },
    ].map((item, idx) => (
      <motion.div
        key={idx}
        className={`p-6 rounded-2xl text-white ${item.color} shadow-lg`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-sm mb-4">{item.desc}</p>
        <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
          {item.btn}
        </button>
      </motion.div>
    ))}
  </div>

  {/* Animated Call to Action */}
  <motion.div
    className="mt-20 text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
      Ready to Build a Better Future?
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
      Every small action counts. Start supporting SDGs through conscious choices on our platform.
    </p>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-semibold transition"
    >
      Join the Movement 🌱
    </motion.button>
  </motion.div>
</div>

<div className=" text-slate-50 mt-44">.</div>

      {/* Additional Section Below Cards */}
      <div className="mt-16 bg-gray-200 dark:bg-gray-700 p-8 rounded-lg space-y-6">
        <h3 className="text-2xl font-bold text-center text-black dark:text-white">
          Explore More SDG Initiatives
        </h3>
        <p className="text-center text-sm text-black dark:text-white">
          Our commitment extends beyond just these SDGs. Join us in creating a sustainable future by supporting these global initiatives.
        </p>

        {/* Actionable Steps to Engage with SDGs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-lg font-semibold text-black dark:text-white">Clean Water and Sanitation</h4>
            <p className="text-sm text-gray-800 dark:text-white">
              Access to clean water is essential for all. Support eco-friendly water-saving products and initiatives.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-400">
              Take Action Now
            </button>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-lg font-semibold text-black dark:text-white">Affordable and Clean Energy</h4>
            <p className="text-sm text-gray-800 dark:text-white">
              Energy should be affordable and sustainable. Explore products that promote renewable energy.
            </p>
            <button className="mt-4 px-4 py-2 bg-lime-400 text-white rounded shadow-md hover:bg-green-400">
              Learn More
            </button>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-lg font-semibold text-black dark:text-white">Life on Land</h4>
            <p className="text-sm text-gray-800 dark:text-white">
              Protect ecosystems and promote biodiversity by supporting sustainable land-use practices.
            </p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded shadow-md hover:bg-orange-400">
              Get Involved
            </button>
          </div>
        </div>


        

        {/* Expanded Section */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg mt-8 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h4 className="text-xl font-semibold">Additional SDG Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>🌱 Learn how to reduce your carbon footprint with our eco-friendly products.</li>
                <li>💡 Explore our workshops and webinars on sustainability and responsible production.</li>
                <li>🌍 Join our global community and collaborate on SDG-driven initiatives.</li>
              </ul>
              <button
                onClick={() => setShowMore(false)}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 mt-4"
              >
                Show Less
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {!showMore && (
          <button
            onClick={() => setShowMore(true)}
            className="px-6 py-2 bg-gray-700 text-white rounded shadow-md mt-6 hover:bg-gray-600"
          >
            Show More SDG Resources
          </button>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedGoal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGoal(null)}
          >
            <motion.div
              className="bg-gray-800 dark:bg-gray-900 text-white rounded-lg p-8 w-[90%] max-w-2xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-3">
                SDG {selectedGoal.id}: {selectedGoal.title}
              </h3>
              <p className="text-sm mb-4">{selectedGoal.extended}</p>
              <p className="text-sm mb-6">
                We are committed to making a real-world impact with our platform, focusing on sustainability, inclusivity, and responsibility. Our initiatives span across various sectors, ensuring that everyone has the opportunity to contribute to a better future.
              </p>
              <button
                onClick={() => setSelectedGoal(null)}
                className="mt-4 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded hover:opacity-80"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}

<div className=" text-slate-50 mt-44">.</div>
<div className=" text-slate-50 mt-44">.</div>

<div className="text-center mt-20 mb-10">
  <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
    🌱 SDG-Aligned Products for a Better Tomorrow
  </h2>
  <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm md:text-base">
    Explore sustainable, ethical, and eco-conscious products that directly support the UN's Sustainable Development Goals.
  </p>
</div>



<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
  {[
    {
      title: "Solar Lantern Mini",
      img: "https://solight-design.com/cdn/shop/products/solar-lantern-ourdoor-solight-twilight_8334_1080x1080.jpg?v=1734995460",
      sdg: "Clean Energy",
      price: "₹2466",
    },
    {
      title: "Organic Cotton T-shirt",
      img: "https://brownliving.in/cdn/shop/files/human-nature-womens-organic-cotton-t-shirt-sage-ek-saath-sustainable-womens-t-shirt-brown-living-hn-wt-sage-s-510027.jpg?v=1720422238",
      sdg: "Responsible Consumption",
      price: "₹2599",
    },
    {
      title: "Plant-Based Shampoo Bar",
      img: "https://earthrhythm.com/cdn/shop/files/Anti_Dandruff_Shampoo_Bar_246fa104-b4c6-4895-8957-432340c04616.jpg?v=1730101428",
      sdg: "Life on Land",
      price: "₹599",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-neutral-800 rounded-xl shadow-md border border-gray-200 dark:border-neutral-700 overflow-hidden"
    >
      <div className="h-36 w-full overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold text-black dark:text-white mb-1">
          {item.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 italic">
          SDG: {item.sdg}
        </p>
        <p className="text-sm font-medium text-black dark:text-white">
          {item.price}
        </p>
        <button className="mt-2 text-sm px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition">
          View Details
        </button>
      </div>
    </motion.div>
  ))}
</div>


<div className=" text-slate-50 mt-44">.</div>
<div className=" text-slate-50 mt-44">.</div>



        {/* SDG Review Cards with Stars */}
<div className="mt-28">
  <motion.div
    className="text-center mb-14"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold text-black dark:text-white">
      ⭐ Loved by Our Global SDG Champions
    </h2>
    <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm">
      Check out what changemakers around the world are saying about our SDG-driven efforts and how it’s impacting their lives.
    </p>
  </motion.div>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {[
      {
        name: "Fatima (Nigeria)",
        stars: 5,
        text: "Thanks to your green logistics, our local eco-market grew 3x. You've changed how I do business!",
        impact: "Climate Action, Economic Growth",
      },
      {
        name: "Jin (South Korea)",
        stars: 4,
        text: "Affordable clean energy products helped us light our village sustainably. This is real SDG action!",
        impact: "Clean Energy, Industry Innovation",
      },
      {
        name: "Elena (Spain)",
        stars: 5,
        text: "The support for women-led sellers is amazing. I got mentorship, visibility, and zero commission. 💖",
        impact: "Gender Equality, Reduced Inequality",
      },
    ].map((review, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.2, duration: 0.6 }}
        className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 dark:border-neutral-700"
      >
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, idx) => (
            <svg
              key={idx}
              className={`h-5 w-5 ${
                idx < review.stars ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.538 1.118l-3.388-2.462a1 1 0 00-1.176 0l-3.388 2.462c-.783.57-1.838-.196-1.538-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
          ))}
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">"{review.text}"</p>
        <div className="text-xs text-gray-500 dark:text-gray-400 italic">
          — {review.name}, <span className="text-indigo-500">{review.impact}</span>
        </div>
      </motion.div>
    ))}
  </div>

  {/* CTA */}
  <motion.div
    className="text-center mt-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
      Be a voice in the change 🌱
    </h3>
    <button className="px-6 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-all">
      Share Your SDG Story
    </button>
  </motion.div>
</div>

        
      </AnimatePresence>
    </div>
  );
};

export default SustainableDevelopmentGoals;

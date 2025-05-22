export default function BlackCatDataWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-black text-white p-6 shadow-md">
        <h1 className="text-4xl font-bold">Black Cat Data</h1>
        <p className="text-sm mt-2 italic">Advocating Data Integrity & Accuracy</p>
      </header>

      <main className="p-8 max-w-5xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p>
            Black Cat Data is an independent organization dedicated to promoting data integrity,
            accuracy, and responsible use of data. We research and explore emerging technologies,
            methodologies, and trends in data governance, analytics, and infrastructure.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensure and advocate for clean, accurate, and ethical data practices.</li>
            <li>Educate and inform the public and professionals on the importance of data integrity.</li>
            <li>Explore, test, and report on emerging data solutions and technologies.</li>
            <li>Foster a community of data-conscious individuals and organizations.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-100 rounded-2xl shadow">
              <h3 className="font-bold text-lg mb-2">Data Accuracy</h3>
              <p>Promoting methods and tools to reduce data errors and inconsistencies.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-2xl shadow">
              <h3 className="font-bold text-lg mb-2">Emerging Trends</h3>
              <p>Keeping up with advancements like AI, machine learning, and decentralized data.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-2xl shadow">
              <h3 className="font-bold text-lg mb-2">Ethical Data Use</h3>
              <p>Encouraging transparency, accountability, and fairness in data-driven systems.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>If you’re interested in collaborating, learning more, or supporting our work, reach out to us:</p>
          <p className="mt-2 font-mono">contact@blackcatdata.org</p>
        </section>
       
        <section className="mt-16 mb-12">
	  <h2 className="text-2xl font-semibold mb-4">Blog</h2>
	  <div className="space-y-6">
	    <article className="p-4 bg-gray-100 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">Why Data Integrity Matters More Than Ever</h3>
              <p className="text-sm text-gray-700 mb-2">
                In a world full of noise, clean data is the only signal. Here’s how to protect it at all costs...
	      </p>
	      <a href="#" className="text-blue-600 hover:underline text-sm">Read more</a>
	    </article>

	    <article className="p-4 bg-gray-100 rounded-2xl shadow">
	      <h3 className="text-xl font-bold mb-2">Grassroots vs Bureaucratic Data Culture</h3>
              <p className="text-sm text-gray-700 mb-2">
	        What bottom-up data ethics can teach us about responsibility, agility, and truth.
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Read more</a>
	   </article>
	  </div>
	</section>

	<section className="mt-16 mb-12">
	  <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
	  <p className="mb-4">Be the first to hear about our latest insights, tools, and community events.</p>

	  <form
	    action="https://formspree.io/f/your-form-id"
	    method="POST"
	    className="flex flex-col md:flex-row gap-4"
	  >

	   <input
	     type="email"
	     name="email"
	     required
	     placeholder="Enter your email"
	     className="flex-1 p-2 rounded-md border border-gray-300"
           />
	   <button
	     type="submit"
	     className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
	   >
	     Subscribe
	   </button>
	 </form>
	</section>

      </main>

      <footer className="bg-black text-white text-center p-4 mt-12">
        <p>&copy; {new Date().getFullYear()} Black Cat Data. All rights reserved.</p>
      </footer>
    </div>
  );
}


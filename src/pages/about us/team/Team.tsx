import team1 from '../../../assets/images/team/team1.avif'
import team2 from '../../../assets/images/team/team2.avif'
import team3 from '../../../assets/images/team/team3.jpg'
import team4 from '../../../assets/images/team/team4.jpg'
import team5 from '../../../assets/images/team/team5.jpg'
import team6 from '../../../assets/images/team/team6.jpg'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      image: team1,
      role: "Founder & CEO",
    },
    {
      id: 2,
      name: "Emily Smith",
      image: team2,
      role: "Marketing Director",
    },
    {
      id: 3,
      name: "Michael Johnson",
      image: team3,
      role: "Operations Manager",
    },
    {
      id: 4,
      name: "David Brown",
      image: team4,
      role: "Customer Support Specialist",
    },
    {
      id: 5,
      name: "David Garcia",
      image: team5,
      role: "Web Developer",
    },
    {
      id: 6,
      name: "Mick Wilson",
      image: team6,
      role: "Product Curator",
    },
  ];
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text text-center py-3 ">Our Team Member</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className='image-container'>
              <img
                src={member.image}
                alt={member.name}
                className="w-full magnifier h-64 object-cover object-center"
              />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{member.name}</h2>
                <p className="text-gray-700 mb-4">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useState } from "react";
import FloatingTopBar from "../components/FloatingTopBar";
import FloatingSidebar from "../components/FloatingSidebar";

const OrganizingCommittee = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const chiefPatrons = [
    {
      name: "Dr. Ashok k Chauhan",
      title: "Chief Patron",
      subtitle: "Founder President, Amity Education Group",
      image: "https://amity.edu/noida/images/ashok-chauhan.jpg",
    },
    {
      name: "Dr. Atul Chauhan",
      title: "Patron",
      subtitle: "Chancellor, Amity University President, RBEF",
      image:
        "https://assets-ext.bizzabo.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1611228293/hrmsnaje0z7ouim7zrzv.jpg",
    },
  ];

  const coPatrons = [
    {
      name: "Mr. U Ramachandran",
      title: "Sr. Vice President",
      subtitle: "Amity Education Group",
    },
    {
      name: "Mr. Gauravh Gupta",
      title: "Vice President",
      subtitle: "Amity Education Group",
    },
    {
      name: "Dr. Vivekanand Pandey",
      title: "Vice Chancellor",
      subtitle: "Amity University, Patna",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4JjLOq6QbP_3m3fzHr3M7_wRGI1z16mH9Q&s",
    },
  ];

  const mentorChairs = [
    {
      name: "Dr. Shashi Shekhar",
      title: "Mentor",
      subtitle: "Director, ASET, Amity University, Patna",
      image:
        "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=jRm_QdEAAAAJ&citpid=2",
    },
    {
      name: "Dr. Saurabh Sambhav",
      title: "Conference Chair",
      subtitle: "Assistant Professor, ASET, Amity University Patna",
      image: "/saurabhSambhav.jpg",
    },
    {
      name: "Dr. Shilpi Singh",
      title: "Conference Chair",
      subtitle: "Assistant Professor, ASET, Amity University Patna",
      image:
        "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=9WBx-JUAAAAJ&citpid=7",
    },
  ];

  const conferenceCoChairs = [
    {
      name: "Dr. Umesh Kumar",
      title: "Assistant Professor, ASET, Amity University Patna",
    },
    {
      name: "Dr. Lalita Kumari",
      title: "Assistant Professor, ASET, Amity University Patna",
    },
    {
      name: "Dr. Deepak Kumar Singh",
      title: "Assistant Professor, ASET, Amity University Patna",
    },
  ];

  const scientificCommittee = [
    {
      name: "Dr. Rakesh Kumar Yadav",
      title: "Assistant Professor, ASET, Amity University Patna",
    },
    {
      name: "Dr. Preetish Ranjan",
      title: "Assistant Professor, ASET, Amity University Patna",
    },
    {
      name: "Mr. Nikhil Sharma",
      title: "Assistant Professor, ASET, Amity University Patna",
    },
    {
      name: "Mr. Satyajit Nath",
      title: "Assistant Professor, ASET, Amity University Patna",
    },
  ];

  const technicalCommittee = [
    {
      name: "Dr. Santosh Kumar Dixit",
      title: "Assistant Professor, ASET, Amity University Patna",
    },
    {
      name: "Dr. Sanjay Kumar",
      title: "Assistant Professor, ASET, Amity University Patna",
    },
    {
      name: "Dr. Vishal Srivastava",
      title: "Assistant Professor, ASET, Amity University Patna",
    },
    {
      name: "Dr. Abhishek Anand",
      title: "Assistant Professor, ASET, Amity University Patna",
    },
    {
      name: "Ms. Anamika Kumari",
      title: "Assistant Professor, ASET, Amity University Patna",
    },
    {
      name: "Mr. Saurav Kumar",
      title: "Assistant Professor, ASET, Amity University Patna",
    },
  ];

  const sponsorshipCommittee = [
    {
      name: "Dr. Prakash Kumar",
      title: "Assistant Professor, ASET, Amity University Patna",
    },
    {
      name: "Dr. Niranjan Kumar",
      title: "Assistant Professor, ASET, Amity University Patna",
    },
  ];

  const advisoryCommittee = [
    {
      name: "Yota Otachi",
      title: "Associate Professor",
      subtitle:
        "Department of Mathematical Informatics, Graduate School of Informatics, Nagoya University, Japan",
    },
    {
      name: "Dr. Ahmed Ezzat Mohamed",
      title: "Faculty Member",
      subtitle:
        "Faculty of Engineering and Technology, Majmaah University, Saudi Arabia",
    },
    {
      name: "Professor Ekram Hossain",
      title: "Professor",
      subtitle: "Manitoba University, Canada",
    },
    {
      name: "Prof.(Dr.) Gajraj Gopal Shahu",
      title: "Professor",
      subtitle: "Manitoba University, Canada",
    },
    {
      name: "Professor Valentina E Balas",
      title: "Professor",
      subtitle: "Aurel Vlaicu University of Arad",
    },
    {
      name: "Professor Mohan Lal Kolhe",
      title: "Professor",
      subtitle: "University of Agder",
    },
    {
      name: "Prof. (Dr.) Manoj Kumar",
      title: "Professor",
      subtitle: "CU Bilaspur, India",
    },
    {
      name: "Dr. Haider B",
      title: "Faculty",
      subtitle: "IIT (ISM) Dhanbad, India",
    },
    {
      name: "Dr. Yadunath Pathak",
      title: "Faculty",
      subtitle: "VNIT Nagpur, India",
    },
    {
      name: "Prof. (Dr.) R. B. V. Subramanyam",
      title: "Professor",
      subtitle: "NIT Warangal, Telangana, India",
    },
    {
      name: "Prof.(Dr.) Gautam Barua",
      title: "Professor",
      subtitle: "IIIT Guwahati, India",
    },
    {
      name: "Dr. Narsing K. Jha",
      title: "Faculty",
      subtitle: "Department of Applied Mechanics, IIT Delhi",
    },
    {
      name: "Dr. Sameer Sahasrabudhe",
      title: "Faculty",
      subtitle: "IIT Bombay, India",
    },
    {
      name: "Dr. Rajeev Srivastava",
      title: "Faculty",
      subtitle:
        "Department of Computer Science and Engineering, IIT BHU, India",
    },
    {
      name: "Prof.(Dr.) Rashmi Bhardwaj",
      title: "Professor",
      subtitle: "Guru Gobind Singh Indraprastha University, New Delhi",
    },
    {
      name: "Sanjay Kedia",
      title: "Scientist",
      subtitle: "IUAC, New Delhi",
    },
    {
      name: "Prof.(Dr.) S.R. Balasundaram",
      title: "Professor",
      subtitle: "NIT Tiruchirappalli, Tamil Nadu, India",
    },
    {
      name: "Jagdish Raheja",
      title: "Ex Chief Scientist",
      subtitle:
        "Central Electronics Engineering Research Institute (CEERI), Pilani, India",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <FloatingTopBar onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
      <FloatingSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Content */}
      <div className="2xl:ml-80 xl:ml-80 lg:ml-80 md:ml-6 ml-4 mr-4 lg:mr-8 pt-28 pb-12 px-4 lg:px-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-teal-500/20 border border-teal-400/30 rounded-full text-teal-300 text-sm font-medium mb-4"
            >
              Leadership & Organization
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Organizing Committee
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/80 text-lg"
            >
              Meet the distinguished team leading ICISTECH 2025
            </motion.p>
          </motion.div>

          {/* Chief Patron & Patron */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-teal-300 text-center mb-8">
              Chief Patron & Patron
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {chiefPatrons.map((person, index) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    {person?.image ? (
                      <img
                        src={person.image}
                        className="w-full h-full rounded-full"
                      />
                    ) : (
                      <User className="w-10 h-10 text-white" />
                    )}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {person.name}
                  </h3>
                  <p className="text-teal-300 font-medium text-sm mb-1">
                    {person.title}
                  </p>
                  <p className="text-white/70 text-sm">{person.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Co-Patrons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-teal-300 text-center mb-8">
              Co-Patrons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coPatrons.map((person, index) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    {person?.image ? (
                      <img
                        src={person.image}
                        className="w-full h-full rounded-full"
                      />
                    ) : (
                      <User className="w-10 h-10 text-white" />
                    )}
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {person.name}
                  </h3>
                  <p className="text-teal-300 font-medium text-sm mb-1">
                    {person.title}
                  </p>
                  <p className="text-white/70 text-xs">{person.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mentor & Conference Chairs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-teal-300 text-center mb-8">
              Mentor & Conference Chairs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mentorChairs.map((person, index) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    {person?.image ? (
                      <img
                        src={person.image}
                        className="w-full h-full rounded-full"
                      />
                    ) : (
                      <User className="w-10 h-10 text-white" />
                    )}
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {person.name}
                  </h3>
                  <p className="text-purple-300 font-medium text-sm mb-1">
                    {person.title}
                  </p>
                  <p className="text-white/70 text-xs">{person.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Conference Co-Chairs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-teal-300 text-center mb-8">
              Conference Co-Chairs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {conferenceCoChairs.map((person, index) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.5 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <h3 className="text-white font-semibold text-sm mb-2">
                    {person.name}
                  </h3>
                  <p className="text-teal-300 text-xs">{person.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scientific Committee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-teal-300 text-center mb-8">
              Scientific Committee Chair
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scientificCommittee.map((person, index) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <h3 className="text-white font-semibold text-sm mb-2">
                    {person.name}
                  </h3>
                  <p className="text-teal-300 text-xs">{person.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Program Committee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-teal-300 text-center mb-8">
              Technical Program Committee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalCommittee.map((person, index) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.6 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <h3 className="text-white font-semibold text-sm mb-2">
                    {person.name}
                  </h3>
                  <p className="text-teal-300 text-xs">{person.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sponsorship Committee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-teal-300 text-center mb-8">
              Sponsorship and Branding Committee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {sponsorshipCommittee.map((person, index) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 4.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <h3 className="text-white font-semibold text-sm mb-2">
                    {person.name}
                  </h3>
                  <p className="text-teal-300 text-xs">{person.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* International Advisory Committee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-teal-300 text-center mb-8">
              International & National Advisory Committee Members (Tentative)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advisoryCommittee.map((person, index) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 4.8 + index * 0.05 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all duration-300"
                >
                  <h3 className="text-white font-semibold text-xl mb-2">
                    {person.name}
                  </h3>
                  <p className="text-green-300 font-medium text-sm mb-1">
                    {person.title}
                  </p>
                  <p className="text-white/70 text-sm leading-tight">
                    {person.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrganizingCommittee;

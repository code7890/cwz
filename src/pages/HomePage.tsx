import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, Trophy, BookOpen, Zap, Target, Heart, Star, Play, CheckCircle, TrendingUp, Award, Brain, Rocket, Sparkles, Globe, Lightbulb } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const HomePage: React.FC = () => {
  const { user } = useAuth();
  const features = [
    {
      icon: BookOpen,
      title: 'Clear Roadmaps',
      description: 'Step-by-step learning paths designed for desi learners. No confusion, just clarity.',
      bgColor: 'bg-cream-100',
      iconColor: 'text-primary-600',
      borderColor: 'border-cream-200',
    },
    {
      icon: Code,
      title: 'Interactive Learning',
      description: 'Built-in code editor, challenges, and projects. Learn by doing, not just reading.',
      bgColor: 'bg-sage-100',
      iconColor: 'text-sage-600',
      borderColor: 'border-sage-200',
    },
    {
      icon: Users,
      title: 'Desi Community',
      description: 'Connect with like-minded learners. Share progress, get help, grow together.',
      bgColor: 'bg-lavender-100',
      iconColor: 'text-lavender-600',
      borderColor: 'border-lavender-200',
    },
    {
      icon: Trophy,
      title: 'Real Outcomes',
      description: 'From learning to earning. We focus on skills that lead to jobs and income.',
      bgColor: 'bg-peach-100',
      iconColor: 'text-peach-600',
      borderColor: 'border-peach-200',
    },
  ];

  const courses = [
    {
      title: 'Complete Web Development',
      description: 'HTML, CSS, JavaScript se React tak. Full-stack developer banne ka complete roadmap.',
      level: 'Beginner to Advanced',
      duration: '12 weeks',
      students: '2.5K+',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      accentColor: 'text-blue-600',
      borderColor: 'border-blue-200',
    },
    {
      title: 'Python for Everyone',
      description: 'Programming ki duniya mein entry. Data Science aur AI ke liye foundation.',
      level: 'Beginner',
      duration: '8 weeks',
      students: '3.2K+',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
      accentColor: 'text-green-600',
      borderColor: 'border-green-200',
    },
    {
      title: 'Freelancing Mastery',
      description: 'Coding skills ko income mein convert karne ka practical guide. Client finding se project delivery tak.',
      level: 'Intermediate',
      duration: '6 weeks',
      students: '1.8K+',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
      accentColor: 'text-purple-600',
      borderColor: 'border-purple-200',
    },
  ];

  const stats = [
    { number: '10K+', label: 'Students Learning', icon: Users },
    { number: '50+', label: 'Courses Available', icon: BookOpen },
    { number: '95%', label: 'Success Rate', icon: TrendingUp },
    { number: '24/7', label: 'Community Support', icon: Heart },
  ];

  const testimonials = [
    {
      name: 'Ahmed Khan',
      role: 'Frontend Developer',
      content: 'CodeWithZee ka approach bilkul different hai. Simple Urdu mein samjhaya, practical projects diye. Ab main freelancing kar raha hun!',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      company: 'Freelancer',
      bgColor: 'bg-cream-50',
      borderColor: 'border-cream-200',
    },
    {
      name: 'Fatima Ali',
      role: 'Full Stack Developer',
      content: 'Pehle coding se dar lagta tha. Yahan step-by-step seekha, community ka support mila. Ab tech company mein job hai!',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      company: 'TechCorp',
      bgColor: 'bg-sage-50',
      borderColor: 'border-sage-200',
    },
    {
      name: 'Hassan Sheikh',
      role: 'AI Engineer',
      content: 'Best platform for desi students. Real guidance, practical skills, aur sab kuch Hinglish mein. Highly recommended!',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      company: 'AI Startup',
      bgColor: 'bg-lavender-50',
      borderColor: 'border-lavender-200',
    },
  ];

  return (
    <div className="animate-fade-in overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50 pt-20 pb-16 min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-sage-400 rounded-full animate-bounce-subtle"></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-peach-400 rounded-full animate-pulse"></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-lavender-400 rounded-full animate-bounce-subtle"></div>
          <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-cream-400 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-8 border border-primary-200 shadow-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Desi-first tech learning platform
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-loose animate-slide-in-left">
              Learn Tech,{' '}
              <span className="text-primary-600 relative">
                Build Mindset
                <div className="absolute -bottom-0 left-0 right-0 h-1 bg-primary-200 rounded-full transform scale-x-0 animate-scale-x"></div>
              </span>
              <br />
              Find Direction
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-neutral-600 mb-8 leading-relaxed max-w-3xl mx-auto animate-slide-in-right">
              <span className="font-semibold text-neutral-800 bg-cream-100 px-2 py-1 rounded-md">
                Practical skills + Real guidance + Desi approach
              </span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
              <Link
                to={user ? "/dashboard" : "/signup"}
                className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {user ? "Go to Dashboard" : "Start Learning Free"}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/roadmaps"
                className="border-2 border-neutral-300 text-neutral-700 px-8 py-4 rounded-xl font-semibold hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Roadmaps
              </Link>
            </div>

            {/* Visual Elements Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              {/* Code Block */}
              <div className="bg-neutral-900 text-green-400 p-4 rounded-xl shadow-lg font-mono text-xs animate-float border-2 border-neutral-800">
                <div className="text-blue-400">function</div>
                <div className="text-yellow-400">success() {'{'}</div>
                <div className="text-white ml-2">return true;</div>
                <div className="text-yellow-400">{'}'}</div>
              </div>

              {/* Stats Card */}
              <div className="bg-primary-50 border-2 border-primary-200 p-4 rounded-xl shadow-lg animate-bounce-subtle">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-primary-600 mr-2" />
                  <span className="text-2xl font-bold text-primary-600">10K+</span>
                </div>
                <div className="text-sm text-primary-700 font-medium">Students</div>
              </div>

              {/* Achievement Card */}
              <div className="bg-sage-50 border-2 border-sage-200 p-4 rounded-xl shadow-lg animate-pulse-soft">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="w-5 h-5 text-sage-600 mr-2" />
                  <span className="text-2xl font-bold text-sage-600">95%</span>
                </div>
                <div className="text-sm text-sage-700 font-medium">Success Rate</div>
              </div>

              {/* Community Card */}
              <div className="bg-peach-50 border-2 border-peach-200 p-4 rounded-xl shadow-lg animate-float">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="w-5 h-5 text-peach-600 mr-2" />
                  <span className="text-xl font-bold text-peach-600">24/7</span>
                </div>
                <div className="text-sm text-peach-700 font-medium">Support</div>
              </div>
            </div>

            {/* Feature Icons */}
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="flex items-center space-x-2 text-neutral-600">
                <Code className="w-5 h-5" />
                <span className="text-sm font-medium">Interactive</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-600">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">Community</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-600">
                <Lightbulb className="w-5 h-5" />
                <span className="text-sm font-medium">Practical</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-8 w-16 h-16 bg-primary-100 rounded-2xl shadow-lg animate-float hidden lg:flex items-center justify-center border-2 border-primary-200">
          <Code className="w-8 h-8 text-primary-600" />
        </div>
        
        <div className="absolute bottom-1/4 right-8 w-14 h-14 bg-sage-100 rounded-xl shadow-lg animate-bounce-subtle hidden lg:flex items-center justify-center border-2 border-sage-200">
          <Brain className="w-7 h-7 text-sage-600" />
        </div>
        
        <div className="absolute top-1/2 right-16 w-12 h-12 bg-peach-100 rounded-full shadow-lg animate-pulse-soft hidden lg:flex items-center justify-center border-2 border-peach-200">
          <Rocket className="w-6 h-6 text-peach-600" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why CodeWithZee is Different
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Hum sirf code nahi sikhate. Hum tumhein career launch karne mein help karte hain, step by step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`${feature.bgColor} ${feature.borderColor} border-2 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group hover:-translate-y-1`}
                >
                  <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 border border-primary-200">
              <BookOpen className="w-4 h-4 mr-2" />
              Featured Courses
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Start Your Learning Journey
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Carefully crafted courses jo tumhein beginner se professional tak le jaayenge
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`${course.bgColor} ${course.borderColor} border-2 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`${course.accentColor} text-sm font-semibold bg-white px-3 py-1 rounded-full`}>
                    {course.level}
                  </span>
                  <div className="flex items-center text-neutral-600 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {course.title}
                </h3>
                
                <p className="text-neutral-700 mb-4 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-neutral-600 text-sm">
                    <Trophy className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Certificate
                  </div>
                </div>
                
                <Link
                  to="/courses"
                  className={`w-full ${course.accentColor} bg-white border-2 ${course.borderColor} px-4 py-3 rounded-xl font-semibold hover:bg-neutral-50 transition-all duration-300 flex items-center justify-center group-hover:shadow-md`}
                >
                  Start Learning
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Courses
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 border border-primary-200">
                <Heart className="w-4 h-4 mr-2" />
                Our Philosophy
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Digital Bootcamp with a <span className="text-primary-600">Desi Soul</span>
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p className="text-lg">
                  Hum believe karte hain ke learning sirf theory nahi honi chahiye. 
                  <strong className="text-neutral-800"> Action {'>'} Theory</strong> - yahi hamara mantra hai.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-cream-50 rounded-xl border border-cream-200">
                    <Target className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-neutral-900">Practical:</strong>
                      <span className="text-neutral-700 ml-1">Hands-on skills jo real world mein kaam aayein</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-sage-50 rounded-xl border border-sage-200">
                    <Users className="w-5 h-5 text-sage-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-neutral-900">Relatable:</strong>
                      <span className="text-neutral-700 ml-1">Desi context mein, no-jargon approach</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-peach-50 rounded-xl border border-peach-200">
                    <Trophy className="w-5 h-5 text-peach-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-neutral-900">Purposeful:</strong>
                      <span className="text-neutral-700 ml-1">Har skill income ya clarity ki taraf le jaaye</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary-100 to-cream-100 rounded-2xl p-8 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Students learning together"
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg border-4 border-white">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm font-medium">Real Guidance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-neutral-600">
              Dekho kaise hamari community grow kar rahi hai
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${testimonial.bgColor} ${testimonial.borderColor} border-2 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-sm"
                  />
                  <div>
                    <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                    <div className="text-sm text-neutral-600">{testimonial.role}</div>
                    <div className="text-xs text-neutral-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Award className="w-16 h-16 text-primary-200 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of students who are already building their future with CodeWithZee
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-neutral-50 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
            >
              Start Free Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/courses"
              className="border-2 border-primary-400 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
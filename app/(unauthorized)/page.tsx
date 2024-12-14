import React from 'react';
import { ArrowRight, MessageSquare, Clock, BarChart3, Bot } from 'lucide-react';
import LoginButton from '@/components/buttons/login-button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diro - Manage Facebook Messages Like Never Before',
  description:
    'Streamline your Facebook Page conversations, automate responses, and never miss a customer message again.',
};

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Manage Facebook Messages Like Never Before</h1>
            <p className="text-xl mb-8">
              Streamline your Facebook Page conversations, automate responses, and never miss a customer message again.
            </p>
            <LoginButton
              provider="facebook"
              className="inline-flex items-center mx-auto bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </LoginButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Diro?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8 text-blue-600" />}
              title="Unified Inbox"
              description="Manage all your Facebook Page messages in one centralized dashboard"
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-blue-600" />}
              title="Quick Responses"
              description="Save time with customizable response templates and shortcuts"
            />
            <FeatureCard
              icon={<Bot className="h-8 w-8 text-blue-600" />}
              title="Smart Automation"
              description="Set up automated responses for common questions and after-hours support"
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-blue-600" />}
              title="Analytics"
              description="Track response times, message volume, and customer satisfaction"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <Step
                number="1"
                title="Connect Your Facebook Page"
                description="Simply log in with Facebook and select the pages you want to manage"
              />
              <Step
                number="2"
                title="Set Up Your Preferences"
                description="Customize your response templates and automation rules"
              />
              <Step
                number="3"
                title="Start Managing Messages"
                description="Reply to messages efficiently from our unified dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Customer Communication?</h2>
          <p className="text-xl mb-8">
            Join thousands of businesses using Diro to deliver exceptional customer service on Facebook.
          </p>
          <LoginButton
            provider="facebook"
            className="inline-flex items-center mx-auto bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </LoginButton>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Testimonial
              quote="Diro has completely transformed how we handle customer messages. Our response time has improved by 70%!"
              author="Sarah Johnson"
              role="E-commerce Owner"
            />
            <Testimonial
              quote="The automation features are a game-changer. We can now provide 24/7 customer support effortlessly."
              author="Mike Chen"
              role="Restaurant Manager"
            />
            <Testimonial
              quote="Easy to use and incredibly effective. Our customer satisfaction has never been higher."
              author="Lisa Rodriguez"
              role="Retail Store Owner"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Component for feature cards
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Component for how it works steps
const Step = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
      {number}
    </div>
    <div className="ml-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// Component for testimonials
const Testimonial = ({ quote, author, role }: { quote: string; author: string; role: string }) => (
  <div className="p-6 bg-gray-50 rounded-lg">
    <p className="text-gray-700 mb-4 italic">"{quote}"</p>
    <div>
      <p className="font-semibold">{author}</p>
      <p className="text-gray-600 text-sm">{role}</p>
    </div>
  </div>
);

export default HomePage;

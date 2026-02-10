import React, { useEffect } from "react";
import { Check, Zap, Star, Infinity as InfinityIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PricingPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubscribe = (plan: "monthly" | "yearly") => {
    if (!user) {
      navigate("/login");
      return;
    }
    // TODO: Implement payment integration
    alert(`Subscribing to ${plan} plan. Payment integration coming soon!`);
  };

  const features = [
    "Access to all courses",
    "Unlimited learning time",
    "New courses added monthly",
    "Downloadable resources",
    "Mobile & desktop access",
    "Certificates of completion",
    "Progress tracking",
    "Community access",
    "Priority support",
    "Lifetime updates",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-4">
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold">Limited Time Offer</span>
          </div>
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Get unlimited access to all courses, resources, and features with
            one subscription
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Monthly Plan */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-neutral-200 p-8 hover:border-primary-300 transition-all">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                Monthly
              </h3>
              <p className="text-neutral-600">Perfect for getting started</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline space-x-2">
                <span className="text-5xl font-bold text-neutral-900">
                  ₹999
                </span>
                <span className="text-xl text-neutral-600">/month</span>
              </div>
              <p className="text-sm text-neutral-500 mt-2">
                Billed monthly • Cancel anytime
              </p>
            </div>

            <button
              onClick={() => handleSubscribe("monthly")}
              className="w-full py-4 px-6 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors mb-6"
            >
              Get Started
            </button>

            <div className="space-y-3">
              {features.slice(0, 6).map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Yearly Plan - Popular */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-xl border-2 border-primary-500 p-8 relative transform md:scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                <Zap className="w-4 h-4" />
                <span>BEST VALUE</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Yearly</h3>
              <p className="text-primary-100">Save 17% with annual billing</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline space-x-2">
                <span className="text-5xl font-bold text-white">₹9,999</span>
                <span className="text-xl text-primary-100">/year</span>
              </div>
              <p className="text-sm text-primary-100 mt-2">
                ₹833/month • Save ₹2,000 annually
              </p>
            </div>

            <button
              onClick={() => handleSubscribe("yearly")}
              className="w-full py-4 px-6 bg-white text-primary-700 rounded-xl font-semibold hover:bg-primary-50 transition-colors mb-6"
            >
              Get Started
            </button>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-neutral-900 mb-2">
              Everything You Need to Succeed
            </h2>
            <p className="text-neutral-600">
              All plans include full access to our platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <InfinityIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Unlimited Access
              </h3>
              <p className="text-neutral-600">
                Learn at your own pace with unlimited access to all courses and
                content
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Quality Content
              </h3>
              <p className="text-neutral-600">
                Expertly crafted courses with hands-on projects and real-world
                examples
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Certificates
              </h3>
              <p className="text-neutral-600">
                Earn certificates of completion to showcase your achievements
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-neutral-600">
                Yes! You can cancel your subscription at any time. You'll
                continue to have access until the end of your billing period.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-neutral-600">
                We offer a 7-day money-back guarantee. If you're not satisfied,
                contact us within 7 days for a full refund.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-neutral-600">
                We accept all major credit cards, debit cards, UPI, and net
                banking through our secure payment gateway.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                Will new courses be added?
              </h3>
              <p className="text-neutral-600">
                Yes! We regularly add new courses and update existing content.
                All updates are included in your subscription at no extra cost.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning with us. Start your
            journey today!
          </p>
          <button
            onClick={() => handleSubscribe("yearly")}
            className="px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold hover:bg-primary-50 transition-colors text-lg"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

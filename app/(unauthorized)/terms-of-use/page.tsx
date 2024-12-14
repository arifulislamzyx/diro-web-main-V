import React from 'react';

const TermsOfUsePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p className="text-gray-700">
            By accessing or using Diro's services, you agree to be bound by these Terms of Use. If you disagree with any
            part of these terms, you may not access our service. Our Terms of Use were created with clarity and fairness
            in mind.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p className="text-gray-700">
            Diro provides a Facebook message management platform that allows business owners to manage and respond to
            Facebook Page messages. Our service includes but is not limited to:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Facebook Page message management and automation</li>
            <li>Customer conversation tracking and organization</li>
            <li>Response templates and automated messaging features</li>
            <li>Analytics and reporting tools</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <div className="space-y-3 text-gray-700">
            <p>To use our service, you must:</p>
            <ul className="list-disc ml-6">
              <li>Be at least 18 years old</li>
              <li>Register for an account with valid information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Have proper authorization to manage the Facebook Pages you connect</li>
            </ul>
            <p>You are responsible for all activities that occur under your account.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Facebook Platform Policies</h2>
          <p className="text-gray-700">
            Users must comply with Facebook's Platform Policies and Terms of Service. Your use of Diro must not violate
            any Facebook policies or terms, including but not limited to messaging, data collection, and privacy
            requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use</h2>
          <p className="text-gray-700">You agree not to:</p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Use the service for any illegal purposes</li>
            <li>Send spam or unauthorized commercial messages</li>
            <li>Violate any third-party privacy rights</li>
            <li>Attempt to bypass any service limitations or restrictions</li>
            <li>Share your account credentials with unauthorized users</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
          <div className="space-y-3 text-gray-700">
            <p>
              Subscription fees are billed in advance on a monthly or annual basis. By subscribing to our service, you
              agree to pay all applicable fees. Fees are non-refundable except where required by law.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
          <p className="text-gray-700">
            The service and its original content, features, and functionality are owned by Diro and are protected by
            international copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-700">
            Diro shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting
            from your use of or inability to use the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Service Modifications</h2>
          <p className="text-gray-700">
            We reserve the right to modify or discontinue, temporarily or permanently, the service with or without
            notice. We shall not be liable for any modification, suspension, or discontinuance of the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
          <p className="text-gray-700">
            We may terminate or suspend access to our service immediately, without prior notice, for conduct that we
            believe violates these Terms of Use or is harmful to other users, us, or third parties, or for any other
            reason.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
          <p className="text-gray-700">
            These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without
            regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
          <p className="text-gray-700">
            For any questions about these Terms of Use, please contact us at:
            <br />
            Email: terms@diro.ai
          </p>
        </section>

        <footer className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
